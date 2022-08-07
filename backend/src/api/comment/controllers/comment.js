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
}));
