import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件(不能忽略.vue后缀)
import latestNews from '../views/LatestNews/index.vue'
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
      path: '/latestNews',
      name: 'latestNews',
      component:latestNews,
    },
    {
      path: '/newsDetails/:id',
      name: 'newsDetails',
      component:()=>import('../views/LatestNews/newsdetails.vue'),
    },
   
  ]
})

export default router
