<template>
  <div>
    <div id="move" style="height: 1px"></div>
    <el-tabs v-scroll-to="{
     el: '#move',
     duration: 0, //滚动时间
     }" v-model="activeName" class="info-nav">
      <el-tab-pane label="旅舍概况" name="first">
        <HostelSurvey :hostelName="hostelName"/>
      </el-tab-pane>
      <el-tab-pane label="房型及价格" name="second">
        <ChoiceHouse />
      </el-tab-pane>
      <el-tab-pane label="地图" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="设施与服务" name="fourth">
        <div class="services">
          <h3 class="title">设施与服务</h3>
          <div class="services-content">
            <dl v-for="item in service" :key="item.id">
              <dt>{{item.title}}</dt>
              {{services[0].item.type}}
<!--              <dd v-for="item2 in services[0].item.type">-->
<!--                <span>•</span>{{item2}}-->
<!--              </dd>-->
            </dl>
<!--            <dl>-->
<!--              <dt>休闲和健身</dt>-->
<!--              <dd><span>•</span>公共休息室</dd><dd><span>•</span>花园</dd><dd><span>•</span>阳台/露台/天井</dd>-->
<!--            </dl>-->
          </div>
        </div>
      </el-tab-pane>
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
import HostelSurvey from "./HostelSurvey/index.vue";
import {mapState} from 'vuex'

export default {
  name: "HostelInfo",
  props: ['hostelName'],
  components: {
    DetailImg,
    ChoiceHouse,
    HostelSurvey
  },
  data() {
    return {
      activeName: 'first',
      activeStyle: 'dynamic-title dynamic-title-active',
      activeStyle2: 'dynamic-title',
      service: [
        {id: 1, title: '休闲和健身', type: 'health'},
        {id: 2, title: '网络设施', type: 'network'},
        {id: 3, title: '餐饮', type: 'restaurant'},
        {id: 4, title: '旅舍提供', type: 'equipment'},
        {id: 5, title: '景点、旅游设施', type: 'travel'},
        {id: 6, title: '旅舍提供的服务', type: 'service'},
        {id: 7, title: '便利设施', type: 'amenities'},
      ],
      services: [],
    };
  },
  // 将要挂载时
  mounted(){
    // 监听
    window.addEventListener("scroll", this.scrollType);
    this.$bus.$on('goBack', this.goBook)
    this.$bus.$on('getHostelServices', value => this.services = value)
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
    },
    goBook() {
      this.activeName = 'second'
    }
  },
  computed: {
    ...mapState('hostelDetailOptions', ['hostelDetailData'])
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
      margin: 0 auto;
      height: 800px;
      img {
        width: 100%;
        height: 700px;
      }
    }
    .services {
      width: 1035px;
      margin: 0 auto;
      padding-bottom: 30px;
      .services-content {
        display: flex;
        flex-wrap: wrap;
        dl {
          width: 255px;
          padding-left: 40px;
          padding-top: 30px;
          font-size: 14px;
          span {
            color: #9acd54;
            margin-right: 5px;
          }
          dt {
            font-weight: bold;
            dd {
              color: #333;
            }
          }
        }
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