<template>
  <div class="container">
    <div class="center">
      <DetailHeader :hostelName="hostelName"/>
      <HostelInfo />
    </div>
  </div>
</template>

<script>
import {reqHostelDetail, reqHostelType} from "../../api";
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
  },
  methods: {
    // 获取旅舍详情
    getHostelDetail() {
      reqHostelDetail(this.hostelId).then(value => {
        const result = value.data
        if (result.status === 200 && result.data.length !== 0) {
          // 格式化后的img数组
          const formatImgList = []
          // 遍历hostelImg添加img的地址前缀，添加到formatImgList
          result.data[0].hostelImg.forEach(item => {
            item = `${BASE_URL}/hostelImg/${item}`
            formatImgList.push(item)
          })
          // 修改原来的数据
          result.data[0].hostelImg = formatImgList
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