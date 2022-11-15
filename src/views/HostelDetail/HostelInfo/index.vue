<template>
  <div>
    <div id="move" style="height: 1px"></div>
    <el-tabs v-scroll-to="{
     el: '#move',
     duration: 0, //滚动时间
     }" v-model="activeName" class="info-nav">
      <el-tab-pane label="旅舍概况" name="first"><div style="height: 100px; background-color: red; ">21321</div></el-tab-pane>
      <el-tab-pane label="房型及价格" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="地图" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="设施与服务" name="fourth">角色管理</el-tab-pane>
      <el-tab-pane label="图片" name="fifth">角色管理</el-tab-pane>
      <el-tab-pane label="最新动态" name="sixth">角色管理</el-tab-pane>
      <el-tab-pane label="评论" name="seventh">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "HostelInfo",
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
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    scrollType() {
      // 获取滚动的距离
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 获取全部的导航项
      const items = document.getElementsByClassName('el-tabs__item')
      if (scrollTop > 599) {
        document.querySelector('.el-tabs__active-bar').style.opacity = '0'
        for (let i = 0; i < items.length; i++) {
          items[i].classList.add('item-type')
        }
        document.querySelector('.el-tabs__nav').style.position = 'fixed'
        document.querySelector('.el-tabs__header').style.height = '30px'
        document.querySelector('.el-tabs__nav').style.top = '0'
      } else {
        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove('item-type')
          document.querySelector('.el-tabs__active-bar').style.opacity = '1'
          document.querySelector('.el-tabs__nav').style.position = ''
          document.querySelector('.el-tabs__header').style.height = ''
        }
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

</style>