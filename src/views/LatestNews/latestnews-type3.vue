<template>
  <div class="latestnews">
    <div class="exhibition-banner">
      <img src="../../assets/img/latestnews-banner4.jpg" alt="" />
    </div>
    <div class="exhibition-wrap">
      <div class="nav">
        <h2>最新资讯</h2>
        <div class="nav-list">
          <button @click="$router.push(`/latestNews/1`)">视频</button>
          <button @click="$router.push(`/latestNews/2`)">加盟消息</button>
          <button @click="$router.push(`/latestNews/3`)">精彩活动</button>
          <button @click="$router.push(`/latestNews/4`)">总部动态</button>
          <button @click="$router.push(`/latestNews/5`)">旅舍动态</button>
        </div>
      </div>
      <div class="main">
        <div class="left">
          <div class="item" v-for="item in activities" :key="item.id">
            <a href="">
              <img :src="item.cover" alt="" />
            </a>
            <a href="">
              <h3>{{ item.title }}</h3>
            </a>
          </div>
        </div>

        <div class="right">
          <HostelCard class="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HostelCard from "../../components/HostelCard/index.vue";
import axios from "axios";
export default {
  components: {
    HostelCard,
  },

  data() {
    return {
      activities: [],
    };
  },

  // 将要挂载时，就请求回 精彩活动全部信息
  mounted() {
    this.gitActivities();
  },
  methods: {
    gitActivities() {
      let url = "http://localhost:5000/latestNews";
      axios.get(url).then(res => {
        console.log(res);
        let arr = res.data.data;
        let x = arr.filter(v => v.type == 3);
        this.activities = x; //精彩活动全部信息 存入 activities数组
        console.log(this.activities); //查看是否存入成功
      });
    },
  },
};
</script>
<style scoped lang="less">
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
  z-index: 200;

  > .nav {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    margin-bottom: 60px;
    background-color: #fff;
    box-shadow: 0 15px 35px -15px rgb(47 130 36 / 70%);
    > h2 {
      font-size: 30px;
      line-height: 100%;
      margin-bottom: 10px;
    }
    > .nav-list {
      > button {
        font-size: 14px;
        display: inline-block;
        width: 110px;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: #87c524;
        border: none;
      }
      > button:hover {
        background-color: #f7941c;
      }
    }
  }

  > .main {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    border: 0;
    > .left {
      width: 810px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      > .item {
        width: calc((100% - 20px) / 3);
        margin-bottom: 10px;
        cursor: pointer;
        padding: 14px;
        border: 1px solid white;
        border-radius: 5px;
        background-color: white;

        > a > img {
          width: 100%;
        }
        > a > h3 {
          font-weight: bold;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
