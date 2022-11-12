import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件(不能忽略.vue后缀)
import hostelList from '../views/HostelList/index.vue'
import ContactHeadquarters from '../views/ContactHeadquarters/index.vue'
import hostelPublicGoodList from "../views/HostelPublicGood/index.vue"
import hostelMenberCard from "../views/HostelMenberCard/index.vue"
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
    //宿舍公益
    {
      path: '/hostelPublicGoodList',
      name: 'hostelPublicGoodList ',
      component: hostelPublicGoodList 
    }, 
    //会员卡
    {
      path: '/hostelMenberCard',
      name: 'hostelMenberCard ',
      component: hostelMenberCard 
    },
  ]
})

export default router
