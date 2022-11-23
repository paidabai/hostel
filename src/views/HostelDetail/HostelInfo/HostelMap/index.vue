<template>
  <div id="container" v-show="hostelDetailData.length"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import {GAODE_KEY} from "../../../../utils/constants";
import {reqLatitudeAndLongitude} from "../../../../api";
import {mapState} from "vuex";

export default {
  name: "HostelMap",
  props: ['hostelName'],
  data() {
    return {
      location: []
    }
  },
  computed: {
    ...mapState('hostelDetailOptions', ['hostelDetailData'])
  },
  methods: {
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
          center:this.location, //初始化地图中心点位置
        });
        let marker = new AMap.Marker({
          icon: new AMap.Icon({
            size: new AMap.Size(37, 77),    // 图标尺寸
            image: '../../../../src/assets/logo/position-icon.png',  // Icon的图像
            imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          }),
          position: new AMap.LngLat(this.location[0],this.location[1]),
          title: this.hostelName,
          zoom: 13
        });
        // 将创建的点标记添加到已有的地图实例：
        map.add(marker);
      }).catch(e=>{
        console.log(e);
      })
    },
    // 获取旅舍的经纬度
    getHostelLocation() {
      reqLatitudeAndLongitude(this.hostelDetailData[0]?.position).then(value => {
        const result = value.data
        if (result.status === '1') {
          this.location = result.geocodes[0].location.split(',')
        }
      })
    }
  },
  watch: {
    // 监听hostelDetailData的值
    hostelDetailData() {
      this.getHostelLocation()
      // 如果hostelDetailData有值才初始化地图
      if (this.hostelDetailData.length) this.initMap();
    }
  }
}
</script>

<style lang="less" scoped>
  #container{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 500px;
    border-radius: 10px;
  }
</style>