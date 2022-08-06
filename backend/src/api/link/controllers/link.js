'use strict';

/**
 *  link controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::link.link', ({ strapi }) => ({
    // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    // some custom logic here


    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    // some more custom logic
        
        

    return { data, meta };
  },
}));