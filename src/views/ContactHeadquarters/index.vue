<template>
  <div class="contact">
    <div id="container"></div>
    <div class="main">
      <div class="hostel-message">
        <h2>中国国际青年旅舍<sup>®</sup>总部</h2>
        <p>办公地址：成都市锦江区体育西路103号维多利广场A塔3606室（地铁1/3号线，体育西路站E出口）</p>
        <p>工作时间：周一至周五，上午9:00-12:30，下午14:00-18:00（周末及国家法定节假日休息）</p>
      </div>
      <div class="hostel-info">
        <div>
          <p>你可以通过以下方式联系我们</p>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item v-ripple="'rgba(255, 255, 255, 0.5)'" v-for="item in menuItem" :index="item.id + ''" :key="item.id">
              <a v-scroll-to="item.scrollTo">
                {{item.title}}
              </a>
            </el-menu-item>
          </el-menu>
          <el-menu :default-active="activeIndex" :class="menuType" mode="horizontal"  style="display: none">
            <el-menu-item v-ripple="'rgba(255, 255, 255, 0.5)'" v-for="item in menuItem" :index="item.id + ''" :key="item.id">
              <a v-scroll-to="item.scrollTo">
                {{item.title}}
              </a>
            </el-menu-item>
          </el-menu>
          <div class="headquarters-list" id="book">
            <h3>关于预订</h3>
            <p>联系电话： 020-87513731转 103分机（普通话，粤语，English）</p>
            <p>电子邮箱： service@yhachina.com</p>
            <p>传真号码： 020-38108668</p>
            <p class="tips">温馨提示：如需取消订单，请直接登录您的个人账户，通过网站的 " 旅舍订单 " 进行查询及操作。</p>
          </div>
          <div class="headquarters-list" id="card">
          <h3>关于会员卡</h3>
          <p>联系电话： 020-87513731转 103分机（普通话，粤语，English）</p>
          <p>电子邮箱： service@yhachina.com</p>
          <p>传真号码： 020-38108668</p>
        </div>
          <div class="headquarters-list" id="join">
            <h3>关于加盟</h3>
            <p>联系电话： 020-87513731转 103分机（普通话，粤语，English）</p>
            <p>电子邮箱： service@yhachina.com</p>
            <p class="tips">温馨提示：在与我们联系之前,请仔细阅读本站”旅舍加盟”栏目的信息,相信能解决您的大多数疑问。</p>
          </div>
          <div class="headquarters-list" id="interact">
            <h3>关于合作</h3>
            <h4>市场合作、会员优惠、会员卡代理商加盟、校园推广、活动赞助等，欢迎与我能联系。</h4>
            <p>联系电话： 020-87513731转 103分机（普通话，粤语，English）</p>
            <p>电子邮箱： service@yhachina.com</p>
            <p>传真号码： 020-38108668</p>
          </div>
          <div class="headquarters-list" id="other">
            <h3>其他问题</h3>
            <p>联系电话： 020-87513731转 103分机（普通话，粤语，English）</p>
            <p>电子邮箱： service@yhachina.com</p>
            <p>传真号码： 020-38108668</p>
          </div>
        </div>
        <div class="card">
          <a href=""><i></i>人才招聘</a>
          <HostelCard/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
import {GAODE_KEY} from "../../utils/constants";
import HostelCard from "../../components/HostelCard/index.vue";
import {BASE_URL} from '../../utils/constants'

