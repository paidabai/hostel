<template>
  <div>
    <div id="move" style="height: 1px"></div>
    <el-tabs v-scroll-to="{
     el: '#move',
     duration: 0, //滚动时间
     }" v-model="activeName" class="info-nav">
      <el-tab-pane label="旅舍概况" name="first">
        <div class="hostel-survey" style="height: 500px">
          <div class="img">
            <img src="" alt="">
          </div>
          <div class="introduce">
            北京炮局工厂青年旅舍
            北京炮局工厂青年旅舍坐落于著名的雍和宫景点后方,步行大约5分钟即可到达.旅舍交通十分便利,有多条公交车辆以及地铁.炮局工厂是北京第一家具有＼"loft＼"风格的国际青年旅舍,在这里你可以自由的放松身心.
            P.LOFT 紧贴着雍和宫,胡同里都是寻常百姓人家.这里以前曾是监狱,军火库,工厂.现在,是一家真正的青年旅舍,没有奢华的装修,尽可能多的保留了旧工厂的原貌.
            我们提供干净的床单,舒适的床,价格低廉且美味绝伦的食物,更为您提供了超大的公共空间和亲近自然的户外空间,我们希望您不要呆在房间里,而是与全球的青年朋友沟通分享旅行的快乐.中国青年旅舍已经开始变化,更多的青年旅舍看起来更像商务酒店.你知道的,住宾馆和生活在北京,是截然不同的,期待你的到来.LIVE IN P.LOFT. LIVE IN BEIJING.
          </div>
          <div class="service">
            <div class="block block1">
              <h3>营业时间</h3>
              <div class="block-c clearfix">
                  <span>
                        前台 :<strong>10:00 到 18:00</strong>
                 <br>
                      入住时间:<strong>10:00</strong>后<br>房间保留到<strong> 18:00前</strong>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="房型及价格" name="second">
        <ChoiceHouse />
      </el-tab-pane>
      <el-tab-pane label="地图" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="设施与服务" name="fourth">角色管理</el-tab-pane>
      <el-tab-pane label="图片" name="fifth">
        <div class="house-img">
          <h3 class="title">旅舍图片</h3>
          <DetailImg />
        </div>
      </el-tab-pane>
      <el-tab-pane label="最新动态" name="sixth">
        <div class="dynamic-size">
          <div class="dynamic">
            <p :class="activeStyle" @click="activeDynamic">活动</p><sup class="sup-msg">0</sup>
            <p :class="activeStyle2" @click="activeDynamic">动态</p><sup class="sup-msg">0</sup>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="评论" name="seventh">
        <div class="comment">
          <h3 class="title">评论</h3>
          <div class="content">
            <b>!</b>
            <p>
              此旅舍暂无点评，
              <br/>
              分享入住体验，成为首位点评者。
            </p>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import DetailImg from "../DetailImg/index.vue";
import ChoiceHouse from "./ChoiceHouse/index.vue";

export default {
  name: "HostelInfo",
  components: {
    DetailImg,
    ChoiceHouse
  },
  data() {
    return {
      activeName: 'first',
      activeStyle: 'dynamic-title dynamic-title-active',
      activeStyle2: 'dynamic-title'
    };
  },
  // 将要挂载时
  mounted(){
    // 监听
    window.addEventListener("scroll", this.scrollType);
  },
  // 组件将要销毁时
  beforeDestroy() {
    // 销毁监听
    window.removeEventListener("scroll", this.scrollType);
  },

  methods: {
    scrollType() {
      // 获取滚动的距离
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 获取全部的导航项
      const items = document.getElementsByClassName('el-tabs__item')
      // 当滚动到导航条时
      if (scrollTop > 599) {
        document.querySelector('.el-tabs__active-bar').style.opacity = '0'
        for (let i = 0; i < items.length; i++) {
          items[i].classList.add('item-type')
        }
        // 改变导航条的样式
        document.querySelector('.el-tabs__header').style.height = '30px'
        document.querySelector('.el-tabs__nav').style.cssText = 'position: fixed; top: 0; z-index: 99999'
      } else {
        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove('item-type')
        }
        document.querySelector('.el-tabs__active-bar').style.opacity = '1'
        document.querySelector('.el-tabs__nav').style.position = ''
        document.querySelector('.el-tabs__nav').style.zIndex = '0'
        document.querySelector('.el-tabs__header').style.height = ''
      }
    },
    activeDynamic(e) {
      if (e.target.innerText === '活动') {
        this.activeStyle = 'dynamic-title dynamic-title-active'
        this.activeStyle2 = 'dynamic-title'
      }else {
        this.activeStyle = 'dynamic-title'
        this.activeStyle2 = 'dynamic-title dynamic-title-active'
      }
    }
  }
}
</script>

