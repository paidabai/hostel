<template>
  <div>
    <div class="list-dp">
      <div class="w1080">
        <el-form class="searchhotel">
          <el-input style="width: 300px"></el-input>
          <el-date-picker  type="date" placeholder="选择日期" style="width: 300px"> </el-date-picker>
          <el-date-picker type="date" placeholder="选择日期" style="width: 300px"> </el-date-picker>
          <el-button>立即创建</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.list-dp {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: url(../../assets/img/list-dp.gif);
  .searchhotel {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    button {
      background-color: #f7941c;
    }
  }
}
</style>
