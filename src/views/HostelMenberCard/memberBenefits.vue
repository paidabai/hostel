<template>
  <div class="publicgood">
    <div class="bgImg">
      <img src="../../assets/img/latestnews-banner4.jpg" alt="" />
    </div>
    <!-- 卡片 -->
    <div class="body">
      <div class="explain">
        <h2>会员优惠</h2>
        <el-row>
              <el-button type="warning" size="medium" round>会员优惠</el-button>
            </el-row>
      </div>
      <div class="content">
        <div class="lists">
          <div v-for="item in tableData" :key="item.id">
           <img :src="item.img" alt="">
           <p>{{item.title}}</p>
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
import { reqMemberBenefits } from "../../api";
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
    this.getMemberBenefits();
  },
  methods: {
    getMemberBenefits() {
      reqMemberBenefits().then((value) => {
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
      display: block;
      min-width: 1080px;
      margin: auto;
    }
  }
  .body {
    margin: auto;
    width: 1080px;
    position: relative;
    padding-top: 125px;
    .explain {
      width: 1080px;
      background-color: #fff;
      z-index: 100;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 15px 35px -15px rgb(47 130 36 / 70%);
      margin-bottom: 60px;
      position: absolute;
      top: -3%;
      display: flex;
      justify-content: space-between;
      > h2 {
        font-size: 30px;
        line-height: 100%;
        margin-bottom: 5px;
      }
        .el-button--warning {
      padding: 12px 50px;
      font-size: 16px;
      border-radius: 50px;
     }
    }
    .content {
      display: flex;
      justify-content: space-between;
      .lists {
        width: 840px;
        flex-wrap: wrap;
        display: flex;
       >div{
        flex-shrink: 0;
        width: calc(92%/3);
        margin: 0 20px 20px 0;
        background-color: #fff;
        padding: 15px;
        border-radius: 5px;
        height: auto;
        >p{
          font-weight: bold;
          color: #333;
          padding: 15px 0 0 0;
        }
        &:hover{
          box-shadow: 0 0 5px 2px #ddd;
            transform: scale(1.01);
        }
       }
      }
    }
  }
}
</style>