<template>
  <div>
    <el-result icon="success" title="订单支付成功" subTitle="即将跳转订单页面" v-if="show">
      <template slot="extra">
      </template>
    </el-result>
  </div>
</template>

<script>
import {reqOrderStatus, reqUpdataOrder} from "../../api";

export default {
  name: "OrderInfo",
  data() {
    return {
      show: false
    }
  },
  mounted() {
    const out_trade_no = this.$route.query.out_trade_no
    reqOrderStatus(out_trade_no).then(value => {
      if (value.data.code === 200){
        reqUpdataOrder(out_trade_no).then(value => {
          const result = value.data
          if (result.status === 200){
            this.show = true
          }
        })
      }
    })
  },
  watch: {
    show() {
      setTimeout(() => {
        this.$router.push('/member')
      },2500)
    }
  }
}
</script>

<style scoped>

</style>