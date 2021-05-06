'use strict';
// 1.上报耗时到falcon，2.上报访问日志到elk
const os = require('os');

function reportAccessLog(ctx) {
  const accessLog = {
    //   host: os.hostname(),
      response_time: ctx.response_time,
      method: ctx.method,
    //   path: ctx.path,
      url: `${ctx.host}${ctx.path}`,
    //   query: ctx.querystring,
    //   host: ctx.host,
      ua: ctx.header['user-agent'] || '',
    //   status: ctx.status,
      length: ctx.length || 0,
      referer: ctx.header.referer || '-',
      ip: ctx.ip,
  };
  ctx.getLogger('request').info(JSON.stringify(accessLog))
}

module.exports = () => {
  return async function(ctx, next) {
    try {
      const startTime = Date.now();
      await next();
      ctx.response_time = Date.now() - startTime;
      reportAccessLog(ctx)
    } catch (error) {
      console.log(error);
    }
  };
};
