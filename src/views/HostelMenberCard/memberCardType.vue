<template>
  <div class="type">
    <div class="member-card">
      <h2>选择会员卡类型</h2>
      <div class="member-list">
        <dl>
          <dt><img src="../../assets/img/member4.1.jpg" alt="" /></dt>
          <dd>
            <h3>国际青年旅舍会员卡</h3>
            <h4>￥50</h4>
            <p>
              全球通用，可以享受国内外国际青年旅舍住宿价格的优惠，同时在世界各地享有逾三千项的优惠。
            </p>
            <a href="">了解更多</a>
            <button>马上申请</button>
          </dd>
        </dl>
        <dl>
          <dt><img src="../../assets/img/member4.2.jpg" alt="" /></dt>
          <dd>
            <h3>国际青年旅舍终身会员卡</h3>
            <h4>￥500</h4>
            <p>全球通用，终身有效，适合身为青年旅舍忠实粉丝的你。</p>
            <a href="">了解更多</a>
            <button>马上申请</button>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.type {
  user-select: none;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px 0 80px;
  .member-card {
    background-color: #fff;
    width: 1080px;
    margin: auto;
    box-shadow: 0 0 5px 1px #999;
    padding: 25px 25px 0;
    border-radius: 10px;
    > h2 {
      border-bottom: 1px solid rgb(192, 191, 191);
      line-height: 40px;
      font-weight: bold;
      font-size: 20px;
      color: #333;
    }
    .member-list {
      display: flex;
      padding: 50px 30px;
      > dl {
        width: 270px;
        margin-right: 60px;
        > dt {
          height: 175px;
          width: 270px;
          overflow: hidden;
          box-shadow: 0 0 8px 2px #cde5f6;
          border-radius: 10px;
          > img {
            width: 100%;
          }
        }
        > dd {
          width: 270px;
          display: flex;
          flex-direction: column;
          align-items: center;
          > h3 {
            font-weight: bold;
            padding: 20px 0;
            font-size: 18px;
            color: #333;
          }
          > h4 {
            color: #f7941c;
            font-weight: bold;
            font-size: 18px;
          }
          > p {
            color: #666;
            font-size: 16px;
            line-height: 24px;
            padding: 10px;
            height: 100px;
          }
          > a {
            color: #4b8fcc;
            text-decoration: underline;
            font-size: 14px;
          }
          > button {
            padding: 8px 50px;
            border-radius: 20px;
            color: #fff;
            background-color: #f7941c;
            border: none;
            margin-top: 40px;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
          }
        }
      }
    }
    // 公共样式
    img:hover,button:hover{
      box-shadow: 0 0 6px 1px #888;
      transform: scale(1.01);
    }
  }
}
</style>