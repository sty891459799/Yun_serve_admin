'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      name: '你说我们星座不相配，相处会针锋相对!',
    };
  }
}

module.exports = HomeController;