export default {
  name: "ContactHeadquarters",
  components: {
    HostelCard
  },
  data(){
    return{
      //此处不声明 map 对象，可以直接使用 this.map赋值或者采用非响应式的普通对象来存储。
      // map:null,
      // 激活项
      activeIndex: '1',
      // 需要遍历的导航信息
      menuItem: [
        {
          id: 1, title: '关于预订', scrollTo: '#book'
        },
        {
          id: 2, title: '关于会员卡', scrollTo: '#card'
        },
        {
          id: 3, title: '关于加盟', scrollTo: '#join'
        },
        {
          id: 4, title: '关于合作', scrollTo: '#interact'
        },
        {
          id: 5, title: '其他问题', scrollTo: '#other'
        },
      ],
      // el-menu的样式
      menuType: 'el-menu-demo',
    }
  },
  // 将要挂载时
  mounted(){
    //DOM初始化完成进行地图初始化
    this.initMap();
    // 监听
    window.addEventListener("scroll", this.scrollActive);
  },
  // 组件将要销毁时
  beforeDestroy() {
    // 销毁监听
    window.removeEventListener("scroll", this.scrollActive);
  },
  methods:{
    // 地图初始化方法
    initMap() {
      AMapLoader.load({
        key: GAODE_KEY,             // 申请好的Web端开发者Key，首次调用 load 时必填
        version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins:['AMap.IndoorMap', 'AMap.Marker', 'AMap.InfoWindow'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap)=>{
        let map = new AMap.Map("container",{  //设置地图容器id
          resizeEnable: true,
          zoom: 19,           //初始化地图级别
          showIndoorMap:true, //显示地图自带的室内地图图层
          center:[104.088860,30.647898], //初始化地图中心点位置
        });
        let marker = new AMap.Marker({
          icon: new AMap.Icon({
            size: new AMap.Size(37, 57),    // 图标尺寸
            image: `${BASE_URL}/hostelImg/lxzb-ditu.png`,  // Icon的图像
            imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          }),
          position: new AMap.LngLat(104.088860,30.647898),
          title: '青年旅舍',
          zoom: 13
        });
        // 将创建的点标记添加到已有的地图实例：
        map.add(marker);
      }).catch(e=>{
        console.log(e);
      })
    },
    scrollActive() {
      // 获取滚动的距离
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 获取第一个’关于预定‘, 距离顶部的值
      const firstDom = document.getElementById('book').offsetTop
      // 如果滚动的距离超过第一个’关于预定‘, 计算滚动到的元素并修改高亮的值（activeIndex）
      if (scrollTop > firstDom) {
        this.activeIndex = parseInt((scrollTop - firstDom - 170) / 210 + '') + ''
        if (scrollTop > (firstDom + 400)) {
          this.menuType = 'el-menu-demo fixed'
        } else {
          this.menuType = 'el-menu-demo'
        }
      }
    }
  },
}
</script>

<style lang="less" scoped>
  .contact{
    background-color: #f5f5f5;
    #container{
      padding: 0;
      margin: 0;
      width: 100%;
      height: 400px;
    }
    .main {
      width: 1080px;
      margin: 0 auto;
      position: relative;
      top: -70px;
      z-index: 9999;
      .hostel-message {
        width: 1080px;
        padding: 30px;
        margin-bottom: 60px;
        background-color: #fff;
        box-shadow: 0 15px 35px -15px rgb(47 130 36 / 70%);
        sup {
          font-size: 14px;
        }
        h2 {
          font-size: 30px;
          line-height: 100%;
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
          text-decoration: none;
        }
      }
      .hostel-info {
        padding-bottom: 250px;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #666;
        p {
          margin-bottom: 25px;
        }
        .el-menu-demo {
          width: 810px;
          .el-menu-item {
            width: 162px;
            height: 55px;
            text-align: center;
            a {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .is-active {
            box-shadow: 0 8px 0 -5px #87c524;
            position: relative;
            border-bottom: 0;
            color: #666;
            &:after {
              content: '';
              display: block;
              width: 0;
              height: 0;
              overflow: hidden;
              position: absolute;
              bottom: -16px;
              left: 50%;
              margin-left: -8px;
              border-width: 8px;
              border-style: solid;
              border-color: #87c524 transparent transparent transparent;
            }
          }
        }
        .fixed {
          display: block !important;
          position: fixed;
          top: 0;
        }

        .headquarters-list {
          background-color: #fff;
          padding: 20px 15px;
          margin-bottom: 20px;
          h3 {
            line-height: 35px;
            color: #999;
            border-bottom: 1px solid #eee;
            padding-left: 15px;
          }
          h4 {
            font-weight: bold;
            margin: 10px 15px;
          }
          p {
            margin: 10px 15px;
          }
          .tips {
            margin-top: 25px;
            color: #f7941c;
          }
        }
        .card {
          a {
            display: block;
            height: 120px;
            background-color: #fff;
            line-height: 120px;
            font-size: 18px;
            margin-bottom: 10px;
            color: #333;
            i {
              display: inline-block;
              width: 60px;
              height: 60px;
              vertical-align: middle;
              margin: 0 20px 0 35px;
              background: url("../../assets/sprite/app_z.png") no-repeat 0px -312px;
            }
          }
        }
      }
    }
  }
</style>