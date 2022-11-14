<template>
  <div class="latestnews">
    <div class="exhibition-banner">
      <img src="../../assets/img/latestnews-banner4.jpg" alt="" />
    </div>
    <div class="exhibition-wrap">
      <div class="nav">
        <h2>最新资讯</h2>
        <div class="nav-list">
          <a href="">视频</a>
          <a href="">加盟消息</a>
          <a href="">精彩活动</a>
          <a href="">总部动态</a>
          <a href="">旅社动态</a>
        </div>
      </div>
      <div class="main">
        <div class="left">
          <div class="item">
            <a href="">
              <img src="../../assets/img/1.jpg" alt="" />
            </a>
            <a href="">
              <h3>YHA云南夏令营 | “人与自然”（6-11岁）</h3>
            </a>
          </div>

          <div class="item">
            <a href="">
              <img src="../../assets/img/2.jpg" alt="" />
            </a>
            <a href="">
              <h3>青年旅舍第一批免费电子卡—送给谁？</h3>
            </a>
          </div>

          <div class="item">
            <a href="">
              <img src="../../assets/img/3.jpg" alt="" />
            </a>
            <a href="">
              <h3>这个周末，来深圳慈展会和我们偶遇吧</h3>
            </a>
          </div>

          <div class="item">
            <a href="">
              <img src="../../assets/img/4.png" alt="" />
            </a>
            <a href="">
              <h3>开放征稿啦｜投稿你的旅行笔记，有小礼物等你拿</h3>
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
export default {
  name: "HostelList",
  components: {
    HostelCard,
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
      > a {
        font-size: 14px;
        display: inline-block;
        width: 110px;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: #87c524;
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
