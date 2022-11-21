<template>
  <div class="type">
    <div class="member-card">
      <h2>选择会员卡类型</h2>
      <div class="member-list">
        <dl v-for="item in tableData" :key="item.id">
          <dt><img :src="item.img" alt="" /></dt>
          <dd>
            <h3>{{item.title}}</h3>
            <h4>￥{{item.price}}</h4>
            <p>{{item.function_desc}}</p>
            <a @click="$router.push(`/memberCardTypeMore?id=${item.id}`)">了解更多</a>
            <button>马上申请</button>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import { reqMembercardType } from "../../api";
export default {
  name: "MembercardType",
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
      reqMembercardType().then((value) => {
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
  user-select: none;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px 0 80px;
  .member-card {
    background-color: #fff;
    width: 1080px;
    margin: auto;
    box-shadow: 0 0 5px 1px #999;
    padding: 25px 25px 0;
    border-radius: 10px;
    > h2 {
      border-bottom: 1px solid rgb(192, 191, 191);
      line-height: 40px;
      font-weight: bold;
      font-size: 20px;
      color: #333;
    }
    .member-list {
      display: flex;
      padding: 50px 30px;
      > dl {
        width: 270px;
        margin-right: 60px;
        > dt {
          height: 175px;
          width: 270px;
          overflow: hidden;
          box-shadow: 0 0 8px 2px #cde5f6;
          border-radius: 10px;
          > img {
            width: 100%;
          }
        }
        > dd {
          width: 270px;
          display: flex;
          flex-direction: column;
          align-items: center;
          > h3 {
            font-weight: bold;
            padding: 20px 0;
            font-size: 18px;
            color: #333;
          }
          > h4 {
            color: #f7941c;
            font-weight: bold;
            font-size: 18px;
          }
          > p {
            color: #666;
            font-size: 16px;
            line-height: 24px;
            padding: 10px;
            height: 100px;
          }
          > a {
            color: #4b8fcc;
            text-decoration: underline;
            font-size: 14px;
          }
          > button {
            padding: 8px 50px;
            border-radius: 20px;
            color: #fff;
            background-color: #f7941c;
            border: none;
            margin-top: 40px;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
          }
        }
      }
    }
    // 公共样式
    img:hover,button:hover{
      box-shadow: 0 0 6px 1px #888;
      transform: scale(1.01);
    }
  }
}
</style>