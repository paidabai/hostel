<template>
  <div class="house-type">
    <h3 class="title">房型及价格</h3>
    <div class="chose-date">
      <el-date-picker
          @change="countHousePrice"
          style="width: 900px;"
          v-model="valueDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
          value-format="timestamp"
          :picker-options="pickerOptions">
      </el-date-picker>
      <span class="tips">(最多可预定30天)</span>
    </div>
    <div class="table-bottom">
      <el-table
          :data="tableData"
          :span-method="objectSpanMethod"
          border
          style="width: 710px; margin-top: 20px">
        <el-table-column
            label="房型"
            width="270">
          <template slot-scope="scope">
            <div class="houseType">
              <img class="houseImg" :src="`${BASE_URL}/hostelImg/${scope.row.houseImg}`" alt="">
              <p>{{scope.row.houseType}} <span>{{scope.row.housebed ? '-床位' : '-独立房间'}}</span></p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
            label="最多人数"
            width="70">
          <template slot-scope="scope">
            <img :src="scope.row.peoles === '1' ? require('../../../../assets/img/1D.gif') : require('../../../../assets/img/1D.gif')" alt="">
          </template>>
        </el-table-column>
        <el-table-column
            :label="choseDay + '天的房价 （元）'"
            width="150">
          <template slot-scope="scope">
            <div class="house-price">
              <span class="price">共{{scope.row.housePrice ? scope.row.housePrice * choseDay : scope.row.houseVipPrice * choseDay}}元</span>
              <span class="price-type">{{scope.row.housePrice ? '非会员价' : '会员价'}}</span>
              <p class="tips-title">部分预付 | 不可退款 | 2022会员</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
            label="数量预订"
            width="210">
          <template slot-scope="scope">
          <el-select
              v-model="scope.row.choseamount"
              placeholder="请选择"
              :change="choseHostel(scope.row)"
          >
            <el-option v-for="item in scope.row.houseQuantity"
                       :key="item"
                       :label="item"
                       :value="item">
            </el-option>
          </el-select>
          </template>
        </el-table-column>
      </el-table>
      <ChoiceTotal
          :hostelName = "hostelName"
          :choseDay = "choseDay"
      />
    </div>
    <BookInfo />
  </div>
</template>

<script>
import getDistanceDays from '../../../../utils/calculationDate.js'
import {BASE_URL} from "../../../../utils/constants.js";
import ChoiceTotal from "./ChoiceTotal/index.vue";
import BookInfo from "./BookInfo/index.vue";

export default {
  name: "ChoiceHouse",
  props: ['hostelName'],
  components: {
    ChoiceTotal,
    BookInfo
  },
  mounted() {
    this.$bus.$on('getHostelType', value => {
      this.tableData = value
    })
  },
  data() {
    return {
      BASE_URL,
      // 日期组件，选择的日期
      valueDate: '1',
      // 计算后的天数
      choseDay: 1,
      // 表格数据
      tableData: [],
      // 限制日期组件的选择范围
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() + 2592000000 + 86400000 || time.getTime() < Date.now() - 8.64e7;
        }
      },
    }
  },
  methods: {
    // 计算选择的时间
    countHousePrice(){
      const day = getDistanceDays(this.valueDate[0],this.valueDate[1])
      this.choseDay = day-1
    },
    // 合并列
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    choseHostel(value) {
      if (value.choseamount) {
        const item = {id: value.h_id, houseType: value.houseType, choseamount: value.choseamount, housePrice: value.housePrice, houseVipPrice: value.houseVipPrice, choseDay: this.choseDay}
        this.$bus.$emit('getChoseHostelTypeData', item)
      }
    }
  },
}
</script>

<style lang="less" scoped>
  .house-type {
    padding: 25px 20px;
    .title {
      font-size: 18px;
      color: #333;
      font-weight: bold;
      border-bottom: 1px solid #e2e2e2;
      padding: 25px 0 5px;
      margin-bottom: 20px;
    }
    .chose-date {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tips {
        display: block;
        color: #8492a6;
        font-size: 14px;
      }
    }
    .table-bottom {
      display: flex;
      .houseType {
        display: flex;
        .houseImg {
          width: 120px;
          height: 90px;
          border-radius: 4px;
        }
        p {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          font-size: 16px;
          span {
            font-size: 14px;
          }
        }
      }
      .house-price {
        .price {
          color: #f4971c;
          font-size: 14px;
          border-bottom: 1px dashed;
        }
        .price-type {
          margin-left: 6px;
          display: inline-block;
          font-size: 12px;
          color: #fff;
          padding: 0 5px;
          font-weight: normal;
          background-color: #f4971c;
        }
        .tips-title {
          margin-top: 10px;
          font-size: 12px;
          font-weight: normal;
          color: #999;
        }
      }
    }
  }
</style>