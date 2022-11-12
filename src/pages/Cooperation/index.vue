<template>
  <div class="Hotel-Franchise">
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
                  src="../../assets/img/cooperation/exhibition-l-iten4.jpg"
                  alt=""
                />
                <div>
                  <h5>加盟优势</h5>
                  <ul>
                    <li>
                      <a href=""><span>|</span>青年旅社组织</a>
                    </li>
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
            <li>
              <div>
                <img
                  src="../../assets/img/cooperation/exhibition-l-iten4.jpg"
                  alt=""
                />
                <div>
                  <h5>加盟优势</h5>
                  <ul>
                    <li>
                      <a href=""><span>|</span>青年旅社组织</a>
                    </li>
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
            <li>
              <div>
                <img
                  src="../../assets/img/cooperation/exhibition-l-iten4.jpg"
                  alt=""
                />
                <div>
                  <h5>加盟优势</h5>
                  <ul>
                    <li>
                      <a href=""><span>|</span>青年旅社组织</a>
                    </li>
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
            <li>
              <div>
                <img
                  src="../../assets/img/cooperation/exhibition-l-iten4.jpg"
                  alt=""
                />
                <div>
                  <h5>加盟优势</h5>
                  <ul>
                    <li>
                      <a href=""><span>|</span>青年旅社组织</a>
                    </li>
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
</template>

<script>
export default {}
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
  > .title {
    width: 100%;
    margin-bottom: 60px;
    padding: 30px;
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
        padding-right: 26px;
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
              background-color: rgba(130, 185, 35, 0.9);
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
    /*  > .aside {
      > ul {
        > li {
          a {
            display: block;
            width: 240px;
            height: 80px;
            line-height: 80px;
            padding-left: 70px;
            border-radius: 8px;
            color: white;
            font-size: 18px;
            font-weight: bold;
            background-color: #87c524;
            background-image: url(../../assets/img/cooperation/exhibition-r-icon4.png);
            // background-position-x: -1px;
            background-size: 20px;
          }
        }
      }
    } */
  }
}
</style>
