import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件(不能忽略.vue后缀)
import HostelList from '../views/HostelList/index.vue'
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
      component: HostelList
    },
    // 联系总部
    {
      path: '/contactHeadquarters',
      name: 'contactHeadquarters',
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
    }
  ]
})

export default router
