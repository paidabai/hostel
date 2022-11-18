import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件(不能忽略.vue后缀)
import hostelList from '../views/HostelList/index.vue'
import ContactHeadquarters from '../views/ContactHeadquarters/index.vue'
import latestNews from '../views/LatestNews/index.vue'
Vue.use(VueRouter)

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
      path: '/newsDetails',
      name: 'newsDetails',
      component:()=>import('../views/LatestNews/newsdetails.vue'),
    },
   
  ]
})

export default router
