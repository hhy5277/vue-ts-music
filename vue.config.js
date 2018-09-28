/**
 * Created by Administrator on 2018/9/27.
 * function : xxxxx
 */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('assets', resolve('src/assets'))
    .set('components', resolve('src/components'))
    .set('common', resolve('src/common'))
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 5566,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  }
}
