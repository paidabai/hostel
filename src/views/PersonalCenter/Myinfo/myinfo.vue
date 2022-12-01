<template>
  <div class="main">
    <div class="personal-information , rim">
      <!-- 头像会员 -->
      <div class="user-information">
        <div>
          <img
            src="../../../assets/img/personalcenter/cb82efb9f6a7666b7d98ad8b082e28a.jpg"
            alt=""
          />
          <div class="user-information-right">
            <h4>1534934290@qq.com</h4>
            <p>等级: 网站会员</p>
            <div>
              <p>不是青年旅舍的会员？</p>
              <p>快来看看成为会员的好处吧！</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 未出行订单(0)待评价订单 带付款订单 信息提醒 -->
      <div class="user-comment">
        <div>
          <a>
            <i class="el-icon-shopping-bag-1"></i>
            <h4>未出行订单(0)</h4>
          </a>
        </div>
        <div>
          <a>
            <i class="el-icon-zoom-in"></i>
            <h4>未出行订单(0)</h4>
          </a>
        </div>
        <div>
          <a>
            <i class="el-icon-data-analysis"></i>
            <h4>未出行订单(0)</h4>
          </a>
        </div>
        <div>
          <a>
            <i class="el-icon-bell"></i>
            <h4>未出行订单(0)</h4>
          </a>
        </div>
      </div>
      <!-- 我的积分 优惠劵 -->
      <div class="user-integral">
        <p>我的积分: 0</p>
        <div class="coupon-list">
          <a href="">
            <strong>0</strong>
            <b>张优惠劵</b>
          </a>
        </div>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="myorder , rim">
      <div class="personal-p-title">
        <div class="personal-p-top">
          <h2>我的订单</h2>
          <a href="">查看全部订单</a>
        </div>
        <div></div>
      </div>
    </div>
    <!-- 我的足迹 -->
    <div class="footprint , rim">
      <div class="footprint-l">
        <div class="footprint-p-title">
          <h2>我的足迹</h2>
        </div>
        <!-- 地图 -->
        <div id="footprintcanvs"></div>
      </div>
      <div class="footprint-r">
        <div class="footprint-title">
          <h2>关注我们</h2>
        </div>
        <!-- 官方APP  微信 -->
        <div class="footprint-r-content">
          <img
            src="../../../assets/img/personalcenter/official-app.jpg"
            alt=""
          />
          <img
            src="../../../assets/img/personalcenter/official-wx.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import { GAODE_KEY } from "../../../utils/constants";
export default {
  data() {
    return {};
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: GAODE_KEY, // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("footprintcanvs", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 3, //初始化地图级别
            center: [105.602725, 37.076636], //初始化地图中心点位置
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 950px;
  display: flex;
  flex-direction: column;
  .personal-information {
    width: 100%;
    height: 195px;
    display: flex;
    justify-content: start;
    align-items: center;
    .user-information > div {
      display: flex;
      justify-content: center;
      padding-top: 25px;
      > img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: block;
        margin-right: 20px;
      }
      > .user-information-right {
        width: 190px;
        h4 {
          color: #000;
          font-size: 20px;
        }
        p {
          font-size: 14px;
          color: #000;
        }
        > div {
          margin-top: 10px;
          p {
            color: #f7941c;
            font-size: 12px;
          }
        }
      }
    }
    .user-comment {
      display: flex;
      width: 350px;
      justify-content: space-between;
      flex-wrap: wrap;
      > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > a {
          display: block;
          text-align: center;
          width: 170px;
          i {
            width: 40px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            border-radius: 50%;
            background-color: #87c524;
            margin: 5px;
          }
        }
      }
    }
    .user-integral {
      p {
        width: 230px;
        height: 21px;
        margin-top: 10px;
      }
      .coupon-list {
        width: 230px;
        height: 98px;
        line-height: 95px;
        background-color: #fee495;
        border: 1px solid #ecca61;
        border-radius: 3px;
        z-index: 2;
        margin-top: 20px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 5px;
          right: 35px;
          top: 5px;
          bottom: 5px;
          background-color: #fbd973;
          z-index: -1;
        }
        &::after {
          content: "";
          position: absolute;
          background-color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 20px;
          right: -20px;
          top: 50%;
          margin-top: -20px;
        }
        a {
          display: block;
          width: 230px;
          height: 100%;
          color: #925601;

          > strong {
            display: inline-block;
            font-size: 60px;
            font-weight: bold;
            margin: 0 15px 0 30px;
          }
          b {
            display: inline-block;
            font-size: 14px;
            width: 85px;
            height: 100%;
            position: relative;
            top: -18px;
            border-right: dashed 2px #fff;
          }
        }
      }
    }
  }
  .myorder {
    .personal-p-title {
      display: flex;
      flex-direction: column;
      padding-bottom: 20px;
      .personal-p-top {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e1e1e1;
        height: 40px;
        line-height: 40px;
        h2 {
          font-weight: bold;
        }
      }
    }
  }
  .footprint {
    display: flex;
    justify-content: space-between;
    .footprint-l {
      display: flex;
      flex-direction: column;
      .footprint-p-title {
        width: 630px;
        h2 {
          font-weight: bold;
          height: 40px;
          line-height: 40px;
        }
        border-bottom: 1px solid #e1e1e1;
        margin-bottom: 20px;
      }
      #footprintcanvs {
        padding: 0px;
        margin: 0px;
        width: 630px;
        height: 250px;
      }
    }
    .footprint-r {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      .footprint-title {
        width: 260px;
        h2 {
          font-weight: bold;
          height: 40px;
          line-height: 40px;
        }
        border-bottom: 1px solid #e1e1e1;
        margin-bottom: 20px;
      }
      .footprint-r-content {
        img {
          display: block;
          margin-bottom: 10px;
        }
      }
    }
  }
}
.rim {
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 0 1px #efefef;
  padding: 20px 20px;
  margin-bottom: 20px;
}
</style>
