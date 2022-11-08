import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/css/initialize.css'

new Vue({
  router,
  render: (h) => h(App),
  // vue 初始化完成后的钩子
  beforeCreate() {
    // 设置全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
