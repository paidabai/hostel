<template>
  <div class="main">
    <img
      src="http://www.yhachina.com/images/membership/apply-processs.jpg"
      alt=""
    />
    <div class="body">
      <h2>填写续卡会员信息</h2>
      <p>
        请输入希望续卡的会员信息，并确认信息正确，您可一次续多张不同类型的会员卡。如果会员卡号码与证件号码不匹配，需要联系修改<br />
        如果您忘记了会员卡号，请点击<a href=""><em>会员卡号自助查询</em></a>
      </p>
      <el-form class="form" label-width="auto">
        <el-form-item label="会员卡号码：" style="width:370px">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="证件号：" style="width:370px">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <button>查询</button>
      </el-form>
   
      <div class="add">
        <i class="el-icon-circle-plus"></i><span>添加会员卡</span>
      </div>
      <div>
        <h4>续卡费用及说明：</h4>
        <p>
          1.第一年续卡的费用为原价50元的9折，45元及回邮费用。第二年及以后为8折，40元及回邮费用。
          也可以凭旧卡直接到国际青年旅舍®中国总部办理续卡。
        </p>
        <p>
          2.续卡和新办理的会员卡一样，都是获取新的会员卡号，原来的卡号过期后不会继续延用。
        </p>
        <p>
          3.网上在线续卡功能只提供即时续卡（支付续卡费用日起算），如果需要办理其他时间的续卡，请通过"联系我们"中的联系方式，询问具体续卡事宜。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
  width: 100%;
  background-color: #f5f5f5;
  padding: 40px 0 100px;
  > img {
    display: block;
    margin: auto;
    margin-bottom: 40px;
  }
  .body {
    width: 1080px;
    margin: auto;
    background-color: #fff;
    overflow: hidden;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 5px 1px #ccc;
    font-size: 15px;
    color: #333;
    > h2 {
      border-bottom: 1px solid #ccc;
      font-size: 18px;
      font-weight: bold;
      line-height: 35px;
      margin-bottom: 10px;
    }
    > p {
      line-height: 45px;
      > a {
        color: #4b8fcc;
        text-decoration: underline;
        font-size: 14px;
      }
    }
    .form {
      display: flex;
      width: 1000px;
      justify-content: space-between;
      margin: 10px 0;
      > button {
        height: 35px;
        padding: 5px 60px;
        background-color: #F39801;
        border: none;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        border-radius: 100px;
        margin-right: 30px;
      }
    }
    .add {
      display: flex;
      align-items: center;

      > i {
        color: #F39801;
        font-size: 40px;
        margin: 10px 10px 10px 30px;
        > span {
          font-size: 16px;
        }
      }
    }
    > div {
      line-height: 23px;
    }
  }
}
</style>