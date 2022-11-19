<template>
  <div style="background-color: #f5f5f5; padding: 80px">
    <div class="main">
      <h1>请填写以下信息，查询您的订单信息</h1>
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请选择验证身份方式：">
          <el-select v-model="form" style="width: 370px">
            <el-option label="手机号" value="number"></el-option>
            <el-option label="电子邮箱" value="Email"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="请输入你的邮箱/手机号：">
          <el-input v-model="form" style="width: 370px"></el-input>
        </el-form-item>
        <el-form-item label="请输入右侧图片验证码：">
          <el-input v-model="form" style="width: 370px"></el-input>
          <div class="coderight" style="width: 112px" @click="refreshCode">
            <SIdentify
              :identifyCode="identifyCode"
              @click="Refresh"
            ></SIdentify>
          </div>
        </el-form-item>
        <el-form-item label="请输入你收到的校验码：">
          <el-input v-model="form" style="width: 370px"></el-input>
          <a href="">获取验证码</a>
        </el-form-item>

        <el-form-item label="请输入你的订单编号：">
          <el-input v-model="form" style="width: 370px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>下一步</el-button>
        </el-form-item>
      </el-form>

      <!-- 验证码 -->
    </div>
  </div>
</template>

<script>
import SIdentify from '../../components/Form/identify.vue' //
export default {
  components: {
    SIdentify: SIdentify,
  },
  mounted() {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    //...mapActions("modules/account", ["settoken", "setname"]),
    jumpregister: function () {
      this.$router.push({ path: '/register' })
    },
    //验证码abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
      console.log(this.identifyCode)
    },
  },
}
</script>

<style lang="less" scoped>
.main {
  width: 1080px;
  padding: 20px;
  margin: 0 auto;

  background-color: white;
  border: 1px #e1e1e1 solid;
  border-radius: 8px;
  h1 {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    border-bottom: 1px solid #e1e1e1;
  }
  form {
    margin-top: 30px;
    > div:nth-child(3) {
      > .el-form-item__content {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        position: relative;
        div {
          div {
            position: absolute;
            top: 2px;
            left: 250px;
          }
        }
      }
    }
    > div:nth-child(4) {
      > .el-form-item__content {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        a {
          display: inline-block;
          width: 100px;
          height: 28px;
          line-height: 28px;
          background-color: #87c524;
          text-align: center;
          color: #fff;
          border-radius: 100px;
          font-size: 14px;
          margin-left: 20px;
        }
      }
    }
  }
  button {
    margin-top: 40px;
    margin-left: 280px;
    width: 180px;
    height: 45px;
    // line-height: 45px;
    border-radius: 100px;
    background-color: #f7941c;
    color: white;
  }
}
</style>
