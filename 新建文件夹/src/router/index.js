import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件(不能忽略.vue后缀)
import hostelList from '../pages/HostelList/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/hostelList',
      name: 'hostelList',
      component: hostelList
    }
  ]
})

export default router
