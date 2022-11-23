<template>
  <div class="container">
    <div class="center">
      <DetailHeader :hostelName="hostelName"/>
      <HostelInfo :hostelName="hostelName"/>
    </div>
  </div>
</template>

<script>
import {reqHostelDetail, reqHostelServices, reqHostelType} from "../../api";
// 引入旅舍详情的头部组件
import DetailHeader from './DetailHeader/index.vue'
// 引入旅舍详情的信息组件
import HostelInfo from './HostelInfo/index.vue'
import {BASE_URL} from "../../utils/constants";

export default {
  name: "HostelDetail",
  // 注册组件
  components:{
    DetailHeader,
    HostelInfo
  },
  props: ['hostelId', 'hostelName'],
  mounted() {
    this.getHostelDetail()
    this.getHostelType()
    this.getHostelServices()
  },
  methods: {
    // 获取旅舍详情
    getHostelDetail() {
      reqHostelDetail(this.hostelId).then(value => {
        const result = value.data
        if (result.status === 200) {
          // 添加数据在store 的state中
          this.$store.dispatch('hostelDetailOptions/saveHostelDetail', result.data)
        }
      })
    },
    // 获取旅舍房间类型
    getHostelType() {
      reqHostelType(this.hostelId).then(value => {
        const result = value.data
        if (result.status === 200) {
          this.$bus.$emit('getHostelType', result.data)
        }
      })
    },
    // 获取旅舍设施与服务
    getHostelServices() {
      reqHostelServices(this.hostelId).then(value => {
        const result = value.data
        if (result.status === 200) {
          this.$bus.$emit('getHostelServices', result.data)
        }
      })
    }
  },
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