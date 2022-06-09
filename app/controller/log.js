'use strict';

const Controller = require('egg').Controller;

class LogController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.set('Access-Control-Allow-Origin', '*');
    const url = ctx.request.url
    const method = ctx.request.method
    const header = ctx.request.header
    const body = ctx.request.body
    let query = ctx.query

    const obj = {
      url,
      method,
      header,
      body,
      query
    }
    // console.log("ctx,",ctx)
    ctx.getLogger('diy').info(JSON.stringify(obj))
    ctx.body = obj;

    // this.log()
    // ctx.body = "hi, this is sixue's website";
  }
  async test(){
    const { ctx } = this;
    const rt = {
      code:0,
      data:[
        {
          name:'zs'
        },
        {
          name:'ls'
        }
      ]
    }

    ctx.body = rt;

  }
}

module.exports = LogController;
