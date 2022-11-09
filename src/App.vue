<template>
  <div id="app">
    <el-header height="116px">
      <Header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer height="340px">
      <Footer/>
    </el-footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "App",
  // 注册组件
  components:{
    Header,
    Footer
  },
}
</script>

<style scoped>
  .el-header, .el-main, .el-footer{
    padding: 0;
  }
</style>
