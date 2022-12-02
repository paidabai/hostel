<template>
  <div>
    <ul class="banner">
      <li :class="{ active: showItem == 0 }"></li>
      <li :class="{ active: showItem == 1 }"></li>
      <li :class="{ active: showItem == 2 }"></li>
      <ol>
        <li :class="{ active: showItem == 0 }" @click="showItem = 0"></li>
        <li :class="{ active: showItem == 1 }" @click="showItem = 1"></li>
        <li :class="{ active: showItem == 2 }" @click="showItem = 2"></li>
      </ol>
      <div class="search">
        <input type="text" placeholder="您想去哪里" />
        <input type="text" placeholder="入住时期" />
        <input type="text" placeholder="退房时期" />
        <a>搜索</a>
        <div>
          <a class="icon"></a>
          <a class="arrow"></a>
        </div>
      </div>
    </ul>
    <div class="poster">
      <div>
        <a>
          <img src="/index/poster.jpg" alt="" />
        </a>
      </div>
    </div>
    <!-- 地图 -->
    <div class="index_map"></div>
    <!-- 最新活动 -->
    <div class="new_act">
      <div class="index_title">
        <h2>最新活动</h2>
        <p>精心策划的青旅活动，期待你的参与</p>
      </div>
      <div class="swiper_box">
        <a
          @click="moveLeft == 0 ? (moveLeft = 3) : moveLeft--"
          class="left"
        ></a>
        <a
          @click="moveLeft == 3 ? (moveLeft = 0) : moveLeft++"
          class="right"
        ></a>
        <div>
          <ul :style="`margin-left:-${moveLeft}00%`" class="act_list">
            <!-- part1 -->
            <li>
              <img src="/index/actlist01.jpg" alt="" />
              <div>
                <h3>
                  大手牵小手，化身丛林探险家，一起探秘奇特的喀斯特地貌 |
                  YHA桂林暑期夏令营
                </h3>
                <span></span>
                <p>
                  这个夏天，和孩子一起来桂林探险，陪孩子一起成长，伴他成为一个有责任、有担当的勇气少年！
                </p>
              </div>
            </li>
            <li>
              <img src="/index/actlist02.jpg" alt="" />
              <div>
                <h3>为什么要去荒野？ | 青少年自我探索之旅</h3>
                <span></span>
                <p>
                  行走山野对现在的孩子来说并非易事，
                  在行走的过程不仅可以磨练意志力，
                  还需要学习与伙伴更好的沟通、合作，
                  在团体活动中提升自我价值感；
                  行程中包含了青春期孩子关注的话题， 我们将通过团体活动
                  和青少年一起探索同伴关系， 与家人的关系、 与自己的关系，
                  以及对未来的规划。
                </p>
              </div>
            </li>
            <li>
              <img src="/index/actlist03.jpg" alt="" />
              <div>
                <h3>告别</h3>
                <span></span>
                <p>
                  我们在云南昆明连心国际青年旅舍 与伙伴一起生活整理房间、
                  清洗碗筷 节约食物、水电 每日践行环保 我们在奇妙的自然中
                  与伙伴一起探索打开身体、 发现自然安静独处、 自由玩耍 这个暑假
                  我们爱自然、爱伙伴、爱自己
                </p>
              </div>
            </li>
            <li>
              <img src="/index/actlist04.jpg" alt="" />
              <div>
                <h3>青年旅舍第一批免费电子卡—送给谁？</h3>
                <span></span>
                <p>领取来自青年旅舍的温暖和鼓励吧！</p>
              </div>
            </li>
            <!-- part2 -->
            <li>
              <img src="/index/actlist05.jpg" alt="" />
              <div>
                <h3>夏天的风轻轻吹着| 第44届世界青年营回顾</h3>
                <span></span>
                <p>
                  #Be friends, Best friends#不是一句简单的口号
                  是我们不同国度/地区青年间友谊的见证
                </p>
              </div>
            </li>
            <li>
              <img src="/index/actlist06.jpg" alt="" />
              <div>
                <h3>中德青年可持续发展交流营</h3>
                <span></span>
                <p></p>
              </div>
            </li>
            <li>
              <img src="/index/actlist07.jpg" alt="" />
              <div>
                <h3>2020.04.22世界地球日</h3>
                <span></span>
                <p>
                  #2020.04.22世界地球日#
                  守护绿水青山，保护自然资源，从保护身边的一草一木开始；爱护野生动物，与自然和谐相处，从拒绝野味开始……保护地球，我们能做些什么呢？
                </p>
              </div>
            </li>
            <li>
              <img src="/index/actlist08.jpg" alt="" />
              <div>
                <h3>2019香港昂步栈道慈善徒步活动开始报名啦</h3>
                <span></span>
                <p></p>
              </div>
            </li>
            <!-- part3 -->
            <li>
              <img src="/index/actlist09.jpg" alt="" />
              <div>
                <h3>2018年韩国“世界青年营”开始招募啦</h3>
                <span></span>
                <p></p>
              </div>
            </li>
            <li>
              <img src="/index/actlist10.jpg" alt="" />
              <div>
                <h3>2018大陆港台青年文化交流活动（香港站）</h3>
                <span></span>
                <p></p>
              </div>
            </li>
            <li>
              <img src="/index/actlist11.jpg" alt="" />
              <div>
                <h3>2019第44届韩国“世界青年营”交流活动</h3>
                <span></span>
                <p>
                  在这里，你将认识到来自德国、澳大利亚、马来西亚、韩国、埃及、中国台湾等国家和地区的小伙伴，跟他们迅速打成一片~
                </p>
              </div>
            </li>
            <li>
              <img src="/index/actlist12.jpg" alt="" />
              <div>
                <h3>世界地球日“以旧代金”主题活动</h3>
                <span></span>
                <p></p>
              </div>
            </li>
            <!-- part4 -->
            <li>
              <img src="/index/actlist13.jpg" alt="" />
              <div>
                <h3>2018年YHA青年旅舍赴德研学活动</h3>
                <span></span>
                <p></p>
              </div>
            </li>
            <li>
              <img src="/index/actlist14.jpg" alt="" />
              <div>
                <h3>2018昂步栈道全程回顾</h3>
                <span></span>
                <p></p>
              </div>
            </li>
            <li>
              <img src="/index/actlist15.jpg" alt="" />
              <div>
                <h3>青春不散场 | 2017第42届世界青年营回顾</h3>
                <span></span>
                <p></p>
              </div>
            </li>
            <li>
              <img src="/index/actlist16.jpg" alt="" />
              <div>
                <h3>
                  2017大陆港台青年交流活动(台湾站)——花莲原住民文化探索之旅
                </h3>
                <span></span>
                <p></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="allAct">
        <a>所有活动</a>
      </div>
      <div class="w_dynamic">
        <div class="box_1080">
          <div class="dynamic-l">
            <div>
              <h2>关注微信公众号</h2>
              <a>YHA<sup>®</sup>中国</a> <a>YHA<sup>®</sup>国际</a>
              <a>旅行那些事</a>
            </div>
            <div>
              <p>轻松实现手机<span>预订旅舍</span>、<span>办理会员卡</span></p>
              <p>更有旅行攻略与推介、青旅人物与故事...</p>
            </div>
          </div>
          <div class="dynamic-r">
            <img src="/index/tpnImg.jpg" alt="" />
            <p>YHA<sup>®</sup>青年旅舍<sup>®</sup>公众号</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 会员优惠 -->
    <div class="news">
      <div class="index_title">
        <h2>会员优惠</h2>
        <p>你手中的会员卡，全世界都能打折</p>
      </div>
      <div class="swiper_box">
        <a
          @click="moveright == 0 ? (moveright = 4) : moveright--"
          class="left"
        ></a>
        <a
          @click="moveright == 4 ? (moveright = 0) : moveright++"
          class="right"
        ></a>
        <div>
          <ul :style="`margin-left:-${moveright}00%`" class="act_list">
            <li>
              <img src="/index/placeList01.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList02.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList03.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList04.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList05.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList06.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList07.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList08.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList09.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList10.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList11.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList12.jpg" alt="" />
            </li>
            <li>
              <img src="/index/placeList13.jpg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="app-box box1">
      <div class="w1080">
        <div class="poster">
          <img src="/index/movie-poster.jpg" alt="" />
        </div>
        <div class="box">
          <h2>关于我们——YHA<sup>®</sup>青年旅舍<sup>®</sup></h2>
          <p class="we">
            我们提倡
            <i></i>
          </p>
          <p class="detail">
            文化交流、社会责任、实践环保、爱护大自然、<br />
            简朴而高素质生活、自助及助人。
          </p>
          <div class="app-qr">
            <a> 了解更多 </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 首页末尾 -->
    <div class="app-box box2">
      <div class="w1080">
        <div class="box">
          <h2>
            中国国际青年旅舍
            <font style="vertical-align: super; font-size: 50%"></font>
            手机版
          </h2>
          <p>
            无论您置身何处皆可搜索附近的旅舍，通过手机预订全国青年旅舍
            <font style="vertical-align: super; font-size: 50%"></font
            >，简单而又安全的预订过程将旅舍、订单细节储存在您的手机，给您独一无二的云体验
          </p>
          <div class="app-qr">
            <img src="/index/Android_2018.png" alt="安卓端下载" width="140" />
            <p>扫描二维码直接安装</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showItem: 2,
      moveLeft: 0,
      moveright: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.showItem < 2 ? this.showItem++ : (this.showItem = 0);
    }, 3000);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
