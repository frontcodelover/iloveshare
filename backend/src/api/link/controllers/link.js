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

    const allPosts = await strapi.entityService.findMany('api::like.like', {
      fields: ["postid"],
      filters: { postid: { $in: linkId } },
      populate: {
        links: { count: true },
      },
  });

    console.log(data)
    // data.forEach(link => {
    //   link.likes = allPosts.find(({ postid }) => postid === link.id)?.links?.count || 0;
    // });

    const data2 = data.map((link) => {
      link.likes = allPosts.find(({ postid }) => postid === link.id)?.links?.count || 0;
      return link;
    });
    
    // console.log(data2)

    return { data : data2, meta };
  },
}));