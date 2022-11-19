<template>
  <div style="background-color: #f5f5f5">
    <div class="bgImg">
      <img src="../../assets/img/exhibition-banner.jpg" alt="" />
    </div>
    <div class="main">
      <div class="table">
        <!-- {{ item.detail }} -->
        <div v-for="item in container" :key="item.lid">
          <h2>{{ item.title }}</h2>
          <div v-html="item.detail"></div>
          </div>
      </div>
      <div>
        <div class="skip">
          <el-row :gutter="12" style="display: flex; flex-direction: column">
            <div v-for="item in one" :key="item.cid" :span="8" class="aaa">
              {{ item.cname }}
            </div>
          </el-row>
          <el-row
            v-for="(item, index) in classify"
            :key="item.id"
            :gutter="12"
            style="display: flex; flex-direction: column"
          >
            <div :span="8" class="bbb">
              <el-link
                @click="onChange(item.lid), fn(index)"
                :class="{ bg: index == isactive }"
                :underline="false"
                >{{ item.title }}</el-link
              >
            </div>
            <!-- <el-col :span="8">
              <router-link to="to" class="bbb"> 青年旅舍组织 </router-link>
            </el-col> -->
          </el-row>
        </div>
        <HostelCard class="card" />
      </div>
    </div>
  </div>
</template>

<script>
import { getcoplist } from '../../api'
import { listclass } from '../../api'
import { reqoneCooperation } from '../../api'

import { BASE_URL } from '../../utils/constants'
export default {
  data() {
    return {
      container: [],
      isactive: 0,
      classify: [],
      change: [],
      one: [],
    }
  },
  mounted() {
    this.getlist()
    this.getlistclass()
    this.getming()
  },
  methods: {
    // 获取分类
    getming() {
      let params = this.$route.params.cat_id
      reqoneCooperation(params).then(res => {
        console.log('拿分类名称', res)
        this.one = res.data.data
      })
    },
    // id查询
    getlist() {
      let params = this.$route.params.id
      console.log(params)
      getcoplist(params).then(res => {
        console.log(res)
        this.container = res.data.data
      })
    },
    // cat_id查询
    getlistclass() {
      let aa = this.$route.params.cat_id
      console.log(aa)
      listclass(aa).then(res => {
        console.log(res)
        this.classify = res.data.data
      })
    },
    // 点击覆盖内容
    onChange(params) {
      getcoplist(params).then(res => {
        console.log('拿到没', res)
        this.container = res.data.data
      })
    },
    fn(index) {
      this.isactive = index
    },
  },
}
</script>

<style lang="less" scoped>
.main {
  width: 1080px;
  margin: 0 auto;
  position: relative;
  top: -70px;
  display: flex;
  justify-content: space-between;

  .table {
    width: 810px;
    padding: 25px 50px 25px 50px;
    background-color: #fff;

    div {
      h2 {
        font-size: 30px;
        margin-bottom: 100px;
      }

      > div {
        font-size: 16px;
        margin-bottom: 14px;
        line-height: 26px;
      }
    }
  }
  .skip {
    position: relative;
    left: 8px;
    .aaa {
      background-color: rgba(144, 198, 44, 0.8);
      width: 240px;
      height: 80px;
      line-height: 80px;
      display: block;
      color: white;
      font-weight: bold;
      font-size: 16px;
      padding-left: 20px;
    }
    .bbb {
      background-color: white;
      width: 240px;
      height: 80px;
      line-height: 80px;
      color: #333;
      font-size: 16px;
      a {
        display: block;
        padding-left: 20px;
        &:hover {
          color: #fff;
          background-color: rgba(144, 198, 44, 0.8);
        }
      }
      .bg {
        display: block;
        width: 100%;
        font-weight: bold;
        color: #fff;
        background-color: rgba(144, 198, 44, 0.8);
      }
    }
  }
  .card {
    margin-top: 70px;
  }
  .gg {
    background-color: rgba(144, 198, 44, 0.8);
  }
}
</style>
