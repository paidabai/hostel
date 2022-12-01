<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-top-nav">
        <router-link :to="textItem.move" v-for="textItem in navText" :key="textItem.nid">{{textItem.title}}</router-link>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-address">
        <p>E-Mail：service@youthhostel.com</p>
        <p>成都市锦江区xxxxxxxxxxxxxxxxxxx</p>
      </div>
      <div class="footer-share">
        <a href="#" class="wechat"></a>
        <a href="#" class="weibo"></a>
      </div>
      <div class="footer-msg">
        <p class="link">
          <a href="#" target="_blank">国际联盟官方网站　 </a>|
          <a href="#" target="_blank">　友情链接　 </a>|
          <a href="#">　帮助中心</a>
        </p>

        <p class="copyright">
          版权所有 © 青年旅舍	<sup>®</sup>总部
          <a href="https://beian.miit.gov.cn/" target="_blank">
            蜀ICP备2022025734号-1 &nbsp;
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return{
      navText: []
    }
  },
  // 将要挂载时
  mounted() {
    this.$bus.$on('getNavText', (value) => {
      this.navText = value
    })
  }
}
</script>

<style lang="less" scoped>
  .footer {
    height: 340px;
    background-color: #282a2b;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    .footer-top {
      width: 100%;
      height: 74px;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #383b3d;
      .footer-top-nav{
        width: 1080px;
        height: 74px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        a {
          color: #fff;
          font-size: 14px;
          line-height: 74px;
        }
      }
    }
    .footer-bottom {
      width: 1080px;
      display: flex;
      flex-direction: column;
      text-align: end;
      margin-top: 40px;
      .footer-address {
        color: #999;
        font-size: 14px;
      }
      .footer-share {
        a {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-image: url("../../assets/sprite/app_z.png");
          background-repeat: no-repeat;
          display: inline-block;
          transition: 0.3s ease;
          margin-left: 5px;
          margin-top: 10px;
          &:hover {
            background-color: #131313;
          }
        }
        .wechat {
          background-position: -324px -422px;
        }
        .weibo {
          background-position: -289px -422px;
        }
      }
      .footer-msg {
        color: #666;
        font-size: 14px;
        margin-top: 10px;
        p {
          margin-bottom: 10px;
        }
        a {
          color: #666;
          &:hover {
            color: #999;
          }
        }
      }
    }
  }
</style>