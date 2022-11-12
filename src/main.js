import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/css/initialize.css'

import VueScrollTo from 'vue-scrollto'

let options = {
  container: "body", //滚动的容器
  duration: 1000, //滚动时间
  easing: "ease", //缓动类型
  offset: 0, //滚动时应应用的偏移量。此选项接受回调函数
  force: true, //是否应执行滚动
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
}

Vue.use(VueScrollTo, options);



new Vue({
  router,
  render: (h) => h(App),
  // vue 初始化完成后的钩子
  beforeCreate() {
    // 设置全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
