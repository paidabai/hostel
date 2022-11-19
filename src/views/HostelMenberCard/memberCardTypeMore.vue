<template>
  <div class="type">
    <img src="../../assets/img/exhibition-banner.jpg" alt="">
    <div>
      <div class="body" v-for="item in tableData" :key="item.id">
        <h2>{{ item.name }}</h2>
        <img :src="item.img" alt="" />
        <h3>{{ item.title }}</h3>
        <span>￥{{ item.price }}</span>
        <p>{{ item.card_desc }}</p>
        <div>
          <h3>成为YHA青年旅舍会员的好处：</h3>
          <p v-html="item.member_goods"></p>
          <div>
            <h3>会员卡费用及有效期</h3>
            <p v-html="item.card_limit"></p>
          </div>
        </div>
      </div>
      <div class="side">
        <HostelCard></HostelCard>
      </div>
    </div>
  </div>
</template>

<script>
import { reqMembercardType } from "../../api";
import HostelCard from "../../components/HostelCard/index.vue";
export default {
  name: "MembercardType",
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
    this.getMembercardType();
  },
  methods: {
    getMembercardType() {
     let id=this.$route.query.id
     console.log('id',id);
      reqMembercardType({id}).then((value) => {
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
.type {
  width: 100%;
  position: relative;
  background-color: #f5f5f5;
  >div{
    width: 1080px;
    margin: auto;
    display: flex;
    margin-top: -50px;
    color: #333;
    font-size: 14px;
    .body{
        padding: 30px 50px;
        background-color: #fff;
        margin-right: 20px;
        >h2{
            font-size: 30px;
            margin-bottom: 80px;
        }
        >h3{
            font-size: 20px;
            margin: 30px 0;
        }
        >span{
            color: #F7941C;
            font-weight: bold;
            padding: 70px;
            font-size: 16px;
        }
        >p{
            text-decoration: 2em;
            padding: 20px 0;
        }
        >div{
            >h3{
                font-size: 16px;
                font-weight: bold;
                padding: 20px 0;
            }
            >p{
                padding-left: 2em;
                line-height: 30px;
            }
            >div{
                padding-left: 2em;
                >h3{
                    font-style: 16px;
                    font-weight: bold;
                    margin: 30px 0 10px;
                }
                >p{
                    line-height: 30px;
                }
            }
        }
    }
  }
}
</style>