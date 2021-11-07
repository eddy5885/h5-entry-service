'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')
const {exec} = require('child_process')

const util = require('util');
const exec2 = util.promisify(exec);

class FundController extends Controller {
  async index() {
    const { ctx } = this;
    // this.list()
    ctx.body = "hi";
  }
  //git 刷新
  async fresh(){
    const { ctx } = this;

    const command = `cd static/fundQDII/ && git pull`
    const { stdout, stderr } = await exec2(command);

    ctx.body = stdout
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);

    
  }
  toName(str){
    const subStr = str.slice(0,2)
    const m = {
      'HH':'混合基金',
      'ZQ':'债券基金',
      'qd':'QDII基金'
    }
    return m[subStr]
  }
  async list(){
    const { ctx } = this;
    // const path = '/root/static/fundQDII/data/'
    const path  = '/Library/WebServer/www/fundQDII/data/'
/* 

*/
    const type = {
        'qdii':{
          url:'http://fund.eastmoney.com/QDII_jzzzl.html#os_0;isall_0;ft_;pt_6',
          n:'QDII型基金'
        },
        'HH':{
          url:'http://fund.eastmoney.com/HH_jzzzl.html#os_0;isall_0;ft_;pt_3',
          n:'混合型基金'
        },
        'ZQ':{
          url:'http://fund.eastmoney.com/ZQ_jzzzl.html#os_0;isall_0;ft_;pt_13',
          n:'债券型基金'
        }
    }

    const urlP = 'https://sixue.work/static/fundQDII/data/'
    try{
      let p = '<p>天天基金数据：<br />'
      p += ''
      for(let i in type){
        p += `
        <a href="${type[i]['url']}" target="_blank">${type[i]['n']}</a> &nbsp;
        `
      }
      let dir = fs.readdirSync(path,{
        encoding:'utf-8'
      })
      dir = dir.filter(e=>{
        return !e.includes('txt')
      })
      console.log(dir,'list')
  
      let html  =  p + '</p><p>过滤后数据：<br />'
      for(let i in dir){
        const n = dir[i]
        html += `
        ${this.toName(n)}: <a href="${urlP}${dir[i]}" target="_blank">${n}</a><br />
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
