import Vue from "vue";
import VueRouter from "vue-router";
import PersonalCenter from "../views/PersonalCenter/index.vue";

// 引入路由组件(不能忽略.vue后缀)
import hostelList from "../views/HostelList/index.vue";
import ContactHeadquarters from "../views/ContactHeadquarters/index.vue";
import HostelDetail from "../views/HostelDetail/index.vue";
import OrderInfo from "../views/OrderInfo/index.vue";
import hostelPublicGoodList from "../views/HostelPublicGood/index.vue";
import hostelMenberCard from "../views/HostelMenberCard/index.vue";
import latestNews from "../views/LatestNews/index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  // 路由使用history 模式
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // 旅舍列表
    {
      path: "/hostelList",
      name: "hostelList",
      component: hostelList,
    },
    // 旅舍加盟
    {
      path: "/cooperation",
      name: "cooperation",
      component: () => import("../views/Cooperation/index.vue"),
    },
    {
      path: "/detail/:id/:cat_id",
      name: "detail",
      component: () => import("../views/Cooperation/detail.vue"),
    },
    // 联系总部
    {
      path: "/contactHeadquarters",
      name: "contactHeadquarters",
      component: ContactHeadquarters,
    },
    // 联系总部
    {
      path: "/contactHeadquarters",
      name: "contactHeadquarters",
      component: ContactHeadquarters,
    },
    {
      path: "/member",
      name: "member",
      component: () => import("../views/HostelOrder/index.vue"),
    },
    //宿舍公益
    {
      path: "/hostelPublicGoodList",
      name: "hostelPublicGoodList ",
      component: hostelPublicGoodList,
    },
    //会员卡
    {
      path: "/hostelMenberCard/",
      name: "hostelMenberCard",
      component: hostelMenberCard,
    },
    // 申请会员卡---会员卡类型
    {
      path: "/memberCardType",
      name: "memberCardType",
      component: () => import("../views/HostelMenberCard/memberCardType.vue"),
    },
    // 申请会员卡 --- 立即申请
    {
      path: "/memberAdd",
      name: "memberAdd",
      component: () => import("../views/HostelMenberCard/memberAdd.vue"),
    },
    
    // 会员卡类型 ---- 了解更多
    {
      path: "/memberCardTypeMore",
      name: "memberCardTypeMore",
      component: () =>
        import("../views/HostelMenberCard/memberCardTypeMore.vue"),
    },
    // 会员续卡
    {
      path: "/membershipRenewal",
      name: "membershipRenewal",
      component: () =>
        import("../views/HostelMenberCard/membershipRenewal.vue"),
    },
    // 会员优惠
    {
      path: "/memberBenefits",
      name: "memberBenefits",
      component: () => import("../views/HostelMenberCard/memberBenefits.vue"),
    },
    // 旅舍详情
    {
      path: "/hostelDetail/:hostelId/:hostelName",
      name: "hostelDetail",
      component: HostelDetail,
      props({ params: { hostelId, hostelName } }) {
        return {
          hostelId,
          hostelName,
        };
      },
    },
    {
      path: "/orderInfo",
      name: "OrderInfo",
      component: OrderInfo,
    },
    // 卡号查询
    {
      path: "/memberInfoquery",
      name: "memberInfoquery",
      component: () => import("../views/HostelMenberCard/memberInfoquery.vue"),
    },
    // 会员卡寄送查询
    {
      path: "/memberCardquery",
      name: "memberCardquery",
      component: () => import("../views/HostelMenberCard/memberCardquery.vue"),
    },
    // 绑定电子会员卡
    {
      path: "/binding",
      name: "binding",
      component: () =>
        import("../views/HostelMenberCard/threeFloor/binding.vue"),
    },
    // 会员卡问与答
    {
      path: "/questionAndAnswer",
      name: "questionAndAnswer",
      component: () =>
        import("../views/HostelMenberCard/threeFloor/questionAndAnswer.vue"),
    },
    // 申请方法
    {
      path: "/applyMethods",
      name: "applyMethods",
      component: () =>
        import("../views/HostelMenberCard/threeFloor/applyMethods.vue"),
    },
    // 会员卡辨伪
    {
      path: "/memberIdentify",
      name: "memberIdentify",
      component: () =>
        import("../views/HostelMenberCard/threeFloor/memberIdentify.vue"),
    },
    // 代理商加盟
    {
      path: "/agent",
      name: "agent",
      component: () => import("../views/HostelMenberCard/threeFloor/agent.vue"),
    },
    // 旅舍详情
    {
      path: "/hostelDetail/:hostelId/:hostelName",
      name: "hostelDetail",
      component: HostelDetail,
      props({ params: { hostelId, hostelName } }) {
        return {
          hostelId,
          hostelName,
        };
      },
    },
    {
      path: "/orderInfo",
      name: "OrderInfo",
      component: OrderInfo,
    },
    {
      path: "/latestNews",
      name: "latestNews",
      component: latestNews,
    },
    {
      path: "/newsDetails/:id",
      name: "newsDetails",
      component: () => import("../views/LatestNews/newsdetails.vue"),
    },
    // 关于我们
    {
      path: "/aboutme",
      name: "aboutme",
      component: () => import("../views/AboutMe/index.vue"),
    },
    {
      path: "/details/:id/:cat_id",
      name: "details",
      component: () => import("../views/AboutMe/details.vue"),
    },

    // 登录
    {
      path: "/user/login",
      name: "/user/login",
      component: () => import("../views/User/Login.vue"),
    },
    // 注册
    {
      path: "/user/regist",
      name: "/user/regist",
      component: () => import("../views/User/Regist.vue"),
    },
    // 个人中心
    {
      path: "/personalcenter",
      name: "personalcenter",
      component: PersonalCenter,
      children: [
        {
          path: "myinfo", //首页
          name: "/personalcenter/myinfo",
          component: () => import("../views/PersonalCenter/Myinfo/myinfo.vue"),
        },
        {
          path: "sysinfo", //系统消息
          name: "/personalcenter/sysinfo",
          component: () =>
            import("../views/PersonalCenter/Sysinfo/sysinfo.vue"),
        },
        // 订单中心
        {
          path: "bookinglists", //旅舍订单
          name: "/personalcenter/bookinglists",
          component: () =>
            import("../views/PersonalCenter/OrderCenter/bookinglists.vue"),
        },
        {
          path: "memberCardOrder", //会员卡订单
          name: "/personalcenter/memberCardOrder",
          component: () =>
            import("../views/PersonalCenter/OrderCenter/memberCardOrder.vue"),
        },
        // 会员卡管理
        {
          path: "card", //会员卡管理
          name: "/personalcenter/card",
          component: () =>
            import("../views/PersonalCenter/MembershipCardManagement/card.vue"),
        },
        {
          path: "cardrenew", //在线续卡
          name: "/personalcenter/cardrenew",
          component: () =>
            import(
              "../views/PersonalCenter/MembershipCardManagement/cardrenew.vue"
            ),
        },
        {
          path: "activitylists", //用户优惠
          name: "/personalcenter/activitylists",
          component: () =>
            import(
              "../views/PersonalCenter/MembershipCardManagement/activitylists.vue"
            ),
        },
        {
          path: "insurance", //户外保险
          name: "/personalcenter/insurance",
          component: () =>
            import(
              "../views/PersonalCenter/MembershipCardManagement/insurance.vue"
            ),
        },
        // 个人中心
        {
          path: "info", //我的信息
          name: "/personalcenter/info",
          component: () => import("../views/PersonalCenter/center/info.vue"),
        },
        {
          path: "favorites", //我的收藏
          name: "/personalcenter/favorites",
          component: () =>
            import("../views/PersonalCenter/center/favorites.vue"),
        },
        {
          path: "comment", //我的点评
          name: "/personalcenter/comment",
          component: () => import("../views/PersonalCenter/center/comment.vue"),
        },
        {
          path: "bind", //绑定与关联
          name: "/personalcenter/bind",
          component: () => import("../views/PersonalCenter/center/bind.vue"),
        },
        {
          path: "password", //修改密码
          name: "/personalcenter/password",
          component: () =>
            import("../views/PersonalCenter/center/password.vue"),
        },
        // 票券与积分
        {
          path: "coupon", //优惠劵
          name: "/personalcenter/coupon",
          component: () =>
            import("../views/PersonalCenter/TicketsCredits/coupon.vue"),
        },
        {
          path: "point", //我的积分
          name: "/personalcenter/point",
          component: () =>
            import("../views/PersonalCenter/TicketsCredits/point.vue"),
        },
        // 常用信息管理
        {
          path: "friend", //常用旅客信息
          name: "/personalcenter/friend",
          component: () =>
            import("../views/PersonalCenter/infoManagement/friend.vue"),
        },
        {
          path: "address", //常用地址管理
          name: "/personalcenter/address",
          component: () =>
            import("../views/PersonalCenter/infoManagement/address.vue"),
        },
        // 帮助中心
        {
          path: "help", //常用地址管理
          name: "/personalcenter/help",
          component: () =>
            import("../views/PersonalCenter/helpCenter/help.vue"),
        },
      ],
    },
  ],
});




export default router;
