<template>
  <div class="order—main">
    <el-result icon="info" title="未登录" subTitle="请登录后再来查看吧" v-if="loginStatus">
      <template slot="extra">
        <el-button type="primary" size="medium" @click="$router.back()">返回</el-button>
      </template>
    </el-result>
    <div v-else>
      <p class="order-title">您的旅舍订单：</p>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            label="日期"
            width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="订单号"
            width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.order }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="旅舍"
            width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.room }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="支付金额"
            width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.paymoney }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="支付状态"
            width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.pay === '0' ? '未支付' : '已支付' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                type="danger"
                @click="getOrder(scope.row.order)">删除</el-button>
            <el-button
                size="mini"
                type="primary"
                v-if="scope.row.pay === '0'"
                @click="goPay(scope.row)">支付</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <span>确定删除该订单吗?</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteOrder">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {reqDeleteOrder, reqPay, reqUserOrder} from "../../api";


export default {
  name: "HostelOrder",
  data() {
    return {
      loginStatus: true,
      user: {},
      tableData: [],
      dialogVisible: false,
      order: ''
    };
  },

  mounted() {
    const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'))
    this.user = user
    if (user) {
      this.loginStatus = false
      this.getUserOrder()
    }
  },
  methods: {
    getUserOrder(){
      reqUserOrder(this.user[0].phone).then(value => {
        const result = value.data
        if (result.status === 200) {
          this.tableData = result.data
        }
      })
    },
    getOrder (order) {
      this.dialogVisible = true
      this.order = order
    },
    deleteOrder () {
      reqDeleteOrder(this.order).then(value => {
        const result = value.data
        if (result.status === 200) {
          this.$message({
            message: '删除成功',
            type: 'success',
            showClose: true,
          })
          this.dialogVisible = false
          this.getUserOrder()
        }
      })
    },
    goPay(value) {
      const orderPay = {
        orderId: value.order, // 订单号
        hostelName: value.room, // 旅舍名
        money: value.paymoney, // 需要支付的钱
        url: 'http://paidab.love:6600/orderInfo' // 支付信息页面
      }
      // 打开支付页面
      reqPay(orderPay).then(value => {
        const result = value.data
        if (result.status === 200) {
          location.href = result.url
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
  .order—main {
    width: 1080px;
    min-height: 50vh;
    margin: 20px auto;
    .order-title {
      color: #606266;
      font-size: 16px;
      line-height: 26px;
    }
  }
</style>
