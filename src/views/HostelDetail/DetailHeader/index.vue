<template>
  <div class="detail-header">
    <div class="house-book">
      <h2>{{hostelName}}</h2>
      <div class="price">
        <div class="house-price">
          <p>房间</p>
          <h3 v-show="hostelDetailData.length">
            <strong>{{hostelDetailData[0]?.room}}</strong>
            元起
          </h3>
          <h3 class="noHouse" v-show="!hostelDetailData.length">
            暂无
          </h3>
        </div>
        <div class="bed-price">
          <p>床位</p>
          <h3 v-show="hostelDetailData.length">
            <strong>{{hostelDetailData[0]?.bed}}</strong>
            元起
          </h3>
          <h3 class="noHouse" v-show="!hostelDetailData.length">
            暂无
          </h3>
        </div>
        <el-button
            class="btn-book"
            round
            @click="goBook"
            v-scroll-to="{
             el: '#move',
             duration: 500, //滚动时间
             }">立即预定</el-button>
        <div class="share">
          <span>分享到:</span>
          <div class="share-icon">
            <a
                href="#"
                v-for="item in shareList"
                :title="item.title"
                :key="item.id"
                :class="item.className"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="house-img">
      <DetailImg />
    </div>
  </div>
</template>

<script>
import DetailImg from "../DetailImg/index.vue";
import {mapState} from "vuex";

export default {
  name: "DetailHeader",
  props: ['hostelName'],
  components: {
    DetailImg
  },
  computed: {
    ...mapState('hostelDetailOptions', ['hostelDetailData'])
  },
  data() {
    return{
      // 分享图标的数据
      shareList: [
        {
          id: 1, title: '更多', className: 'more'
        },
        {
          id: 2, title: '分享到微信', className: 'bg_WeChat'
        },
        {
          id: 3, title: '分享到qq', className: 'bg_qq'
        },
        {
          id: 4, title: '分享到qq空间', className: 'bg_qqSpace'
        },
        {
          id: 5, title: '分享到微博', className: 'bg_weibo'
        },
        {
          id: 6, title: '分享到腾讯微博', className: 'bg_TWeibo'
        },
      ]
    }
  },
  methods: {
    goBook(){
      this.$bus.$emit('goBack')
    }
  }
}
</script>

<style lang="less" scoped>
  .detail-header {
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    top: 20px;
    display: flex;
    .house-book {
      width: 360px;
      padding: 20px;
      h2 {
        font-size: 30px;
        color: #333;
        text-align: center;
      }
      .price {
        display: flex;
        flex-wrap: wrap;
        margin-top: 35px;
        p {
          font-size: 20px;
          color: #333;
        }
        h3 {
          color: #f7941c;
        }
        strong {
          font-size: 40px;
          font-weight: bold;
        }
        .house-price {
          width: 50%;
          border-right: 1px solid #e8e8e8;
        }
        .noHouse {
          font-size: 20px;
          color: #f7941c;
          text-align: center;
        }
        .bed-price {
          width: 45%;
          p {
            text-align: center;
          }
          h3 {
            text-align: right;
          }
        }
      }
    }
  }
  .btn-book {
    background-color: #f7941c !important;
    color: #fff !important;
    font-size: 16px;
    width: 290px;
    height: 50px;
    margin-top: 35px;
    &:hover {
      background-color: #f7941c;
      color: #fff;
    }
  }
  .share {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 60px;
    border-top: 1px solid #eee;
    padding-top: 30px;
    width: 100%;
    .share-icon {
      margin-left: 6px;
      a {
        font-size: 18px;
        padding-left: 25px;
        line-height: 24px;
        height: 24px;
        background-image: url("../../../assets/sprite/icons_1_24.png");
        background-repeat: no-repeat;
        cursor: pointer;
        margin: 6px 6px 6px 0;
      }
      .bg_WeChat {
        background-position: 0 -1612px;
      }
      .bg_qq {
        background-position: 0 -2652px;
      }
      .bg_qqSpace {
        background-position: 0 -52px
      }
      .bg_weibo {
        background-position: 0 -104px;
      }
      .bg_TWeibo {
        background-position: 0 -260px;
      }
    }
  }
  .house-img {
    width: (1080px - 360px);
    height: 450px;
  }
</style>