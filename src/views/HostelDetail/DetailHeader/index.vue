<template>
  <div class="detail-header">
    <div class="house-book">
      <h2>北京炮局工厂青年旅舍</h2>
      <div class="price">
        <div class="house-price">
          <p>房间</p>
          <h3>
            <strong>278</strong>
            元起
          </h3>
        </div>
        <div class="bed-price">
          <p>床位</p>
          <h3>
            <strong>75</strong>
            元起
          </h3>
        </div>
        <el-button class="btn-book" round>主要按钮</el-button>
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
      <el-carousel :interval="5000" arrow="always" height="450px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return{
      imgList: [
        'http://111.230.248.218:1500/fileUpload/104799/16008457382791600845738279_0.jpg',
      ],
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
    background-color: #f7941c;
    color: #fff;
    font-size: 16px;
    width: 290px;
    height: 50px;
    margin-top: 35px;
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