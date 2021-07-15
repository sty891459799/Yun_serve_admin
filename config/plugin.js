'use strict';

//  插件
module.exports = {
  cors: {
    enable: true,
    package: "egg-cors",
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
}