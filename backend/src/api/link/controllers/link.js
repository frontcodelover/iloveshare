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

    const allPosts = await strapi.entityService.findMany('api::link.link', {
      fields: ["id"],
      filters: { id: { $in: linkId } },
      populate: {
        likes: { count: true },
      },
  });
    console.log(allPosts);

    data.forEach(link => {
      link.likes = allPosts.find(({ id }) => id === link.id)?.likes?.count || 0;
    });

    return { data, meta };
  },
}));