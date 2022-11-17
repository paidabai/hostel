<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "DetailImg",
  mounted() {
  },
  data() {
    return {
      // 图片的地址数组
      imgList: [],
    }
  }
}
</script>

<style lang="less">
  .el-carousel {
    height: 100%;
    .el-carousel__container {
      height: 100%;
    }
  }
</style>