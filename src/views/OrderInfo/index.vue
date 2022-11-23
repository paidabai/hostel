<template>
  <div>
    <el-result icon="success" title="订单支付成功" subTitle="即将跳转旅舍页面">
      <template slot="extra">
      </template>
    </el-result>
  </div>
</template>

<script>
import {reqOrderStatus} from "../../api";

export default {
  name: "OrderInfo",
  mounted() {
    const out_trade_no = this.$route.query.out_trade_no
    reqOrderStatus(out_trade_no).then(value => {
      console.log(value.data)
    })
  }
}
</script>

<style scoped>

</style>