<template>
  <div id="app">
    <el-header height="116px">
      <Header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer height="340px">
      <Footer />
    </el-footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

export default {
  name: 'App',
  // 注册组件
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped>
.el-header,
.el-main,
.el-footer {
  padding: 0;
}
* {
  padding: 0;
  margin: 0;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
}
a {
  color: #333;
  cursor: pointer;
}
input {
  outline: none;
  border: none;
}
ul,
ol {
  list-style: none;
}
.login_registry_form {
  width: 100%;
  margin-top: 50px;
  padding: 30px 40px;
  box-shadow: 0 5px 0 0 rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  background: #f4fbff;
}
</style>
