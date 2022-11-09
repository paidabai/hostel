<template>
  <el-row :gutter="12" style="display: flex; flex-direction: column">
    <el-col :span="8">
      <router-link to="to">
        <el-card shadow="hover" style="background-color: #87C524; width: 240px; height: 80px">
          <div class="card-text">
            <i class="logo house"></i>
            旅舍预定
            <i class="right-icon"></i>
          </div>
        </el-card>
      </router-link>
    </el-col>
    <el-col :span="8">
      <router-link to="to">
        <el-card shadow="hover" style="background-color: #F7941C; width: 240px; height: 80px">
          <div class="card-text">
            <i class="logo card"></i>
            会员卡
            <i class="right-icon"></i>
          </div>
        </el-card>
      </router-link>
    </el-col>
    <el-col :span="8">
      <router-link to="/" >
        <el-card shadow="hover" style="background-color: #4B8FCC; width: 240px; height: 80px">
          <div class="card-text">
            <i class="logo join"></i>
            旅舍加盟
            <i class="right-icon"></i>
          </div>
        </el-card>
      </router-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "HostelCard"
}
</script>

<style lang="less" scoped>
  .card-text{
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    position: relative;

    .logo {
      width: 30px;
      height: 30px;
      display: inline-block;
      background-image: url("../../assets/sprite/app_z.png");
      background-repeat: no-repeat;
      line-height: 100%;
      margin-right: 10px;
    }

    .house {
      background-position: -389px -422px;
    }

    .card {
      background-position: -419px -422px
    }

    .join {
      background-position: -476px -60px
    }

    .right-icon {
      width: 30px;
      height: 30px;
      background-size: 30px;
      background: url("../../assets/img/exhibition-r-icon4.png") no-repeat 10px;
      position: absolute;
      right: 0;
    }
  }
</style>