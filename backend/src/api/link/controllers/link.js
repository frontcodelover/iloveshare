"use strict";

/**
 *  link controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::link.link", ({ strapi }) => ({
  // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    const { data, meta } = await super.find(ctx);
    const displayedPostIds = data.map((link) => link.id);

    const knex = strapi.db.connection;

    const result = await knex('likes')
      .select(knex.raw('count(*) as total_likes, postid'))
      .whereIn('postid', displayedPostIds)
      .groupBy('postid');

    const myUserId = ctx.request.query.userId || 0

    const resultForMyUser = await knex('likes')
      .select(knex.raw('postid, id'))
      .where('userid', myUserId)
      .whereIn('postid', displayedPostIds);

    data.forEach((link) => {
      link.likes = result.find(({ postid }) => postid === link.id)?.total_likes || 0;

      const myLike = resultForMyUser.find(({postid}) => {
        return postid === link.id
      })
      link.userHasLike = myLike ? true : false
      link.userHasLikeId = myLike ? myLike.id : null
    });


    return { data, meta };
  },

  async findOne(ctx) {
    const { data, meta } = await super.findOne(ctx);
    const displayedPostIds = [data.id]

    const knex = strapi.db.connection;

    const result = await knex('likes')
      .select(knex.raw('count(*) as total_likes, postid'))
      .whereIn('postid', displayedPostIds)
      .groupBy('postid');

    const myUserId = ctx.request.query.userId || 0

    const resultForMyUser = await knex('likes')
      .select(knex.raw('postid, id'))
      .where('userid', myUserId)
      .whereIn('postid', displayedPostIds);

    const link = data
    link.likes = result.find(({ postid }) => postid === link.id)?.total_likes || 0;

    const myLike = resultForMyUser.find(({postid}) => {
      return postid === link.id
    })

    link.userHasLike = myLike ? true : false
    link.userHasLikeId = myLike ? myLike.id : null

    return { data: link, meta };
  },

  async getUserInfos(ctx) {
    const { data, meta } = await super.find(ctx);
    const userIds = data.map((link) => link.attributes.userid);
    const allUsers = await strapi
      .query("plugin::users-permissions.user")
      .findMany({
        select: ["id", "email", "username"],
        where: { id: { $in: userIds } },
      });
    console.log(allUsers);

    const data2 = data.map((link) => {
      link.user = allUsers.find(
        (user) => user.id === link.attributes.userid
      );
      link = {id:link.id, ...link.attributes, user:link.user};
      return link;
    }).sort((a, b) => {
      return b.likes - a.likes
    }).slice(0, 10);
    return { data: data2, meta };
  }

}));
