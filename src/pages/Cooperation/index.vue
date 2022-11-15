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
              <li v-for="catlist in tableData" :key="catlist.cid">
                <div>
                  <img :src="`${BASE_URL}/cooperation/${catlist.pic}`" alt="" />
                  <div :style="`background-color: ${catlist.bgcolor};`">
                    <h5>{{ catlist.cname }}</h5>
                    <ul>
                      <!--  <li>
                        <a href=""><span>|</span>青年旅社组织</a>
                      </li> -->
                      <li>
                        <a href=""><span>|</span>青年旅社组织</a>
                      </li>
                      <li>
                        <a href=""><span>|</span>青年旅社组织</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <HostelCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqCooperation } from '../../api'
import { BASE_URL } from '../../utils/constants'
export default {
  data() {
    return {
      tableData: [],
      detaillist: [],
      BASE_URL,
    }
  },
  // 将要挂载时
  mounted() {
    this.getCooperation()
  },
  methods: {
    // 获取加盟分类
    getCooperation() {
      reqCooperation().then(value => {
        console.log(value)
        const result = value.data
        if (result.status === 200) {
          this.tableData = result.data
        }
      }),
        reqDetaillist(cat_id).then(res => {
          console.log(res)
          if (result.status === 200) {
            this.detaillist = result.data
          }
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
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            &:hover {
              > div {
                bottom: 0;
              }
            }
            > img {
              width: 395px;
              display: block;
            }
            > div {
              position: absolute;
              bottom: -85px;
              transition: 0.3s;
              width: 100%;
              // background-color: rgba(130, 185, 35, 0.9);
              padding: 10px;
              > h5 {
                color: white;
                font-size: 20px;
                font-weight: bold;
                padding: 10px 10px;
              }
              > ul {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                > li {
                  padding: 10px;
                  > a {
                    display: block;
                    color: white;
                    width: 160px;
                  }
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
