// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入element-ui插件
import ElementUI from 'element-ui'
// 引入element-ui 样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入VueRouter
import router from './router'

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用element-ui插件
Vue.use(ElementUI)

// 应用插件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
