import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件(不能忽略.vue后缀)
import hostelList from '../views/HostelList/index.vue'
import ContactHeadquarters from '../views/ContactHeadquarters/index.vue'
import hostelPublicGoodList from '../views/HostelPublicGood/index.vue'
import hostelMenberCard from '../views/HostelMenberCard/index.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home/index',
    // },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/hostelList',
      name: 'hostelList',
      component: hostelList,
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: () => import('../pages/Cooperation/index.vue'),
    },
    {
      path: '/detail/:id/:cat_id',
      name: 'detail',
      component: () => import('../pages/Cooperation/detail.vue'),
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../pages/Member/index.vue'),
    },
  ],
})

export default router
