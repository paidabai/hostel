<template>
  <div class="container">
    <div class="center">
      <DetailHeader />
      <HostelInfo />
     <div style="width: 100px; height: 500px"></div>

    </div>
  </div>
</template>

<script>
import {reqHostelDetail, reqHostelType} from "../../api";
// 引入旅舍详情的头部组件
import DetailHeader from './DetailHeader/index.vue'
// 引入旅舍详情的信息组件
import HostelInfo from './HostelInfo/index.vue'

export default {
  name: "HostelDetail",
  // 注册组件
  components:{
    DetailHeader,
    HostelInfo
  },
  data() {
    return {}
  },
  props: ['hostelId'],
  mounted() {
    this.getHostelDetail()
    this.getHostelType()
  },
  methods: {
    // 获取旅舍详情
    getHostelDetail() {
      reqHostelDetail(this.hostelId).then(value => {
        const result = value.data
        if (result.status === 200) {
          console.log(result.data)
        }
      })
    },
    // 获取旅舍房间类型
    getHostelType() {
      reqHostelType(this.hostelId).then(value => {
        const result = value.data
        if (result.status === 200) {
          console.log(result.data)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    background-color: #f5f5f5;
    .center {
      width: 1080px;
      margin: 0 auto;
      padding-top: 20px;
    }
  }
</style>