'use strict';

/**
 * save service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::save.save');
