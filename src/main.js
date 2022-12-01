import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from "./store";
import VueScrollTo from 'vue-scrollto'
import { Loading, Message, Select, Option, Input }from 'element-ui';
import Ripple from 'vue-ripple-directive'
import 'element-ui/lib/theme-chalk/index.css'
import "element-ui/lib/select";
import "element-ui/lib/option";
import "element-ui/lib/button";
import "element-ui/lib/form";
import "element-ui/lib/input";
import "element-ui/lib/date-picker";
import "element-ui/lib/radio";
import "element-ui/lib/row";
import './assets/css/initialize.css'
import SIdentify from './components/Form/identify.vue'
import './assets/css/initialize.css'

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
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
// 验证
Vue.component('s-identify', SIdentify)

new Vue({
  router,
  store,
  render: (h) => h(App),
  // vue 初始化完成后的钩子
  beforeCreate() {
      // 设置全局事件总线
    Vue.prototype.$bus = this
    Vue.prototype.$message = Message;
  },
}).$mount('#app')
