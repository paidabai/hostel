<template>
  <div>
    <div class="switch-navbar">
      <ul>
        <li>
          <a href="">有效会员卡（0）</a>
        </li>
        <li>
          <a href="">历史会员卡（0）</a>
        </li>
      </ul>
      <div class="vip-card-management">
        <a href="">
          <img
            src="../../../assets/img/personalcenter/no-vip-card.jpg"
            alt=""
          />
        </a>
        <div class="vip-card-privilege">
          <h4>会员特权介绍</h4>
          <div>
            <b>会员出门旅行优惠多，福利多。</b>
            <p>
              除在入住青年旅舍®享受房价上的优惠外，HI会员还可在世界各地享有食、住、行、游、购、娱等逾3,000项优惠，如：在全球多个国际机场和车船站，凭HI会员卡兑换外币可免收手续费；观光、租车、购物、参团、购买车船票等均可能有折扣，折扣率高达50%。单是在澳大利亚，优惠项目便接近800种。
            </p>
          </div>
          <div>
            <b>评价奖励</b>
            <p>
              使用评价功能，我们将在您评价成功后，给予相应的积分回馈（用户只能评价该用户名下购买过的商品）。
            </p>
          </div>
          <div>
            <b>会员特价</b>
            <p>会员可在指定页面，享有优惠价商品。 查看会员特价商品。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.switch-navbar {
  ul {
    width: 907px;
    border-bottom: #e1e1e1 1px solid;
    display: flex;
    li:nth-child(1) {
      a {
        color: #f7941c;
      }
      border-bottom: #f7941c 3px solid;
    }
    li {
      // width: 72px;
      margin-right: 30px;
      a {
        display: block;
        // width: 72px;
        height: 36px;
        line-height: 36px;
        // color: #f7941c;
      }
      // border-bottom: #f7941c 3px solid;
    }
  }
}
.vip-card-management {
  padding-top: 15px;
  .vip-card-privilege{
      border:  1px solid #e1e1e1;
      margin-top: 30px;
      h4{
        background-color: #f5f5f5;
        height: 55px;
        line-height: 55px;
        padding-left: 20px;
        font-weight: bold;
      }
      div{
      padding: 15px;
        b{
          height: 24px;
          line-height: 24px;
          color: #f7941c;
          margin: 20px 0 10px;
        }
        p{

        }
      }
  }
}
</style>
