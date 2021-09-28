/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

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
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
