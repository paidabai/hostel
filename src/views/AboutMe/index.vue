<template>
  <div class="main">
    <div class="toptitle">
      <h4>关于YHA®青年旅舍®</h4>
      <p>
        国际青年旅舍®不是经济型酒店，我们提倡：文化交流，社会责任，实践环保，爱护大自然，简朴而高素质生活，自助及助人。
      </p>
    </div>
    <div class="content">
      <div class="module">
        <ul>
          <li class="firstcard">
            <div>
              <img
                :src="`${BASE_URL}/cooperation/exhibition-l-iten4.jpg`"
                alt=""
              />
              <div style="background-color: rgba(144, 198, 44, 0.8)">
                <h5>YHA®青年旅舍®简介</h5>
                <div>
                  <router-link
                    v-for="item in firstList"
                    :key="item.lid"
                    :to="{
                      path: '/details/' + item.lid + '/' + item.cat_id,
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
                <h5>YHA®在中国</h5>
                <div>
                  <router-link
                    v-for="item in twoList"
                    :key="item.lid"
                    :to="{
                      path: '/details/' + item.lid + '/' + item.cat_id,
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
                <h5>YHA®在海外</h5>
                <div>
                  <router-link
                    v-for="item in threeList"
                    :key="item.lid"
                    :to="{
                      path: '/details/' + item.lid + '/' + item.cat_id,
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
</template>

<script>
import { reqAboutme } from "../../api";

import { BASE_URL } from "../../utils/constants";
export default {
  data() {
    return {
      tableList: [],
      firstList: [],
      twoList: [],
      threeList: [],

      yyyy: [],
      BASE_URL,
    };
  },
  // 将要挂载时
  mounted() {
    this.get();
  },
  methods: {
    get() {
      reqAboutme().then((res) => {
        console.log(res);
        this.tableList = res.data.data;
        this.firstList = this.tableList.filter((v) => {
          return v.cat_id == 10;
        });
        this.twoList = this.tableList.filter((v) => {
          return v.cat_id == 20;
        });
        this.threeList = this.tableList.filter((v) => {
          return v.cat_id == 30;
        });
        console.log(this.firstList);
      });
    },
  },
};
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
        > .firstcard {
          width: 810px;
          height: 400px;
          margin-bottom: 20px;
          > div {
            > img {
              width: 810px;
              display: block;
            }
          }
        }
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
