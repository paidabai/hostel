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
          <dt><img src="../../assets/img/member2.1.jpg" alt="" /></dt>
          <dd>
            <h3>国际畅游</h3>
            <p>
              除住宿优惠外，更有多项国际旅游优惠，涵盖食、住、行、邮、购、娱方方面面，惊喜连连！
            </p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../assets/img/member2.2.jpg" alt="" /></dt>
          <dd>
            <h3>更多精彩</h3>
            <p>
              青年旅舍每年都将举办多项国际交流活动和文化旅游活动，成为会员将享有优先参与的机会和参与优惠！
            </p>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../assets/img/member2.3.jpg" alt="" /></dt>
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
          <a href="">绑定电子卡</a>
          <a href="">会员问与答</a>
          <a href="">申请方法</a>
          <a href="">会员卡辨伪</a>
          <a href="">代理商加盟</a>
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
        <dl>
          <dt><img src="../../assets/img/member4.1.jpg" alt="" /></dt>
          <dd>
            <h3>国际青年旅舍会员卡</h3>
            <p>
              全球通用，可以享受国内外国际青年旅舍住宿价格的优惠，同时在世界各地享有逾三千项的优惠。
            </p>
            <button>￥50</button>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../assets/img/member4.2.jpg" alt="" /></dt>
          <dd>
            <h3>国际青年旅舍终身会员卡</h3>
            <p>全球通用，终身有效，适合身为青年旅舍忠实粉丝的你。</p>
            <button>￥500</button>
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
export default {};
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
  height: 700px;
  width: 1920px;
  margin: auto;
  background: url("../../assets/img/membership-banner.jpg") no-repeat;
  background-size: cover;
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
  width: 1960px;
  margin: auto;
  background: url("../../assets/img/member3.jpg") no-repeat;
  background-size: cover;
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