// 轮播
.banner {
  min-width: 100%;

  height: 550px;
  position: relative;
  > .search {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 60px;
    position: absolute;
    bottom: 60px;
    left: 0;
    > div {
      width: 130px;
      height: 50px;
      position: relative;
      a {
        background: url("../../assets/sprite/app_z.png") no-repeat;
      }
      .arrow {
        width: 45px;
        height: 71px;
        background-position: -381px 0px;
        position: absolute;
        top: 45px;
        right: -55px;
      }
      .icon {
        width: 90px;
        height: 90px;
        position: absolute;
        top: -20px;
        left: 60px;
        background-position: -291px 0px;
      }
    }
    > input {
      height: 50px;
      width: 238px;
      margin-left: 1px;
      padding: 10px 20px;
    }
    > input:first-child {
      width: 300px;
      border-radius: 5px 0 0 5px;
    }
    > a {
      width: 200px;
      height: 50px;
      background: #87c524;
      margin-left: 1px;
      text-align: center;
      line-height: 50px;
      color: #fff;
      font-weight: bold;
      border-radius: 0 5px 5px 0;
    }
  }
  > ol {
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 20px;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    > .active {
      background: #87c524;
    }
    > li {
      width: 8px;
      height: 8px;
      background: #ccc;
      border-radius: 50%;
      margin: 8px;
      cursor: pointer;
    }
  }
  > .active {
    opacity: 1;
  }
  > li {
    width: 100%;
    height: 550px;
    position: absolute;
    top: 0;
    left: 0;
    background-position: center top;
    transition: all 0.3s ease;
    opacity: 0;
  }
  > li:first-child {
    background: url("/index/banner1.jpg") no-repeat;
  }
  > li:nth-child(2) {
    background: url("/index/banner2.jpg") no-repeat;
  }
  > li:nth-child(3) {
    background: url("/index/banner3.jpg") no-repeat;
  }
}
// 海报
.poster {
  width: 100%;
  padding-top: 25px;
  div {
    width: 1080px;
    margin: 0 auto;
  }
}

