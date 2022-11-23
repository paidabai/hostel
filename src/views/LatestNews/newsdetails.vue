<template>
  <div class="latestnews">
    <div class="exhibition-banner">
      <img src="../../assets/img/latestnews-banner4.jpg" alt="" />
    </div>
    <div class="exhibition-wrap">
      <div class="left">
        <div class="detail" v-for="item in details" :key="item.id">
          <h2>{{ item.title }}</h2>
          <span>{{ item.time }}</span>
          <p>{{ item.detail_f }}</p>
          <video
            v-show="item.vd"
            :src="BASE_URL + item.vd"
            controls
            width="710px"
            height="470px"
            :poster="item.pt"
          ></video>
          <img
            v-show="item.cover"
            :src="item.cover"
            width="710px"
            height="470px"
            alt=""
          />
          <div class="second">{{ item.detail_s }}</div>
        </div>
      </div>
      <div class="right">
        <ul>
          <li
            v-for="item in latesnewsTypes"
            :key="item.id"
            :class="{ active: ty == item.type }"
          >
            {{ item.name }}
          </li>
        </ul>
        <HostelCard class="card" />
      </div>
    </div>
  </div>
</template>

<script>
import { reqNewsDetails } from "../../api";
import { reqLatestNewsType } from "../../api";
import { BASE_URL } from "../../utils/constants";

export default {
  data() {
    return {
      BASE_URL,
      details: [], //存放请求回的整条信息
      latesnewsTypes: [], //储存最新资讯5个分类名称的信息
      ty: null,
    };
  },

  mounted() {
    let id = this.$route.params.id;
    console.log(id); //查看是否成功拿到路由传递的id参数
    reqNewsDetails(id).then(res => {
      // console.log(res); 查看是否请求成功
      this.details = res.data.data; //将请求回的整条信息存入details数组
      console.log(this.details);
      this.ty = res.data.data[0].type;
    });

    reqLatestNewsType().then(res => {
      // console.log(res); 查看是否请求成功
      this.latesnewsTypes = res.data.data; //最新资讯5个分类名称的信息 存入latesnewsType数组
      console.log(this.latesnewsTypes); //查看是否存入成功
    });
  },
};
</script>

<style scoped lang="less">
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 240px;
}

.latestnews {
  background-color: #f5f5f5;
}
.exhibition-banner {
  width: 100%;
}
.exhibition-wrap {
  width: 1080px;
  margin: 0 auto;
  color: #333;
  position: relative;
  top: -60px;
  display: flex;
  justify-content: space-between;
  z-index: 200;

  > .left {
    width: 810px;
    background-color: #fff;
    overflow: hidden;
    > .detail {
      padding: 20px 50px 20px 50px;

      > h2 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      > span {
        color: #666666;
        display: block;
        margin-bottom: 20px;
      }
      > P {
        padding: 15px 10px;
        font-size: 16px;
        text-align: justify;
        line-height: 30px;
        text-indent: 2em;
        margin-bottom: 14px;
        background-color: rgb(214, 240, 252);
        border-top: 5px solid rgb(255, 222, 3);
        border-left: 5px solid rgb(255, 222, 3);
        box-sizing: border-box;
        border-radius: 10px;
      }
      > img {
        margin: 20px 0px;
        border-radius: 5px;
      }
      > .second {
        padding: 15px 155px;
        font-size: 16px;
        text-align: center;
        line-height: 35px;
        text-indent: 2em;
        margin-bottom: 14px;
        // background-color: rgb(214, 240, 252);
        border-right: 5px solid rgb(255, 222, 3);
        border-bottom: 5px solid rgb(255, 222, 3);
        box-sizing: border-box;
        border-radius: 10px;
      }
    }
  }

  > .right {
    width: 240px;
    > .box-card {
      > .active {
        background-color: #87c524;
      }
    }
    > ul {
      background-color: #fff;
      margin-bottom: 20px;
      font-size: 14px;
      > li {
        padding: 20px 20px;
      }
      > .active {
        background-color: #87c524;
      }
    }
  }
}
</style>
