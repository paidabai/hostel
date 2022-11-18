<template>
  <div class="publicgood">
    <div class="bgImg">
      <img src="../../assets/img/exhibition-banner5.jpg" alt="" />
    </div>
    <!-- 卡片 -->
    <div class="body">
      <div class="explain">
        <h2>旅舍公益</h2>
        <p>
          国际青年旅舍®不是经济型酒店，我们提倡：文化交流，社会责任，实践环保，爱护大自然，简朴而高素质生活，自助及助人。
        </p>
      </div>
      <div class="content">
        <div class="lists">
          <div v-for="item in tableData" :key="item.id">
            <img :src="item.bgc_img" alt="" />

            <div class="list">
              <div :class='!item.log ? "log" :"" '>
                <img :src="item.log" alt="" />
              </div>
              <h2>{{ item.title }}</h2>
              <p>{{ item.desc }}</p>
              <button>查看详情</button>
            </div>
          </div>
        </div>
        <div class="cards">
          <HostelCard></HostelCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqHostelPublicGoodList } from "../../api";
import HostelCard from "../../components/HostelCard/index.vue";
export default {
  name: "HostelPublicGood",
  components: {
    HostelCard,
  },
  data() {
    return {
      tableData: [],
    };
  },
  // 将要挂载时
  mounted() {
    this.getHostelPublicGoodList();
  },
  methods: {
    getHostelPublicGoodList() {
      reqHostelPublicGoodList().then((value) => {
        console.log(value);
        const result = value.data;
        if (result.status === 200) {
          this.tableData = result.data;
          console.log(this.tableData);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.publicgood {
  width: 100%;
  position: relative;
  background-color: #f5f5f5;
  .bgImg {
    > img {
      width: 100%;
    }
  }
  .body {
    margin: auto;
    width: 1080px;
    .explain {
      background-color: #fff;
      z-index: 100;
      padding: 30px;
      margin-bottom: 60px;
      border-radius: 10px;
      box-shadow: 0 15px 35px -15px rgb(47 130 36 / 70%);
      margin-bottom: 60px;
      top: -25%;
      > h2 {
        font-size: 30px;
        line-height: 100%;
        margin-bottom: 5px;
      }
      > p {
        font-size: 14px;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      .lists {
        // margin-top: -20px;
        > div {
          position: relative;
          > img {
            width: 810px;
            height: 300px;
            position: absolute;
            bottom: 0;
            border-radius: 10px;
            z-index: 0;
          }
          > .list {
            z-index: 10;
            position: relative;
            width: 810px;
            height: 300px;
            padding: 40px 30px;
            margin-bottom: 15px;
            border-radius: 10px;
            // background-color: #fff;
            background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
            box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
            .log {
              display: none;
            }
            >div{
              margin-bottom: 20px;
            }
            h2 {
              font-size: 24px;
              cursor: pointer;
              font-weight: bold;
              &:hover{
                color: #3e80b9;
              }
            }
            p {
              width: 320px;
              font-size: 14px;
              padding: 20px 0 30px;
            }
            button {
              cursor: pointer;
              border: 1px solid #4b8fcc;
              font-size: 14px;
              padding: 5px 15px;
              border-radius: 20px;
              color: #4b8fcc;
            }
          }
        }
      }
    }
  }
}
</style>