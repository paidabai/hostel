<template>
  <div class="menberCard">
    <div class="member-one">
      <h1>YHA®会员卡，带您享尽全球青年旅舍®住宿优惠</h1>
      <div class="member-btn">
        <a  @click="$router.push(`/memberCardType`)">申请会员卡</a>
        <a  @click="$router.push(`/membershipRenewal`)">会员续卡</a>
        <a  @click="$router.push(`/memberBenefits`)">会员优惠</a>
      </div>
    </div>
    <div class="member-two">
      <h2>一卡在手，走遍全球；更多优惠，更多机会！</h2>
      <div class="member-list">
        <dl>
          <dt><img src="../../assets/img/cardapply/member2.1.jpg" alt="" /></dt>
          <dd>
            <h3>国际畅游</h3>
            <p>
              除住宿优惠外，更有多项国际旅游优惠，涵盖食、住、行、邮、购、娱方方面面，惊喜连连！
            </p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../assets/img/cardapply/member2.2.jpg" alt="" /></dt>
          <dd>
            <h3>更多精彩</h3>
            <p>
              青年旅舍每年都将举办多项国际交流活动和文化旅游活动，成为会员将享有优先参与的机会和参与优惠！
            </p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../assets/img/cardapply/member2.3.jpg" alt="" /></dt>
          <dd>
            <h3>全球通用</h3>
            <p>拥有YHA会员卡，您可以在全球青年旅舍享受住宿优惠。</p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="member-three">
      <div class="container-top">
        <h2>申请YHA®会员卡，开启您的精彩旅程</h2>
        <div class="btns">
          <a @click="$router.push(`/binding`)">绑定电子卡</a>
          <!-- <a @click="$router.push(`/threeFloor/binding`)">绑定电子卡</a> -->
          <!-- <a ><router-link to="/threeFloor/binding">绑定电子卡</router-link> </a> -->
          <a  @click="$router.push(`/questionAndAnswer`)">会员问与答</a>
          <a  @click="$router.push(`/applyMethods`)">申请方法</a>
          <a  @click="$router.push(`/memberIdentify`)">会员卡辨伪</a>
          <a  @click="$router.push(`/agent`)">代理商加盟</a>
        </div>
        <a  @click="$router.push(`/memberCardType`)">马上申请</a>
      </div>
      <div class="container-bottom">
        <h2>如果您的会员已过期，可申请续卡</h2>
        <a  @click="$router.push(`/membershipRenewal`)">马上续卡</a>
      </div>
    </div>
    <!-- 第四楼 -->
    <div class="member-four">
      <h2>选择会员卡类型</h2>
      <div class="member-list">
        <dl v-for="item in tableData" :key="item.id">
          <dt><img :src="item.img" alt="" /></dt>
          <dd>
            <h3>{{item.title}}</h3>
            <p>{{item.function_desc}}</p>
            <button @click="$router.push(`/memberAdd`)">￥{{item.price}}</button>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 第5楼 -->
    <div class="member-five">
      <h2>如果您的会员已过期，可申请续卡</h2>
      <div class="btns">
        <a @click="$router.push(`/memberInfoquery`)">会员卡号查询</a>
        <a @click="$router.push(`/memberCardquery`)">寄送信息查询</a>
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
// 公共样式
a,button{
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.4);
}
a:hover,button:hover{
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.9);
    transform: scale(1.04);
}
// 会员申请
.member-one {
  border-top: 2px solid #ddd;
  height: 700px;
  min-width: 1080px;
  margin: auto;
  background: url("../../assets/img/cardapply/membership-banner.jpg") no-repeat center;
  // background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    color: #fff;
    font-size: 40px;
    font-weight: 550;
    margin: 30px;
  }
  > .member-btn {
    display: flex;
    > a {
      display: flex;
      padding: 8px 30px;
      margin: 6px 12px;
      background-color: #fff;
      border-radius: 30px;
      color: #f7941c;
      font-weight: bold;
    }
  }
}
// 一卡在手走遍全球
.member-two {
  width: 1080px;
  margin: auto;
  padding: 110px 0;
  > h2 {
    font-size: 30px;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 55px;
  }
  > .member-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > dl {
      width: 270px;
      > dt {
        height: 170px;
        overflow: hidden;

        > img {
          transition: 0.5s;
          height: 100%;
        }
        &:hover > img {
          transform: scale(1.2);
        }
      }
      > dd {
        h3 {
          font-size: 20px;
          margin: 30px 0 10px;
          text-align: center;
          color: #333;
        }
        p {
          line-height: 21px;
          color: #555;
          font-size: 14px;
        }
      }
    }
  }
}
// 第三楼
.member-three {
  height: 1050px;
  min-width: 1080px;
  margin: auto;
  background: url("../../assets/img/cardapply/member3.jpg") no-repeat center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .container-top {
    height: 650px;
  }
  > .container-bottom {
    height: 400px;
  }
  > .container-top,
  > .container-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      color: #fff;
      font-size: 40px;
      font-weight: bold;
      margin: 50px;
    }
    > .btns {
      display: flex;
      > a {
        padding: 2px 18px;
        border: 2px solid #fff;
        color: #fff;
        border-radius: 30px;
        margin: 0px 2px 50px;
      }
    }
    > a {
      padding: 6px 35px;
      font-weight: bold;
      border: 2px solid #fff;
      color: #f7941c;
      background-color: #fff;
      border-radius: 30px;
    }
  }
}
// 第四楼 会员卡类型
.member-four {
  width: 1080px;
  margin: auto;
  padding: 110px 0;
  > h2 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #333;
    margin-bottom: 55px;
  }
  > .member-list {
    width: 100%;
    display: flex;
    align-items: center;
    > dl {
      width: 270px;
      margin-right: 120px;
      > dt {
        height: 170px;
        overflow: hidden;
        > img {
          transition: 0.5s;
          height: 100%;
        }
      }
      > dd {
        h3 {
          font-size: 20px;
          margin: 20px 0;
          text-align: center;
          color: #333;
        }
        p {
          line-height: 21px;
          color: #555;
          font-size: 14px;
          height: 60px;
          //   background-color: #ccc;
        }
        > button {
          padding: 8px 63px;
          border-radius: 30px;
          background-color: #f7941c;
          color: #fff;
          font-weight: bold;
          border: none;
          margin: 20px 0 0;
        }
      }
    }
  }
}
// 第5楼
.member-five {
  height: 330px;
  background-color: #478cc7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    margin: 50px;
  }
  > .btns {
    display: flex;
    > a {
      padding: 6px 35px;
      font-weight: bold;
      border: 2px solid #fff;
      color: #f7941c;
      background-color: #fff;
      border-radius: 30px;
      margin: 0 10px;
    }
  }
}
</style>