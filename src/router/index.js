import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件(不能忽略.vue后缀)
import hostelList from '../views/HostelList/index.vue'
import ContactHeadquarters from '../views/ContactHeadquarters/index.vue'
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
      path: '/hostelList',
      name: 'hostelList',
      component: hostelList
    },
    {
      path: '/ContactHeadquarters',
      name: 'ContactHeadquarters',
      component: ContactHeadquarters
    },
    {
      path: '/latestNews',
      name: 'latestNews',
      component:latestNews
    },
  ]
})

export default router
