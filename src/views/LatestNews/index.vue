<template>
  <div class="latestnews">
    <div class="exhibition-banner">
      <img src="../../assets/img/latestnews-banner4.jpg" alt="" />
    </div>
    <div class="exhibition-wrap">
      <div class="nav">
        <h2>最新资讯</h2>
        <div class="nav-list">
          <button
            v-for="item in latesnewsTypes"
            :key="item.id"
            @click="submit(item.id)"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
      <div class="main">
        <div class="left">
          <div
            class="item"
            v-for="item in eachNews"
            :key="item.id"
            @click="$router.push(`/newsDetails?id=${item.id}`)"
          >
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
import { reqLatestNews } from "../../api";
import { reqLatestNewsType } from "../../api";
import HostelCard from "../../components/HostelCard/index.vue";
export default {
  components: {
    HostelCard,
  },

  data() {
    return {
      latestNews: [], //储存最新资讯全部信息
      latesnewsTypes: [], //储存最新资讯5个分类名称的信息
      eachNews: [], ////储存最新资讯5个分类各自的信息
    };
  },

  // 将要挂载时，就请求回 最新资讯全部信息
  mounted() {
    this.getLatestNews();
    this.getLatestNewsType();
  },
  methods: {
    submit(id) {
      console.log(id);
      let x = this.latestNews.filter(v => v.type == id);
      console.log(x); //查看是否存入成功
      this.eachNews = x; //筛选后的全部信息 重新存入 eachNews数组
    },

    getLatestNews() {
      reqLatestNews().then(res => {
        console.log(res);
        this.latestNews = res.data.data; //最新资讯全部信息 存入latestNews数组
        this.eachNews = res.data.data; //最新资讯全部信息 备份存入eachNews数组，主页面初次加载完成时用
        console.log(this.latestNews); //查看是否存入成功
      });
    },

    getLatestNewsType() {
      reqLatestNewsType().then(res => {
        console.log(res);
        this.latesnewsTypes = res.data.data; //最新资讯5个分类名称的信息 存入latesnewsType数组
        console.log(this.latesnewsTypes); //查看是否存入成功
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
        border: 1px solid #fff;
        border-radius: 5px;
        background-color: #fff;
        &:hover {
          background-color: #ddd;
          transform: scale(1.05);
          transition: 0.3s;
        }

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
