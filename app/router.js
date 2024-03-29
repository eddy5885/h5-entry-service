'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/test', controller.home.test);
  router.get('/fundlist', controller.fund.list);
  router.get('/fundfresh', controller.fund.fresh);
  router.get('/log', controller.log.index);

};
