<template>
  <div style="background-color: #f5f5f5; padding: 80px">
    <div class="main">
      <h1>请填写以下信息，查询您的订单信息</h1>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        class="form"
        label-width="200px"
      >
        <el-form-item label="请选择验证身份方式：" prop="way">
          <el-select v-model="form.way" style="width: 370px">
            <el-option label="手机号" value="number"></el-option>
            <el-option label="电子邮箱" value="Email"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="请输入你的邮箱/手机号：" prop="number">
          <el-input v-model="form.number" style="width: 370px"></el-input>
        </el-form-item>
        <el-form-item label="请输入右侧图片验证码：" prop="security_code">
          <el-input
            v-model="form.security_code"
            style="width: 370px"
          ></el-input>
          <div class="coderight" style="width: 112px" @click="refreshCode">
            <s-identify :identifyCode="identifyCode"></s-identify>
            <!-- @click="Refresh" -->
          </div>
        </el-form-item>
        <el-form-item label="请输入你收到的校验码：" prop="Code_of_effect">
          <el-input
            v-model="form.Code_of_effect"
            style="width: 370px"
          ></el-input>
          <a href="" @click="getFourNumber">获取验证码</a>
        </el-form-item>

        <el-form-item label="请输入你的订单编号：" prop="order_number">
          <el-input v-model="form.order_number" style="width: 370px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onsubmit">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "codetest",
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      form: {
        way: "",
        number: "",
        security_code: "",
        Code_of_effect: "",
        order_number: "",
      },
      rules: {
        number: [
          { required: true, message: "请输入你的邮箱/手机号", trigger: "blur" },
        ],
        security_code: [
          { required: true, message: "请输入右侧图片验证码", trigger: "blur" },
        ],
        Code_of_effect: [
          { required: true, message: "请输入你收到的校验码", trigger: "blur" },
        ],
        order_number: [
          { required: true, message: "请输入你的订单编号", trigger: "blur" },
        ],
      },
    };
  },

  

  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    // 获取验证码
    getFourNumber() {},
    // 提交按钮   下一步
    onsubmit() {
      console.log("用户点击了提交按钮", this.form);
      // 可以获取 ref='form'的组件对象
      let form = this.$refs["form"];
      console.log(form);
      //validate方法由于验证整个表单
      form.validate((valide) => {
        if (valid) {
          console.log("用户点击了提交按钮验证成功", this.form);
        } else {
          console.log("验证失败");
        }
      });
    },

    //以下是验证码

    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
      console.log(this.identifyCode);
    },
  },
};
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
        .coderight {
          position: absolute;
          top: 2px;
          left: 250px;
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
