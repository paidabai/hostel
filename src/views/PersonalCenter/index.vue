<template>
  <div>
    <div class="list-dp">
      <div class="w1080">
        <el-form class="searchhotel">
          <el-input style="width: 300px" placeholder="目的地    |"></el-input>
          <el-date-picker
            type="date"
            placeholder="入住日期    |"
            style="width: 300px"
          >
          </el-date-picker>
          <el-date-picker
            type="date"
            placeholder="退房日期    |"
            style="width: 300px"
          >
          </el-date-picker>
          <el-button>搜索</el-button>
        </el-form>
      </div>
    </div>
    <div class="personal">
      <div class="personal-content">
        <div class="personal-left">
          <div class="personal-left-div">
            <h2>
              <router-link to="/personalcenter/myinfo">首页</router-link>
            </h2>
            <dl>
              <dt>
                <router-link to="/personalcenter/sysinfo">系统消息</router-link>
              </dt>
              <dt>订单中心</dt>
              <dd>
                <router-link to="/personalcenter/bookinglists"
                  >旅舍订单</router-link
                >
              </dd>
              <dd>
                <router-link to="/personalcenter/memberCardOrder"
                  >会员卡订单</router-link
                >
              </dd>
              <dt>会员卡管理</dt>
              <dd>
                <router-link to="/personalcenter/card">会员卡管理</router-link>
              </dd>
              <dd>
                <!-- 这里要跳转 -->
                <router-link to="/personalcenter/cardrenew"
                  >在线续卡</router-link
                >
              </dd>
              <dd>
                <router-link to="/personalcenter/activitylists"
                  >用户优惠</router-link
                >
              </dd>
              <dd>
                <router-link to="/personalcenter/insurance"
                  >户外保险</router-link
                >
              </dd>

              <dt>个人中心</dt>
              <dd>
                <router-link to="/personalcenter/info">我的信息</router-link>
              </dd>
              <dd>
                <router-link to="/personalcenter/favorites">
                  我的收藏</router-link
                >
              </dd>
              <dd>
                <router-link to="/personalcenter/comment">我的点评</router-link>
              </dd>
              <dd>
                <router-link to="/personalcenter/bind">绑定与关联</router-link>
              </dd>
              <dd>
                <router-link to="/personalcenter/password"
                  >修改密码</router-link
                >
              </dd>

              <dt>票券与积分</dt>
              <dd>
                <router-link to="/personalcenter/coupon">优惠劵</router-link>
              </dd>
              <dd>
                <router-link to="/personalcenter/point"> 我的积分</router-link>
              </dd>

              <dt>常用信息管理</dt>
              <dd>
                <router-link to="/personalcenter/friend"
                  >常用旅客信息修改密码</router-link
                >
              </dd>
              <dd>
                <router-link to="/personalcenter/address"
                  >常用地址管理修改密码</router-link
                >
              </dd>

              <dt>
                <router-link to="/personalcenter/help">帮助中心</router-link>
              </dt>
            </dl>
          </div>
        </div>
        <div class="personal-right , rim">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// 搜索栏
.list-dp {
  width: 1250px;
  margin: 0 auto;
  background: url(../../assets/img/list-dp.gif);
  .searchhotel {
    width: 1080px;
    margin: 0 auto;
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background-color: #f7941c;
      width: 120px;
      height: 40px;
      padding: 1px 6px;
    }
  }
}
// 主体内容
.personal {
  width: 100%;
  padding: 50px 0 150px;
  .personal-content {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .personal-left {
      width: 120px;
      padding: 20px 15px;
      border: 1px solid #e1e1e1;
      box-shadow: 0 0 0 1px #efefef;
      margin-bottom: 20px;
      .personal-left-div {
        color: #333;
        font-size: 14px;
        user-select: none;
        h2 {
          a {
            width: 87px;
            font-weight: bold;
            display: block;
          }
          margin-bottom: 10px;
        }
        dt {
          color: #000;
          font-weight: bold;
          margin: 10px 0;
          padding: 10px 0 0;
          border-top: 1px solid #e7e7e7;
        }
        dd {
          line-height: 180%;
          cursor: pointer;
          a {
            &:hover {
              color: #f7941c;
            }
          }
        }
        .active {
          color: #f7941c;
        }
      }
    }
    .personal-right {
      width: 950px;
    }
  }
}
.rim {
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 0 1px #efefef;
  padding: 20px 20px;
  margin-bottom: 20px;
}
</style>
