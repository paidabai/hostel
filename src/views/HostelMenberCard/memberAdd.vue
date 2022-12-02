<template>
  <div class="main">
    <!-- 新增会员卡 -->
    <div class="body">
      <h2>填写会员信息</h2>
      <div>
        <p>为了我们能更好地为您服务，请正确填写您 的注册资料及联系方式，“ * ”表示必填内容。</p>
        <el-form class="form" ref="form" :model="form" :rules="rules" label-width="120px" style="width: 580px">
          <el-form-item label='中文姓名：' prop="name_c">
            <el-input placeholder="需与护照或有效证件相符" v-model="form.name_c"></el-input>
            <!-- <span>需与护照或有效证件相符</span> -->
          </el-form-item>
          <el-form-item label='英文姓名：' prop="name_e">
            <el-input placeholder="需与护照或有效证件相符，请按此格式示例输入：Da San" v-model="form.name_e"></el-input>
            <!-- <span>需与护照或有效证件相符，请按此格式示例输入：Da San</span> -->
          </el-form-item>
          <el-form-item label="出生日期：" prop="birthday">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>
          <el-form-item label="性别：" prop="sex">
            <el-radio v-model="form.sex" label="1">
              男</el-radio>
            <el-radio v-model="form.sex" label="0">
              女</el-radio>
          </el-form-item>
          <el-form-item label='国家/地区：' prop="country">
            <el-input v-model="form.country"></el-input>
          </el-form-item>

          <el-form-item prop="id_type" label="证件类型：">
            <el-select v-model="form.id_type" placeholder="请选择">
              <el-option v-for="item in IdTypes" :key="item.id" :label="item.type" :value="item.type">
              </el-option>
            </el-select>
          </el-form-item>

            <el-form-item label='证件号：' prop="id_number">
              <el-input v-model="form.id_number"></el-input>
            </el-form-item>
            <el-form-item label='手机号码：' prop="phone">
              <el-input v-model="form.phone" placeholder="请准确填写，以便接收您使用预订旅舍服务的反馈提示"></el-input>
              <!-- <span> 请准确填写，以便接收您使用预订旅舍服务的反馈提示</span> -->
            </el-form-item>
            <el-form-item label='电子邮箱：' prop="email">
              <el-input v-model="form.email" placeholder="请准确填写您的常用有效邮箱，以便确认您 的预订服务"></el-input>
              <!-- <span>请准确填写您的常用有效邮箱，以便确认您 的预订服务</span> -->
            </el-form-item>
            <el-form-item style="width: 410px">
              <el-row>
                <el-button type="warning" size="medium" round @click.prevent="submit">提交</el-button>
              </el-row>
            </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
  
<script>
import { reqIdType,addMember } from "../../api";
export default {
  data() {
    return {
      IdTypes:[],
      form: {
        // mid: '',
        name_c: '',
        name_e: '',
        birthday: '',
        sex: '',
        country: '',
        id_type: '',
        id_number: '',
        phone: '',
        email: '',
      },
      rules: { // 整理表单验证规则
        name_c: [
          { required: true, message: '必填', trigger: 'blur' }],
        name_e: [
          { required: true, message: '必填', trigger: 'blur' }],
        birthday: [
          { required: true, message: '必填', trigger: 'blur' }],
        sex: [
          { required: true, message: '必填', trigger: 'blur' }],
        country: [
          { required: true, message: '必填', trigger: 'blur' }],
        id_type: [
          { required: true, message: '必填', trigger: 'blur' }],
        id_number: [
          { required: true, message: '必填', trigger: 'blur' }],
        phone: [
          { required: true, message: '必填', trigger: 'blur' }],
        email: [
          { required: true, message: '必填', trigger: 'blur' }],
      }
    }
  },
  // 挂载
  mounted(){
    this.getIdType()
  },
  methods: {
    // 提交
    submit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          // console.log('提交数据：', this.form);
          let params = this.form
          addMember(params).then(res=>{
            console.log('打印结果，成功的结果',res);
            if(res.data.status==200){
              this.$message({
                 type:'success', message:'会员添加成功'
              })
              this.$refs.form.resetFields();
            }
          })
        }
      })
    },
    getIdType(){
      reqIdType().then(res=>{
        // console.log(res);
        this.IdTypes=res.data.data
        console.log(res.data.data);
      })
    }
  },
 
};
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
      // background-color: #ccc;

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