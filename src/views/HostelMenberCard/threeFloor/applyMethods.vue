<template>
    <div class="w">
        <img src="../../../assets/img/exhibition-banner.jpg" alt="">
        <div class="main">
        <!-- 申请方法 -->
        <div class="body">
            <h2>申请方法</h2>
            <div>
                <p>国际青年旅舍会员卡（HI卡）是青年旅舍会员卡是国际青年旅舍联盟会员身份证明，全球通用，也是旅行者入住青年旅舍的凭证。现办理会员卡可通过网上办理、到各家青年旅舍前台办理，或到各代理商处办理，办理当日即可生效。</p>
                <img src="../../../assets/img/cardapply/3.1.jpg" alt="">
                <h3>国际青年旅舍会员卡三种申请方法</h3>
                <p>* 请在申请国际青年旅舍会员卡前，仔细阅读“ <a href="">会员卡问与答</a> ”。</p>
                <div>
                <img src="../../../assets/img/cardapply/3.21.gif" alt="">
                <img src="../../../assets/img/cardapply/3.22.gif" alt="">
                <img src="../../../assets/img/cardapply/3.33.gif" alt="">
                </div>
                <p>办理国际青年旅舍会员卡，手续极为简便，它的有效期为一年，全球通用。会员卡过期后，则自动失效，不能继续延用。如需续卡，只要青年旅舍总部有您旧的会员卡资料记录，即可续卡，并享受续卡优惠。续卡成功后，您将重新拿到一张新的会员卡。（续期折扣优惠只可以向青年旅舍中国总部申请，续卡需重新填写网上申请表:点击这里申请网上在线续卡）</p>
                <p>
                    <strong>
                        注：通过国际青年旅舍中国总部办理的会员卡只能邮寄到中国大陆地区，海外以及港、澳、台地区一律不予邮寄。但身在中国大陆地区的外籍人士以及港、澳、台人士，均可透过国际青年旅舍中国总部或者国内的青年旅舍前台直接购买会员卡。
                    </strong>
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
    .main{
        width: 1080px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        padding: 30px 0 40px 30px;
        line-height: 28px;
        .body{
            background-color: #fff;
            width: 780px;
            padding: 35px ;
            >h2{
                font-size: 36px;
                color: #333;
                margin-bottom: 30px;
            }
            p{
                line-height: 32px;
                text-indent: 2em;
                margin: 15px 0;
            }
        }
    }
}
</style>