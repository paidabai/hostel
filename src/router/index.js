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
      component:latestNews,
    },
    {
      path:'/latestNews/1',
      name:'/latestNews/1',//不可重复
      component:()=>import('../views/LatestNews/latestnews-type1.vue'),
    },
    {
      path:'/latestNews/2',
      name:'/latestNews/2',//不可重复
      component:()=>import('../views/LatestNews/latestnews-type2.vue'),
    },
    {
      path:'/latestNews/3',
      name:'/latestNews/3',//不可重复
      component:()=>import('../views/LatestNews/latestnews-type3.vue'),
    },
    {
      path:'/latestNews/4',
      name:'/latestNews/4',//不可重复
      component:()=>import('../views/LatestNews/latestnews-type4.vue'),
    },
    {
      path:'/latestNews/5',
      name:'/latestNews/5',//不可重复
      component:()=>import('../views/LatestNews/latestnews-type5.vue'),
    },
  ]
})

export default router
