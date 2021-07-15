'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const auth = middleware.auth(app.config.jwt) // token 验证
  router.get('/', auth, controller.home.index);
  router.get('/login', controller.login.index); // 登录页面
};
