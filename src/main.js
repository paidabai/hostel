import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from "./store";
import VueScrollTo from 'vue-scrollto'
import { Loading }from 'element-ui';
import Ripple from 'vue-ripple-directive'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/initialize.css'
import SIdentify from './components/Form/identify.vue'

// 关闭开发模式下的提示
Vue.config.productionTip = false

// 滚动插件配置项
let options = {
  container: "body", //滚动的容器
  duration: 600, //滚动时间
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

// 使用插件
Vue.use(Loading.directive);
Vue.use(VueScrollTo, options);
Vue.directive('ripple', Ripple);

import './assets/css/initialize.css'

import SIdentify from './components/Form/identify.vue'

new Vue({
  router,
  store,
  render: (h) => h(App),
  // vue 初始化完成后的钩子
  beforeCreate() {
    // 验证
    Vue.component('s-identify', SIdentify)
      // 设置全局事件总线
    Vue.prototype.$bus = this
  },
}).$mount('#app')
