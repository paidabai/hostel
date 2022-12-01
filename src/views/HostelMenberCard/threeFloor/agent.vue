<template>
    <div class="w">
      <img src="../../../assets/img/exhibition-banner.jpg" alt="">
      <div class="main">
        <!-- 代理商加盟 -->
        <div class="body">
            <h2>代理商加盟</h2>
            <div>
                <img src="../../../assets/img/cardapply/5.1.jpg" alt="">
                <h4>广州爬山虎户外旅行用品店</h4>
                <p><strong>总店：</strong>广州爬山虎户外旅行用品店</p>
                <p><strong>地址：</strong>广州市较场东路15号之8</p>
                <p><strong>电话：</strong>020-83830180</p>
                <p><strong>营业时间</strong>10：00 ~ 22：00</p>
                <h4>交通指引：</h4>
                <p>地铁：地铁1号线，烈士陵园站A出口南行50米<br>
                公交：烈士陵园站 1，22，40，76，102，107，108，183，211，221，227，243，517，546，864 <br>
                 较场西路站 183，227  <br>
                省人民医院站 45，112，211，542，548，551，864 <br>
                自驾车停车位：较场东路有停车位<br>
                </p>
                <br>
                   <p><strong>分店：</strong>广州极星户外旅行用品店</p>
                <p><strong>地址：</strong>广州市较场西路18号之5</p>
                <p><strong>电话：</strong>020-83812188</p>
                <p><strong>营业时间</strong>10：00 ~ 22：00</p>
                <h4>交通指引：</h4>
                <p> 地铁：地铁1号线，烈士陵园站A出口<br>
                公交：烈士陵园站 1，22，40，76，102，107，108，183，211，221，227，243，517，546，864 <br>
                 较场西路站 183，227  <br>
                省人民医院站 45，112，211，542，548，551，864 <br>
                自驾车停车位：较场东路有停车位<br><br>
                *毗邻建筑：中华广场、流行前线、地王广场、广东省体育场
                </p>
                 <img src="../../../assets/img/cardapply/5.2.gif" alt="">
                 <h4> STA Travel China</h4>
                <p>
                    上海市虹口区四平路188号上海商贸大厦1609室 <br>
                    邮编：200086<br>
                    Tel:021-65070068，021-65070386<br>
                    Fax: 021-65070368<br>
                </p>
                <img src="../../../assets/img/cardapply/5.3.jpg" alt="">
                <h4>北京众信国际旅行社有限公司</h4>
                <p> 地址：北京市朝阳区东土城路12号怡和阳光大厦B座6层 <br>
                邮编：100013 <br>
                B-6F,YiHeYangGuang Plaza,No.12 Dong Tu Cheng Road,chaoyang District，beijing(100013),China <br>
                电话Tel:010-84295012 <br>
                传真Fax:010-84295012 <br>
                公司网站：www.utourworld.com</p>

                <img src="../../../assets/img/cardapply/5.4.jpg" alt="">
                <p>
                    提供最专业最全面的helpx旅行咨询服务，推荐相关旅游线路和游记攻略。 <br>
                    论坛：www.helpx.cn <br> 
                    公众号：helpx_cn<br>
                    微博：weibo.com/helpx<br>
                    豆瓣小站：site.douban.com/220331<br>
                    邮箱：946887089@qq.com<br>
                    欢迎来到论坛 www.helpx.cn 找到更多关于helpx有意思的内容,我们相信你会爱上这份态度和旅行方式。<br>
                </p>
            </div>
        </div>
        <div class="cards">
          <memberCard></memberCard>
          <HostelCard></HostelCard>
        </div>
     </div>
    </div>
</template>

<script>
import HostelCard from "../../../components/HostelCard/index.vue";
import memberCard from "../../../components/memberCard/index.vue"
export default {
  components: {
    HostelCard,
    memberCard,
  },
};
</script>

<style lang="less" scoped>
.w{
  width: 100%;
  background-color: #f5f5f5;
  >img{
    width: 100%;
    display: block;
    margin-bottom: -5rem;
  }
  .main {
    top: -10%;
    width: 1080px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 30px 0 40px 30px;
    line-height: 28px;
    .body {
      width: 780px;
      background-color: #ffffff;
      padding: 35px ;
      > h2 {
        font-size: 36px;
        color: #333;
        margin-bottom: 30px;
      }
      img{
        margin: 20px 0;
      }
      h4{
        font-weight: bold;
        margin: 10px 0;
      }
    }
  }
}
</style>