<template>
  <div class="main">
    <!-- 新增会员卡 -->
    <div class="body">
      <h2>填写会员信息</h2>
      <div>
        <p>为了我们能更好地为您服务，请正确填写您 的注册资料及联系方式，“ * ”表示必填内容。</p>
        <el-form class="form" label-width="120px" style="width: 580px">
          <el-form-item label='中文姓名：'>
            <el-input placeholder="需与护照或有效证件相符"></el-input>
            <!-- <span>需与护照或有效证件相符</span> -->
          </el-form-item>
          <el-form-item label='英文姓名：'>
            <el-input placeholder="需与护照或有效证件相符，请按此格式示例输入：Da San"></el-input>
            <!-- <span>需与护照或有效证件相符，请按此格式示例输入：Da San</span> -->
          </el-form-item>
          <el-form-item label="出生日期：">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="性别：">
            <el-select multiple placeholder="请选择">
              <el-option>
                男
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label='国家/地区：'>
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="证件类型：">
            <el-select multiple placeholder="请选择">
              <el-option>
                二代身份证
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label='证件号：'>
            <el-input></el-input>
          </el-form-item>
          <el-form-item label='手机号码：'>
            <el-input placeholder="请准确填写，以便接收您使用预订旅舍服务的反馈提示"></el-input>
             <!-- <span> 请准确填写，以便接收您使用预订旅舍服务的反馈提示</span> -->
          </el-form-item>
          <el-form-item label='电子邮箱：'>
            <el-input placeholder="请准确填写您的常用有效邮箱，以便确认您 的预订服务"></el-input> 
            <!-- <span>请准确填写您的常用有效邮箱，以便确认您 的预订服务</span> -->
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

  h2 {
    border-bottom: 1px solid #ccc;
    font-size: 18px;
    font-weight: bold;
    line-height: 35px;
    margin-bottom: 10px;
  }

  div {
    P {
      margin: 40px 0px;
    }

    .form {
      padding: 2px 0 0px 60px;
      background-color: #ccc;
      .el-button--warning {
        padding: 15px 80px;
        margin: 60px 120px 30px;
        font-size: 16px;
      }
      .el-input__inner {
        margin-bottom: 20px;
      }
      // .el-input__icon {
      //   line-height: 10px;
      // }
    }
    input.el-input__inner {
        margin-bottom: 20px;
      }
  }
}
</style>