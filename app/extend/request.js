'use strict';

const parse = require('parseurl');

module.exports = {
  // 修复 xxx/ 时 404
  get path() {
    let pathname = parse(this).pathname;
    if (pathname != '/' && pathname.slice(-1) === '/') {
      pathname += 'index.html';
    }
    return pathname;
  },
};
