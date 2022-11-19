<template>
  <div class="Hotel-Franchise">
    <div class="aaaa">
      <div class="bgImg">
        <img src="../../assets/img/cooperation/exhibition-banner3.jpg" alt="" />
      </div>
      <!-- 主体内容 -->

      <div class="main">
        <div class="title">
          <h4>旅社加盟</h4>
          <p>
            加盟YHA®青年旅舍®，成为YHA®的一员，帮助年轻人实现”读万卷书，行万里路”的梦想。
          </p>
        </div>
        <div class="content">
          <div class="module">
            <ul>
              <li>
                <div>
                  <img
                    :src="`${BASE_URL}/cooperation/exhibition-l-iten4.jpg`"
                    alt=""
                  />
                  <div style="background-color: rgba(144, 198, 44, 0.8)">
                    <h5>加盟优势</h5>
                    <div>
                      <router-link
                        v-for="item in firstList"
                        :key="item.lid"
                        :to="{
                          path: '/detail/' + item.lid + '/' + item.cat_id,
                        }"
                      >
                        <span>|</span>{{ item.title }}
                      </router-link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <img
                    :src="`${BASE_URL}/cooperation/exhibition-l-iten5.jpg`"
                    alt=""
                  />
                  <div style="background-color: rgba(246, 152, 38, 0.8)">
                    <h5>加盟方法</h5>
                    <div>
                      <router-link
                        v-for="item in twoList"
                        :key="item.lid"
                        :to="{
                          path: '/detail/' + item.lid + '/' + item.cat_id,
                        }"
                      >
                        <span>|</span>{{ item.title }}
                      </router-link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <img
                    :src="`${BASE_URL}/cooperation/exhibition-l-iten6.jpg`"
                    alt=""
                  />
                  <div style="background-color: rgba(81, 141, 189, 0.8)">
                    <h5>品牌和资质</h5>
                    <div>
                      <router-link
                        v-for="item in threeList"
                        :key="item.lid"
                        :to="{
                          path: '/detail/' + item.lid + '/' + item.cat_id,
                        }"
                      >
                        <span>|</span>{{ item.title }}
                      </router-link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <img
                    :src="`${BASE_URL}/cooperation/exhibition-l-iten7.jpg`"
                    alt=""
                  />
                  <div style="background-color: rgba(205, 58, 75, 0.8)">
                    <h5>青旅资料库</h5>
                    <div>
                      <router-link
                        v-for="item in foreList"
                        :key="item.lid"
                        :to="{
                          path: '/detail/' + item.lid + '/' + item.cat_id,
                        }"
                      >
                        <span>|</span>{{ item.title }}
                      </router-link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <HostelCard />
        </div>
      </div>
    </div>

    <!-- <button @click="get()">加载详情</button> -->
  </div>
</template>

<script>
import { reqCooperationlists } from '../../api'

import { BASE_URL } from '../../utils/constants'
export default {
  data() {
    return {
      tableList: [],
      firstList: [],
      twoList: [],
      threeList: [],
      foreList: [],

      yyyy: [],
      BASE_URL,
    }
  },
  // 将要挂载时
  mounted() {
    this.get()
  },
  methods: {
    get() {
      reqCooperationlists().then(res => {
        console.log(res)
        this.tableList = res.data.data
        this.firstList = this.tableList.filter(v => {
          return v.cat_id == 10
        })
        this.twoList = this.tableList.filter(v => {
          return v.cat_id == 20
        })
        this.threeList = this.tableList.filter(v => {
          return v.cat_id == 30
        })
        this.foreList = this.tableList.filter(v => {
          return v.cat_id == 40
        })
        console.log(this.firstList)
      })
    },
  },
}
</script>

<style lang="less" scoped>
.bgImg {
  width: 100%;
  margin: 0 auto;
  > img {
    display: block;
    width: 100%;
  }
}
.main {
  width: 1080px;
  margin: 0 auto;
  position: relative;
  top: -60px;

  > .title {
    width: 100%;
    margin-bottom: 60px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 15px 35px -15px rgb(47 130 36 / 70%);
    padding: 40px;
    > h4 {
      margin-bottom: 10px;
      font-size: 30px;
    }
    > p {
      font-size: 14px;
    }
  }
  > .content {
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;
    > .module {
      > ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-right: 20px;
        > li {
          width: 395px;
          height: 400px;
          margin-bottom: 20px;
          > div {
            width: 100%;
            height: 400px;
            overflow: hidden;
            border-radius: 8px;
            position: relative;
            &:hover {
              > div {
                top: 50%;
                bottom: 0px;
              }
            }
            > img {
              width: 395px;
              display: block;
            }
            > div {
              position: absolute;
              top: 345px;
              transition: 0.3s;
              width: 100%;
              // background-color: rgba(130, 185, 35, 0.9);
              // padding: 10px;
              > h5 {
                height: 60px;
                color: white;
                font-size: 20px;
                font-weight: bold;
                padding: 10px 10px;
                // position: absolute;
                // top: 0;
                width: 100%;
              }
              > div {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                color: white;

                > a {
                  display: block;
                  padding: 10px;
                  color: white;
                  width: 160px;
                  // > a {
                  //   color: white;
                  //   width: 160px;
                  // }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
