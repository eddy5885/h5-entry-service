'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, this is sixue's website";
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

module.exports = HomeController;
