import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件(不能忽略.vue后缀)
<<<<<<< HEAD
import hostelList from '../views/HostelList/index.vue'
import ContactHeadquarters from '../views/ContactHeadquarters/index.vue'
import hostelPublicGoodList from '../views/HostelPublicGood/index.vue'
import hostelMenberCard from '../views/HostelMenberCard/index.vue'
=======
import latestNews from '../views/LatestNews/index.vue'
>>>>>>> latest-news
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
    // 宿舍公益
    {
      path: '/hostelPublicGoodList',
      name: 'hostelPublicGoodList',
      component: hostelPublicGoodList 
    }, 
    //会员卡
    {
      path: '/hostelMenberCard/',
      name: 'hostelMenberCard',
      component: hostelMenberCard, 
    },
    // 申请会员卡---会员卡类型
    {
      path: '/memberCardType',
      name: 'memberCardType',
      component: ()=>import('../views/HostelMenberCard/memberCardType.vue'), 
    },
    // 会员卡类型 ---- 了解更多
    {
      path: '/memberCardTypeMore',
      name: 'memberCardTypeMore',
      component: ()=>import('../views/HostelMenberCard/memberCardTypeMore.vue'), 
    },
    // 会员续卡
    {
      path:'/membershipRenewal',
      name:'membershipRenewal',
      component:()=>import('../views/HostelMenberCard/membershipRenewal.vue')
    },
    // 会员优惠
    {
      path:'/memberBenefits',
      name:'memberBenefits',
      component:()=>import('../views/HostelMenberCard/memberBenefits.vue')
    },
    // 卡号查询
    {
      path:'/memberInfoquery',
      name:'memberInfoquery',
      component:()=>import('../views/HostelMenberCard/memberInfoquery.vue')
    },
    // 会员卡寄送查询
    {
      path:'/memberCardquery',
      name:'memberCardquery',
      component:()=>import('../views/HostelMenberCard/memberCardquery.vue')
    }, 

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