<style lang="less">
  .info-nav {
    margin-top: 40px;
    .el-tabs__nav-wrap {
      &::after{
        content: '';
        display: none;
      }
      .el-tabs__nav {
        height: 150px;
        border-radius: 10px;
      }
    }
    .el-tabs__active-bar {
      background-color: rgba(255,255,255,0);
      display: block;
      width: 10px !important;
      height: 0;
      overflow: hidden;
      border-style: solid;
      border-width: 10px;
      border-color: #f7951c transparent transparent transparent;
      position: absolute;
      bottom: 0;
      left: (154px / 2 - 26px);
      transition: all .2s;
    }
    .el-tabs__item {
      width: 154px;
      height: 130px;
      text-align: center;
      line-height: 75px;
      padding-left: 20px !important;
      padding-right: 20px !important;
      font-size: 18px;
      color: #333;
      font-weight: bold;
      transition: all .2s;
      padding-bottom: 10px;
      background: url(../../../assets/img/hostel-nav.gif) repeat-x;
      border-right: 1px solid #dadada;
      &:nth-child(2) {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      &:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      &:hover {
        color: #5b5b5b;
      }
      &::before {
        content: '';
        color: #333;
        display: block;
        width: 50px;
        height: 50px;
        background-image: url(../../../assets/sprite/app_z.png);
        background-repeat: no-repeat;
        position: relative;
        left: (113px / 2 - 50px / 2);
        top: 25px;
      }
      &.is-active {
        color: #fff;
        font-weight: bold;
        background: url(../../../assets/img/hostel-navs.gif) repeat-x;
        &#tab-first::before {
          background-position: -50px -372px;
        }
        &#tab-second::before {
          background-position: 0px -372px;
        }
        &#tab-third::before {
          background-position: -330px -312px;
        }
        &#tab-fourth::before {
          background-position: -280px -312px;
        }
        &#tab-fifth::before {
          background-position: -230px -312px;
        }
        &#tab-sixth::before {
          background-position: -180px -312px;
        }
        &#tab-seventh::before {
          background-position: -291px -172px;
        }
      }
    }
    .item-type {
      top: 0;
      height: 70px;
      overflow: hidden;
      &::before {
        content: '';
        width: 0;
        height: 0;
      }
      .el-tabs__active-bar {
        width: 0;
      }
    }
    #tab-first {
      &::before {
        background-position: -426px 0;
      }
    }
    #tab-second {
      &::before {
        background-position: -349px -372px
      }
    }
    #tab-third {
      &::before {
        background-position: -299px -372px;
      }
    }
    #tab-fourth {
      &::before {
        background-position: -249px -372px;
      }
    }
    #tab-fifth {
      &::before {
        background-position: -199px -372px
      }
    }
    #tab-sixth {
      &::before {
        background-position: -150px -372px
      }
    }
    #tab-seventh {
      &::before {
        background-position: -100px -372px;
      }
    }
  }
  .el-tab-pane {
    width: 1080px;
    background-color: #fff;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    margin-bottom: 25px;
    .house-img {
      width: 1035px;
      height: 800px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 700px;
      }
    }
    .hostel-survey {
      width: 1080px;
      padding: 25px 20px;
      display: flex;
      justify-content: space-between;
      .img {
        width: 200px;
      }
      .introduce {
        width: 405px;
      }
      .service {
        width: 390px;
      }
    }
    .title {
      font-size: 18px;
      color: #333;
      font-weight: bold;
      border-bottom: 1px solid #e2e2e2;
      padding: 25px 0 5px;
      margin-bottom: 20px;
    }
    .dynamic-size {
      height: 180px;
      .dynamic {
        display: flex;
        height: 65px;
        width: 1035px;
        margin: 0 auto;
        text-align: left;
        padding: 25px 0;
        border-bottom: 1px solid #e2e2e2;
        .dynamic-title{
          width: 40px;
          height: 40px;
          font-size: 18px;
          color: #333;
          font-weight: bold;
          cursor: pointer;
        }
        .dynamic-title-active {
          border-bottom: 2px solid #f7941c;
        }
        .sup-msg {
          display: inline-block;
          color: #fff;
          font-size: 10px;
          width: 16px;
          height: 16px;
          line-height: 15px;
          text-align: center;
          background-color: red;
          border-radius: 50%;
          font-weight: 400;
          position: relative;
          top: -10px;
          margin-right: 30px;
        }
      }
    }
    .comment {
      padding: 25px 20px;
      .content {
        width: 620px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 80px 0;
        b {
          display: inline-block;
          width: 78px;
          height: 78px;
          border-radius: 50%;
          border: 3px solid #4b8fcc;
          line-height: 78px;
          font-size: 50px;
          color: #4b8fcc;
          font-weight: bold;
        }
        p {
          font-size: 30px;
          color: #4b8fcc;
          margin: 20px 0;
        }
      }
    }
  }

</style>