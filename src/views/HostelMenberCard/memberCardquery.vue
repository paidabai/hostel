<template>
  <div class="main">
    <div class="body">
      <h2>会员卡寄送信息查询</h2>
      <div>
        <p>想查看您的会员卡寄送情况？请提供您的订单号和收件人手机号</p>
        <el-form :inline="true" class="form" label-width="auto">
          <el-form-item>
            <el-input
              style="width: 410px; margin-right: 10px"
              placeholder="输入订单号"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              style="width: 410px"
              placeholder="输入收件人手机号"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-button type="warning" size="medium" round>查询</el-button>
            </el-row>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  width: 100%;
  background-color: #f5f5f5;
  padding: 40px 0 100px;
}
.body {
  width: 1080px;
  margin: auto;
  background-color: #fff;
  overflow: hidden;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px #ccc;
  font-size: 14px;
  color: #333;
  > h2 {
    border-bottom: 1px solid #ccc;
    font-size: 18px;
    font-weight: bold;
    line-height: 35px;
    margin-bottom: 10px;
  }
  > div {
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    >p{
      padding:0 30px 30px;
      font-size: 16px;
    }
    .el-button--warning {
      padding: 15px 80px;
      border-radius: 50px;
      margin: 50px 320px 0px;
      font-size: 16px;
    }
  }
}
</style>