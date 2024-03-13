const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://timeline_test.local/home', // 后端服务地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/admin': {
        target: 'http://timeline_test.local/admin', // 后端服务地址
        changeOrigin: true,
        pathRewrite: {
          '^/admin': ''
        }
      }
    }
  }
})
