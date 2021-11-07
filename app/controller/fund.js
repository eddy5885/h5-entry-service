'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')

class FundController extends Controller {
  async index() {
    const { ctx } = this;
    // this.list()
    ctx.body = "hi";
  }
  async list(){
    const { ctx } = this;
    const path = '/root/static/fundQDII/data/'

    const urlP = 'https://sixue.work/static/fundQDII/data/'
    try{
      let dir = fs.readdirSync(path,{
        encoding:'utf-8'
      })
      dir = dir.filter(e=>{
        return !e.includes('txt')
      })
      console.log(dir,'list')
  
      let html  = '<p>'
      for(let i in dir){
        html += `
        <a href="${urlP}${dir[i]}" target="_blank">${dir[i]}</a><br />
        `
      }
      html+='</p>'
      ctx.body = html;
    }catch(e){
      ctx.body = '目录查找失败'
    }

    

  }
}

module.exports = FundController;
