'use strict';

/**
 *  board controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::board.board', ({ strapi }) =>  ({

async exampleAction(ctx) {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },

}));