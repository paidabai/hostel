<template>
  <el-carousel :interval="5000" arrow="always" v-show="hostelImgList.length">
    <el-carousel-item v-for="item in hostelImgList" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "DetailImg",
  mounted() {
  },
  computed: {
    ...mapGetters('hostelDetailOptions',['hostelImgList'])
  },
  data() {
    return {
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