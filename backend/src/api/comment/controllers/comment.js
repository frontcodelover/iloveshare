"use strict";

/**
 *  comment controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::comment.comment", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async getCommentWithUser(ctx) {
    const { data, meta } = await super.find(ctx);
    const userIds = data.map((comment) => comment.attributes.userid);
    const allUsers = await strapi
      .query("plugin::users-permissions.user")
      .findMany({
        select: ["id", "email", "username"],
        where: { id: { $in: userIds } },
      });
    console.log(allUsers);

    const data2 = data.map((comment) => {
      comment.user = allUsers.find(
        (user) => user.id === comment.attributes.userid
      );
        comment = {id:comment.id, ...comment.attributes, user:comment.user};
      return comment;
    });
    return { data: data2, meta };
  },

  // // Method 2: Wrapping a core action (leaves core logic in place)
  // async find(ctx) {
  //   // some custom logic here
  //   ctx.query = { ...ctx.query, local: 'en' }

  //   // Calling the default core action
  //   const { data, meta } = await super.find(ctx);

  //   // some more custom logic
  //   meta.date = Date.now()

  //   return { data, meta };
  // },

  // // Method 3: Replacing a core action
  // async findOne(ctx) {
  //   const { id } = ctx.params;
  //   const { query } = ctx;

  // }
}));