// 地图
.index_map {
  > .reserve {
    position: absolute;
    width: 422px;
    right: 60px;
    bottom: -150px;
    height: 138px;
    background: url(../images/book-aboard.png) no-repeat center;
    cursor: pointer;
  }
}

// 最新活动
.new_act {
  width: 100%;
  height: 1149px;
  background: url("/index/news-bg.jpg") no-repeat center;
  position: relative;
  &::before {
    display: table;
    content: "";
  }
  > .index_title {
    margin: 100px 0;
    > h2 {
      color: #fff;
    }
    > p {
      color: #fff;
    }
  }
  > .swiper_box {
    width: 1080px;
    margin: 0 auto;
    position: relative;
    > div {
      width: 100%;
      overflow: hidden;

      > .act_list {
        width: 4320px;
        display: flex;
        text-align: center;
        transition: all 0.3s ease;
        li:nth-child(2n) {
          margin-top: 80px;
        }
        > li {
          height: 455px;
          width: calc((1080px - 3px) / 4);
          margin-left: 1px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          &:hover {
            div {
              opacity: 1;
            }
          }
          > div {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            opacity: 0;
            h3 {
              color: #fff;
              font-weight: bold;
            }
            span {
              width: 90px;
              height: 3px;
              background: #fff;
              margin: 30px 0;
            }
            p {
              color: #fff;
              font-size: 14px;
            }
          }
          &:hover {
            > img {
              transform: scale(1.1);
              filter: blur(5px);
            }
          }
          > img {
            display: block;
            transition: all 0.2s ease;
          }
        }
      }
    }
    > a {
      width: 80px;
      height: 80px;
      position: absolute;
      top: calc(50% - 40px);
      background: url("../../assets/sprite/app_z.png") no-repeat;
      z-index: 9;
      &.left {
        left: -100px;
        background-position: -291px -90px;
      }
      &.right {
        right: -100px;
        background-position: 0 -230px;
      }
    }
  }
  > .allAct {
    width: 1080px;
    margin: 90px auto 0;
    display: flex;
    justify-content: center;
    > a {
      background: #fff;
      border-radius: 30px;
      width: 140px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
      color: #87c524;
      transition: all 0.2s ease;
      &:hover {
        background: #87c524;
        color: #fff;
      }
    }
  }
  > .w_dynamic {
    width: 1120px;
    height: 238px;
    position: absolute;
    bottom: -138px;
    left: calc(50% - 560px);
    background: url("/index/w_dynamic.png") no-repeat center top;
    &::before {
      display: table;
      content: "";
    }
    > .box_1080 {
      width: 1080px;
      height: 180px;
      margin: 0 auto;
      background: url("/index/wechat.png") no-repeat 70px center;
      display: flex;
      justify-content: space-between;
      &::before {
        display: table;
        content: "";
      }
      > .dynamic-l {
        margin: 35px 0 0 55px;
        display: flex;
        > div:first-child {
          > h2 {
            color: #333;
            font-family: "Microsoft YaHei", "tahoma", "arial",
              "Hiragino Sans GB", "宋体";
            font-size: 40px;
          }
          > a {
            display: inline-block;
            padding: 8px 20px;
            background: #87c524;
            text-align: center;
            color: #fff;
            border-radius: 20px;
            margin-right: 20px;
            z-index: 99;
            sup {
              font-size: 12px;
              color: #fff;
            }

            &:hover {
              box-shadow: -2px -2px 5px 2px #999;
            }
          }
        }
        > div:last-child {
          height: 45px;
          margin: 10px 0 0 -125px;
          p {
            font-size: 12px;
            color: #666;
            span {
              font-size: 12px;
              font-weight: bold;
            }
          }
        }
      }
      > .dynamic-r {
        width: 180px;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          margin-top: 10px;
          font-size: 14px;
          sup {
            font-size: 12px;
          }
        }
      }
    }
  }
}
// 会员优惠
.news {
  width: 100%;
  height: 486px;
  margin-top: 138px;
  &::before {
    display: table;
    content: "";
  }
  > .index_title {
    margin: 70px 0;
  }
  > .swiper_box {
    width: 1080px;
    margin: 0 auto;
    position: relative;
    > div {
      width: 100%;
      overflow: hidden;

      > .act_list {
        width: 5400px;
        display: flex;
        text-align: center;
        transition: all 0.3s ease;

        > li {
          height: 190px;
          width: calc((1080px - 30px) / 3);
          margin-left: 10px;
          cursor: pointer;
          position: relative;
          > img {
            display: block;
            width: 100%;
          }
        }
      }
    }
    > a {
      width: 80px;
      height: 80px;
      position: absolute;
      top: calc(50% - 40px);
      background: url("../../assets/sprite/app_z.png") no-repeat;
      z-index: 9;
      &.left {
        left: -100px;
        background-position: -82px -230px;
      }
      &.right {
        right: -100px;
        background-position: -164px -230px;
      }
    }
  }
}
// 关于我们
.box1 {
  background: url(/index/aboutUs.jpg) no-repeat center;
  .w1080 {
    position: relative;
    .poster {
      width: 561px;
      height: 321px;
      position: absolute;
      bottom: -331px;
      left: 0;
      cursor: pointer;
      img {
        display: block;
        width: 100%;
      }
    }
    .box {
      h2 {
        padding-top: 200px;
      }
      > p.we {
        font-size: 18px !important;
        color: #87c524;
        position: relative;
        i {
          display: block;
          width: 365px;
          height: 1px;
          background: #e7f3d8;
          position: absolute;
          top: 50%;
          left: 85px;
        }
      }
      > p.detail {
        color: #666;
      }
      .app-qr {
        > a {
          display: inline-block;
          color: #666;
          border: 1px solid #999;
          padding: 8px 25px;
          border-radius: 30px;
        }
      }
    }
  }
}
// 首页底部
.box2 {
  background: url(/index/index_bobg.jpg) no-repeat center;
  .box {
    h2 {
      padding-top: 300px;
    }
    p {
      color: #999;
    }
  }
}
.app-box {
  width: 100%;
  height: 863px;

  .w1080 {
    width: 1080px;
    margin: 0 auto;
    .box {
      width: 540px;
      text-align: left;
      h2 {
        font-size: 40px;
        color: #000;
        sup {
          font-size: 20px;
        }
      }
      p {
        font-size: 14px;
        line-height: 22px;
        margin: 30px 0;
      }
    }
  }
}

.index_title {
  text-align: center;
  font-size: 40px;
  height: 95px;
  line-height: 100%;
  > p {
    font-size: 18px;
    padding-top: 15px;
  }
}
</style>
