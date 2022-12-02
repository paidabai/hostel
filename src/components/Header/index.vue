<template>
  <div class="header">
    <div class="header-logo">
      <router-link to="">
        <img src="../../assets/logo/logo.png" alt="" />
      </router-link>
    </div>
    <div class="header-right">
      <div class="header-use" v-show="isLogin">
        <router-link to="/member">订单管理</router-link>
        <router-link to=""
          ><img src="../../assets/logo/user-icon.png" alt="" />
          个人中心</router-link
        >
        <a @click="logOut">退出</a>
      </div>
      <div class="header-use" v-show="!isLogin">
        <router-link to="/member">订单管理</router-link>
        <router-link to="/user/regist"
          ><img src="../../assets/logo/user-icon.png" alt="" />
          注册</router-link
        >
        <router-link to="/user/login">登录</router-link>
      </div>

      <div class="header-nav">
        <router-link
          :to="textItem.move"
          v-for="textItem in navText"
          :key="textItem.nid"
          >{{ textItem.title }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reqHostelNav } from '../../api'

export default {
  name: 'Header',
  data() {
    return {
      // 导航条文字
      navText: [],
      isLogin: false,
      user: []
    }
  },
  mounted() {
    this.getHostelNav()
    this.$bus.$on('setIsLogin',this.setIsLogin)
  },
  methods: {
    // 修改登录状态
    setIsLogin() {
      this.isLogin = true
    },
    // 退出登录
    logOut() {
      sessionStorage.removeItem('user');
      localStorage.removeItem('user');
      this.isLogin = false;
    },
    // 获取顶部导航数据
    getHostelNav() {
      reqHostelNav().then(value => {
        const result = value.data
        if (result.status === 200) {
          console.log(result)
          this.navText = result.data
          this.$bus.$emit('getNavText', this.navText)
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.header {
  width: 1080px;
  height: 116px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .header-logo {
    height: 116px;
    display: flex;
    align-items: center;
  }
  .header-right {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    .header-use {
      height: 50%;
      width: 255px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }
    .header-nav {
      height: 50%;
      width: 720px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
    }
  }
}
</style>
