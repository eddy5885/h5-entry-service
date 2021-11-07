/* eslint-disable no-empty-function */
// app.js 或 agent.js 文件：
'use strict';

const os = require('os');

class AppBootHook {
  constructor(app) {
    this.app = app;

    this.app.config.coreMiddleware.unshift('accesslog');

    // this.app.use(async (ctx, next) => {
    //   if (ctx.req.url === '/favicon.ico') {
    //     // ctx.status = 204;
    //   } else {
    //     await next();
    //   }
    // });
  }

  async didLoad() {
    // 请将你的插件项目中 app.beforeStart 中的代码置于此处。
  }

  async willReady() {
    // 请将你的应用项目中 app.beforeStart 中的代码置于此处。
  }

  async didReady() {

  }
}

module.exports = AppBootHook;
