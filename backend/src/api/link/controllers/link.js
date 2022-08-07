'use strict';

/**
 *  link controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::link.link', ({ strapi }) => ({
    // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    
    const { data, meta } = await super.find(ctx);
    const linkId = data.map((link) => link.id);
    //count all like for each post
    const allPosts = await strapi
      .db
      .query('api::like.like')
      .count({
      where: {
          postid: { $in: linkId },
        }
      });
    console.log("nombre de like dif",allPosts);

    // const data2 = data.map((link) => {
    //   link.like = allPosts.find(
    //     (like) => like.attributes.postid === link.id
    //   );
    //   link = {id:link.id, ...link.attributes, like:link.like};
    //   return link;
    // }
    // );

    return { data , meta };
  },
}));