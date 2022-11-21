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
          <p>
            投稿有什么奖励 我们为投稿的小伙伴准备一份小礼物， 将有机会获得：
            预订、小商品优惠券； 周边文创产品免费体验权益；
            旅舍免费入住体验权益等...
            文章一旦被选用，将获得YHA青年旅舍电子会员年卡一张!
            长期供稿的小伙伴们，还有不定期的福利哦！
          </p>
          <img src="../../assets/img/2.jpg" alt="" />
          <div class="second">
            投稿方式
            请将文章以【Word文档+图片压缩包】的形式发送给我们的投稿邮箱：service@yhachina.com。
            邮件标题：投稿｜文章题目。（如：投稿｜我与YHA的那些事儿）
            内容格式：为了方便联系，请在文档内标注您的姓名或昵称、个人微信号及联系电话；文章内请标注插图顺序。
            入选通知：所有入选稿件会在7天内收到我们的邮件回复，如未被回复，稿件即未被选用，作者可自行处理。
            版权说明：默认“YHA青年旅舍”原创首发，请勿一稿多投，请勿抄袭、剽窃、盗用。如非原创首发我们会删除文章，作者也需要承担相应责任。
            征稿长期有效，欢迎大家来投~
          </div>
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
        margin-bottom: 20px;
      }
      > span {
        color: #666666;
        display: block;
        margin-bottom: 20px;
      }
      > P {
        padding: 15px 10px;
        font-size: 16px;
        text-align: justify;
        line-height: 30px;
        text-indent: 2em;
        margin-bottom: 14px;
        background-color: rgb(214, 240, 252);
        border-top: 5px solid rgb(255, 222, 3);
        border-left: 5px solid rgb(255, 222, 3);
        box-sizing: border-box;
        border-radius: 10px;
      }
      > img {
        margin: 20px 0px;
        border-radius: 5px;
      }
      > .second {
        padding: 15px 155px;
        font-size: 16px;
        text-align: center;
        line-height: 35px;
        text-indent: 2em;
        margin-bottom: 14px;
        // background-color: rgb(214, 240, 252);
        border-right: 5px solid rgb(255, 222, 3);
        border-bottom: 5px solid rgb(255, 222, 3);
        box-sizing: border-box;
        border-radius: 10px;
      }
    }
  }

  > .right {
    width: 240px;
  }
}
</style>
