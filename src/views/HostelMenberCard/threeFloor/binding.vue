<template>
    <div class="w">
        <img src="../../../assets/img/exhibition-banner.jpg" alt="">
        <div class="main">
        <!-- 绑定会员卡 -->
        <div class="body">
            <h2>如何绑定电子会员卡</h2>
            <p>
               为了便于持卡人更简单、快速、高效地使用卡片，自2020年5月起，YHA China推出了YHA会员年卡、YHAISIC联名卡、YHA终身会员卡的电子卡。若您已经持有实体卡，可在YHA China以下平台免费绑定使用电子卡；若您还未申请YHA China卡片，可在“加入会员”页面申请您的电子卡，电子卡的功能在中国大陆境内与实体卡相同，您可以只申请电子卡，无需再加购实体卡。<strong>如果您将去国外及中国香港、中国澳门、中国台湾地区用卡，请申请实体卡以保证用卡权益。</strong>
            </p>
            <div class="apply">
                <p>
                    绑定电子卡可以在青年旅舍微信公众号平台进行:
                    <br>
                    方法一：<br>
                    1.扫描下方二维码，进入电子会员卡领取页面；<br>
                    <img src="../../../assets/img/cardapply/1.1.jpg" alt="">
                    <span>使用微信扫描上方二维码，领取会员卡</span><br>
                    <img src="../../../assets/img/cardapply/ap1.2.jpg" alt="">
                    <span>点击【领取到卡包】即可将会员卡领取到您的微信卡包中</span>
                    <br>
                    2.会员卡领取成功后，您可以通过打开微信，依次点击【我】--【卡包】--【会员卡】，查看和管理您领取的会员卡。会员卡领取后，需要绑定激活后才能使用。<br>
                    <img src="../../../assets/img/cardapply/ap1.3.jpg" alt="">
                    <span>点击【激活会员卡】，进入会员卡激活界面</span>
                    <br>
                    3.在必填信息中填入您的会员卡绑定的手机号，勾选‘我已阅读并同意会员卡信息使用声明’，后点击提交即可进入激活程序
                    <img src="../../../assets/img/cardapply/ap1.4.jpg" alt="">
                    <span>温馨提示：进入激活会员卡界面时，系统将会自动填入您的手机号，</span>
                    <br>
                    <img src="../../../assets/img/cardapply/ap1.5.jpg" alt="">
                    <span>如果您的会员卡绑定的手机号是别的号码，可修改并验证后提交。</span>
                    <br>
                    4.提交成功后，系统将根据您提交的信息查询是否存在有效期内的会员卡，如果您有多张有效会员卡，您可以在此步骤选择您需要关联的卡片；
                     <img src="../../../assets/img/cardapply/ap1.6.jpg" alt="">
                    <span>选择并关联卡片</span>
                    <br>
                    5.关联提交后，系统将进入激活步骤，激活成功后，系统将提示您激活成功，3秒后将自动跳转至会员卡激活后的界面。在此页面，您可以【出示会员卡】，将电子会员卡（图片）提供给旅舍前台核验您的会员身份的；或进行订单管理、电子会员卡管理等相关操作。
                     <img src="../../../assets/img/cardapply/ap1.7.jpg" alt="">
                    <span>激活状态的显示</span>
                     <img src="../../../assets/img/cardapply/ap1.8.jpg" alt="">
                    <span>会员卡激活后的界面</span>
                    <br>
                    方法二：
                    <br>
                    关注【青年旅舍】官方微信号，在输入框中发送【绑定】或【电子会员卡】，系统将自动回复绑定和激活方法。
                    <img src="../../../assets/img/cardapply/ap1.9.jpg" alt="">
                    <span>使用微信扫描上方二维码，即可关注【青年旅舍】官方微信号</span>
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
            width: 780px;
            background-color: #ffffff;
            padding: 35px ;
            >h2{
                font-size: 36px;
                color: #333;
                margin-bottom: 30px;
            }
            >p{
                text-indent: 2em;
            }
            .apply{
                font-size: 16px;
                padding: 2em;
                >p{
                    text-align: center;
                    >img{
                        width: 400px;
                        margin-left: 130px;
                        display: block;
                        background-color: #ccc;
                    }
                    span{
                        display: inline-block;
                        padding: 30px 0;
                    }
                }
            }
        }
    }
}
</style>