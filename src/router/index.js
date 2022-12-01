import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件(不能忽略.vue后缀)
import hostelList from '../views/HostelList/index.vue'
import ContactHeadquarters from '../views/ContactHeadquarters/index.vue'
import HostelDetail from "../views/HostelDetail/index.vue";
import OrderInfo from "../views/OrderInfo/index.vue";
import hostelPublicGoodList from '../views/HostelPublicGood/index.vue'
import hostelMenberCard from '../views/HostelMenberCard/index.vue'
import latestNews from '../views/LatestNews/index.vue'

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
    // 旅舍加盟
    {
      path: '/cooperation',
      name: 'cooperation',
      component: () => import('../views/Cooperation/index.vue'),
    },
    {
      path: '/detail/:id/:cat_id',
      name: 'detail',
      component: () => import('../views/Cooperation/detail.vue'),
    },
    // 联系总部
    {
      path: '/contactHeadquarters',
      name: 'contactHeadquarters',
      component: ContactHeadquarters
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
      component: () => import('../views/HostelOrder/index.vue'),
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
    // 申请会员卡 --- 立即申请
    {
      path: '/memberAdd',
      name: 'memberAdd',
      component: ()=>import('../views/HostelMenberCard/memberAdd.vue'), 
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
    // 绑定电子会员卡
    {
      path:'/binding',
      name:'binding',
      component:()=>import('../views/HostelMenberCard/threeFloor/binding.vue')
    }, 
    // 会员卡问与答
    {
      path:'/questionAndAnswer',
      name:'questionAndAnswer',
      component:()=>import('../views/HostelMenberCard/threeFloor/questionAndAnswer.vue')
    }, 
    // 申请方法
    {
      path:'/applyMethods',
      name:'applyMethods',
      component:()=>import('../views/HostelMenberCard/threeFloor/applyMethods.vue')
    }, 
    // 会员卡辨伪
    {
      path:'/memberIdentify',
      name:'memberIdentify',
      component:()=>import('../views/HostelMenberCard/threeFloor/memberIdentify.vue')
    },
    // 代理商加盟
    {
      path:'/agent',
      name:'agent',
      component:()=>import('../views/HostelMenberCard/threeFloor/agent.vue')
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
    // 关于我们
    {
      path: '/aboutme',
      name: 'aboutme',
      component: () => import('../views/AboutMe/index.vue'),
    },{
      path: '/details/:id/:cat_id',
      name: 'details',
      component: () => import('../views/AboutMe/details.vue'),
    },
		// 登录
		{
			path: '/user/login',
			name: '/user/login',
			component: () => import('../views/User/Login.vue'),
		},
		// 注册
		{
			path: '/user/regist',
			name: '/user/regist',
			component: () => import('../views/User/Regist.vue'),
		},
      // 重定向
    {
      path: '/*', redirect: to => {
        // 方法接收 目标路由 作为参数
        return '/aboutme'
      }
    }
  ]
})

export default router
