<template>
  <div class="hostelList">
    <div class="bgImg">
      <img src="../../assets/img/exhibition-banner.jpg" alt="">
    </div>
    <div class="main">
      <div class="table">
        <h2 class="table-title">旅舍一览表</h2>
        <el-table
            border
            :data="tableData"
            stripe
            style="width: 100%">
          <el-table-column
              prop="id"
              label="序号"
              width="88">
          </el-table-column>
          <el-table-column
              prop="province"
              label="省份"
              width="86">
          </el-table-column>
          <el-table-column
              prop="city"
              label="城市"
              width="152">
          </el-table-column>
          <el-table-column
              prop="hostelName"
              label="旅舍"
              width="307">
          </el-table-column>
          <el-table-column
              label="操作"
              width="75">
            <template>
              <el-button type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import {reqHostelList} from "../../api";

export default {
  name: "HostelList",
  data() {
    return {
      tableData: []
    }
  },
  // 将要挂载时
  mounted() {
    this.getHostelList()
  },
  methods: {
    // 获取全部的旅舍
   getHostelList(){
      reqHostelList().then((value) => {
        const result = value.data
        if (result.status === 200) {
          this.tableData = result.data
        }
      })
    }
  },
}
</script>

<style scoped lang="less">
  .main {
    width: 1080px;
    margin: 0 auto;
    position: relative;
    top: -70px;
    .table {
      width: 810px;
      padding: 25px 50px 25px 50px;
      background-color: #fff;
      .table-title {
        font-size: 30px;
        margin-bottom: 30px;
      }
    }
  }
</style>