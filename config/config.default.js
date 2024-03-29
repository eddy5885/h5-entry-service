/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
const fs = require('fs');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */


module.exports = appInfo => {
  let loggerPath = path.resolve(appInfo.baseDir, 'logs');
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614326239194_3585';

  // add your middleware config here
  config.middleware = [];

  config.siteFile = {
    '/favicon.ico':fs.readFileSync(path.resolve(__dirname,'../images/favicon.png'))
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    static: {
      prefix: '/h5/',
      dir: '../static/',
      buffer: false,
      maxAge: 0,
    },
    cluster: {
      listen: {
        port: 50008,
      },
    },
    customLogger:{
      request: {
        file: path.join(loggerPath, 'request.log'),
      },
      diy: {
        file: path.join(loggerPath, 'diy.log'),
      },
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
