<template>
  <div class="latestnews">
    <div class="exhibition-banner">
      <img src="../../assets/img/latestnews-banner4.jpg" alt="" />
    </div>
    <div class="exhibition-wrap">
      <div class="left">
        <div class="detail">
          <h2>开放征稿啦｜投稿你的旅行笔记，有小礼物等你拿</h2>
          <span>发布时间：2020-09-01</span>
          <img src="../../assets/img/4.png" alt="" />
        </div>
      </div>
      <div class="righe">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
        <HostelCard class="card" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 240px;
}

.latestnews {
  background-color: #f5f5f5;
}
.exhibition-banner {
  width: 100%;
}
.exhibition-wrap {
  width: 1080px;
  margin: 0 auto;
  color: #333;
  position: relative;
  top: -60px;
  display: flex;
  justify-content: space-between;
  z-index: 200;

  > .left {
    width: 810px;
    background-color: #fff;
    overflow: hidden;
    > .detail {
      padding: 20px 50px 20px 50px;

      > h2 {
        font-size: 30px;
        margin-bottom: 10px;
      }
      > span {
        color: #666666;
        display: block;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 15px;
      }
    }
  }

  > .right {
    width: 240px;
  }
}
</style>
