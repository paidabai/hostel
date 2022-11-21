<template>
  <div class="main">
    <div class="body">
      <h2>卡号查询</h2>
      <div>
        <p>忘记您的会员卡号了吗？请填写以下信息，系统将自动为您查询。</p>
        <el-form class="form" label-width="auto">
          <el-form-item label='证件号码：' style="width: 520px">
            <el-input placeholder="请填写申请会员卡时登记的证件号码" style=" margin-bottom: 20px;"></el-input>
          </el-form-item>
          <el-form-item label='电子邮箱：' style="width: 520px">
            <el-input placeholder="请填写申请会员卡时登记的电子邮箱"></el-input>
          </el-form-item>
           <el-form-item style="width: 410px">
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
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px #ccc;
  font-size: 16px;
  color: #333;
  > h2 {
    border-bottom: 1px solid #ccc;
    font-size: 18px;
    font-weight: bold;
    line-height: 35px;
    margin-bottom: 10px;
  }
  > div {
    >P{
      margin: 40px 15px;
    }
    .form{
      padding: 2px 0 0px 60px;
      
     .el-button--warning {
      padding: 15px 80px;
      margin: 60px 120px 30px;
      font-size: 16px;
     }
    }
  }
}
</style>