<template>
   <div class="w">
    <img src="../../../assets/img/exhibition-banner.jpg" alt="">
    <div class="main">
        <!-- 会员卡辨伪 -->
        <div class="body">
            <h2>会员卡辨伪</h2>
            <div>
                <p>Only membership card bears both the official logo of YHA China and Hostelling International (sample below) is acceptable to the international community of youth hostels. Any other cards claimed to be valid for access to youth hostel in China (or any other countries) is insufficiently accurate. Youth hostel shall not offer member concession to those cards in question.</p>
                <p>Membership card bearing the Hostelling International blue triangle and “Utels” logo is not an officially approved card. Please write to International Youth Hostel Federation at 2/F, Gate House, Fretheme Road, Welwyn Garden City, Herts, AL8 6RD England, or email office@hihostel.com in case you encounter any problem.</p>
                <p>只有同时标有国际青年旅舍蓝三角标志及中国青年旅舍红方块标志之会员卡（见下方样本）方可在中国（及其他国家）的青年旅舍作为有效入住凭证。除此卡外的其他卡均不可作为有效入住凭证，不能享有会员待遇。</p>
                <p>其他标志，（如“Utels”标志与国际青年旅舍蓝三角标志并用的卡）是未经青年旅舍国际总部批准的卡，属侵权行为，是不被中国加盟旅舍和全球青年旅舍认可的。如果您对此有任何疑问，请写信至至中国国际青年旅舍总部（service@yhachina.com） 或写信至青年旅舍国际总部地址International Youth Hostel Federation at 2/F, Gate House, Fretheme Road, Welwyn Garden City, Herts, AL8 6RD England或电邮office@hihostels.com投诉。</p>
                <img src="../../../assets/img/cardapply/3.1.jpg" alt="">
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
        p{
            line-height: 32px;
            text-indent: 2em;
            margin-bottom: 10px;
        }
    }
    }
}
</style>