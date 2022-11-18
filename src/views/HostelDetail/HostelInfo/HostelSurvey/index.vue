<template>
  <div>
    <div class="hostel-survey" v-show="hostelDetailData.length">
      <div class="img">
        <img :src="hostelDetailData[0]?.hostelImg[0]" alt="">
      </div>
      <div class="introduce">
        <h3>{{hostelName}}</h3>
        <p>{{hostelDetailData[0]?.survey}}</p>
      </div>
      <div class="service">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>营业时间</span>
          </div>
          <span>
            前台 :<strong>{{hostelDetailData[0]?.businessHours[0]}} 到 {{hostelDetailData[0]?.businessHours[1]}}</strong>
            <br>
            入住时间:<strong>{{ hostelDetailData[0]?.businessHours[0] }}</strong>后
            <br>
            房间保留到<strong> {{ hostelDetailData[0]?.businessHours[1] }}前</strong>
          </span>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>设施与服务</span>
          </div>
          <span>
            {{ hostelDetailData[0]?.servicestext }}
          </span>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>联系我们</span>
          </div>
          <p>{{hostelName}}</p>
          <p>地址：{{ hostelDetailData[0]?.position }}</p>
          <p>邮编：{{ hostelDetailData[0]?.postalCode }}</p>
        </el-card>
      </div>
    </div>
    <div class="noInformation" v-show="!hostelDetailData.length">
      暂无该旅舍信息
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "HostelSurvey",
  props: ['hostelName'],
  computed: {
    ...mapState('hostelDetailOptions', ['hostelDetailData'])
  }
}
</script>

<style lang="less" scoped>
  .hostel-survey {
    width: 1080px;
    padding: 25px 20px;
    display: flex;
    justify-content: space-between;
    .img {
      width: 200px;
    }
    .introduce {
      width: 405px;
      h3 {
        font-size: 18px;
        color: #333;
        font-weight: 500;
        line-height: 24px;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
        color: #666;
      }
    }
    .service {
      width: 390px;
      padding: 20px;
      .box-card {
        margin-top: 20px;
      }
    }
  }
  .noInformation {
    width: 1080px;
    padding: 25px 20px;
    font-size: 20px;
    font-weight: bold;
  }
</style>