<template>
    <div class="cards" >
          <el-menu class="el-menu-demo" router :default-active="$route.path">
          <el-menu-item class="is-active">会员卡</el-menu-item>
          <router-link to="/questionAndAnswer"><el-menu-item >会员卡问与答</el-menu-item></router-link>
          <router-link to="/memberIdentify"><el-menu-item>会员卡辨伪</el-menu-item></router-link>
          <router-link to="/applyMethods"><el-menu-item>申请方法</el-menu-item></router-link>
          <router-link to="/binding"><el-menu-item>如何绑定电子会员卡</el-menu-item></router-link>
          <router-link to="/agent"><el-menu-item>代理商加盟</el-menu-item></router-link>
          </el-menu>
    </div>
</template>

<script>
    export default {
        name:"memberCard"
    }
</script>

<style lang="less" scoped>
.cards{
    .el-menu-demo{
      margin-bottom: 30px;
    }
    .el-menu-item:hover{
      background-color: #9DCF4E;
      color:#fff;
      font-weight: bold;
    }
    .el-menu-item.is-active{
      color: #fff;
      font-weight: bold;
      background-color: #9DCF4E;
    }
    user-select: none;
  }
</style>