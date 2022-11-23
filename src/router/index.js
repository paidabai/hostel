import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件(不能忽略.vue后缀)
import hostelList from '../views/HostelList/index.vue'
import ContactHeadquarters from '../views/ContactHeadquarters/index.vue'
import hostelPublicGoodList from "../views/HostelPublicGood/index.vue"
import hostelMenberCard from "../views/HostelMenberCard/index.vue"
import HostelDetail from "../views/HostelDetail/index.vue";
import OrderInfo from "../views/OrderInfo/index.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  // 路由使用history 模式
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // 旅舍列表
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
    // 联系总部
    {
      path: '/contactHeadquarters',
      name: 'contactHeadquarters',
      component: ContactHeadquarters
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../pages/Member/index.vue'),
    },
    //宿舍公益
    {
      path: '/hostelPublicGoodList',
      name: 'hostelPublicGoodList ',
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
    // 旅舍详情
    {
      path: '/hostelDetail/:hostelId/:hostelName',
      name: 'hostelDetail',
      component: HostelDetail,
      props({params:{hostelId, hostelName}}){
        return {
          hostelId,
          hostelName
        }
      }
    },
    {
      path: '/orderInfo',
      name: 'OrderInfo',
      component: OrderInfo
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
  ]
})

export default router
