<template>
  <div class="chose-total">
    <el-card class="box-card" style="width: 330px">
      <p>你选择的旅舍</p>
      <p class="day">{{hostelName}}(共{{choseDay}}天)</p>
      <el-table
          id="table"
          :data="newData"
          border
          fixed
          show-summary
          :summary-method="getSummaries"
          empty-text="请选择房型"
          style="width: 100%;">
        <el-table-column
            label="房型"
            width="100px"
           >
          <template slot-scope="scope">
            <div class="houseType">
              <p>{{scope.row.houseType}}</p>
              <span class="price-type" :style="{backgroundColor: scope.row.housePrice ? '#A4A4A4' : '#F4871c'}">{{scope.row.housePrice ? '非会员价' : '会员价'}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
            label="数量"
            width="55px"
            >
          <template slot-scope="scope">
            <div class="houseType">
              <p>{{scope.row.choseamount}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
            label="单价X天"
            width="77px"
        >
          <template slot-scope="scope">
            <div class="houseType">
              <p>{{scope.row.housePrice ? scope.row.housePrice : scope.row.houseVipPrice}} × {{scope.row.choseDay}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
            label="小计"
            width="55px"
        >
          <template slot-scope="scope">
            <div class="houseType">
              <p>{{scope.row.housePrice ? scope.row.housePrice : scope.row.houseVipPrice * scope.row.choseDay * scope.row.choseamount}}</p>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="total">
        <p>合计: <span class="total-number">{{total}}元</span></p>
        <p>你现在需要支付: <span>{{payment}}元</span></p>
        <p>到店支付余额: <span>{{arrivalPrice}}元</span></p>
        <button
            class="payment"
            v-show="choseHostelTypeData.length"
            @click="getPay"
        >支付</button>
      </div>
    </el-card>
  </div>
</template>

<script>
import {reqAddOrder, reqPay} from "../../../../../api";
import { customAlphabet } from 'nanoid'

export default {
  name: "ChoiceTotal",
  props: ['hostelName', 'choseDay'],
  data() {
    return {
      // 选择房间类型的数据
      choseHostelTypeData: [],
      // 总计的价格
      total: 0
    }
  },
  mounted() {
    const data = []
    this.$bus.$on('getChoseHostelTypeData', value => {
      data.unshift(value)
      this.choseHostelTypeData = data
    })
  },
  computed: {
    // 删除重复的数据
    newData() {
      return this.choseHostelTypeData.reduce((acc, curr) => acc.find((v) => v.id === curr.id) ? acc : [...acc, curr]
          , []).reverse()
    },
    // 现在需要支付的钱
    payment() {
      return this.total / 10
    },
    // 到店需要支付的钱
    arrivalPrice(){
      return this.total - this.payment
    }
  },
  methods: {
    // 获取每行的信息
    getSummaries(param) {
      const sums = []
      let total = 0
      const {data} = param
      data.forEach(item => {
        if (item.housePrice) {
          total += item.choseDay * item.choseamount * item.housePrice
        }else {
          total += item.choseDay * item.choseamount * item.houseVipPrice
        }
      })
      this.total = total
      return sums
    },
    // 获取订单支付页面
    getPay() {
      const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'))
      if (user) {
        const nanoid = customAlphabet('1234567890', 16)
        const orderId = nanoid()
        const orderPay = {
          orderId, // 随机生成的订单号
          hostelName: this.hostelName, // 旅舍名
          money: this.payment, // 需要支付的钱
          url: 'http://paidab.love:6600/orderInfo' // 支付信息页面
        }
        const order = {
          user_email: user[0].email,
          user_phone: user[0].phone,
          time: new Date().toLocaleDateString(),
          pay: 0,
          room: this.hostelName,
          order: orderId,
          paymoney: this.payment
        }
        reqAddOrder(order).then(value => {
          const result = value.data
          if (result.status === 200) {
            // 打开支付页面
            reqPay(orderPay).then(value => {
              const result = value.data
              if (result.status === 200) {
                location.href = result.url
              }
            })
          }
        })
      } else {
        this.$message({
          message: '请登录',
          type: 'warning'
        });
      }
    }
  }
}
</script>

<style lang="less">
  .chose-total {
    width: 320px;
    padding: 10px;
    margin-top: 10px;
    p {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .box-card{
      .day {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
    .price-type {
      display: inline-block;
      font-size: 12px;
      color: #fff;
      padding: 0 5px;
      font-weight: normal;
    }
    .total {
      text-align: right;
      margin-top: 10px;
      .total-number {
        font-size: 30px;
        font-weight: bold;
        color: #f7941c;
      }
      .payment {
        width: 80px;
        height: 40px;
        background-color: #f7941c;
        border: 1px solid #F7941C;
        border-radius: 5px;
        color: #fff;
        font-size: 18px;
      }
    }
  }
</style>