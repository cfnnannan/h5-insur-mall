<template>
  <div class="pay-contaion">
    <div v-show="getProductCode().payState == 'success'">
        <div class="pay-header">
            <div class="iconfont">&#xe62d;</div>
            <div class="state">订单完成</div>
        </div>

        <!-- 在商城购买后的样式 -->
        <div class="pay-footer" v-show="getProductCode().fromPath == 'mall'">
          <div class="info">您购买的保险产品保单已生成，可立即查看</div>
          <div class="pay-button">
              <a :href="goOrderLink" class="item-btn" target="_blank">查询保单</a>
              <div class="item-btn end" @click="showGoShare=true">立即分享</div>
          </div>
        </div>

        <!-- 其他路径购买显示的样式 -->
        <div class="pay-footer" v-show="getProductCode().fromPath == 'self'">
          <div class="info">您购买的保险产品保单已生成，可立即查看</div>
          <div class="face"><img :src="image_url" alt="" width="60%"></div>
          <div class="item-btn" @click="showGoShare=true">立即分享</div>
        </div>
        <div @click="showGoShare=false">
          <yd-popup v-model="showGoShare" position="center" width="100%">
              <div class="poppup-face"><img src="@/assets/images/ean-imgs/arrow.png" alt=""></div>
              <div class="iconfont poppup-close" @click="showGoShare=false">&#xe77d;</div>
          </yd-popup>
        </div>
    </div>
    
    <div v-show="getProductCode().payState == 'fail'">
        <div class="pay-header">
            <div class="iconfont" style="color: red">&#xe685;</div>
            <div class="state">支付失败</div>
        </div>
        <div class="pay-footer">
          <div class="pay-button">
              <a :href="goOrderLinkPay" class="item-btn" target="_blank">继续支付</a>
              <a :href="shareUrl" class="item-btn end" target="_blank">返回产品详情</a>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import getEnv from '@/utils/getEnv'
import getParams from '@/utils/get-params'
import Wechat from 'weixin-js-sdk'
import xinan from '../../assets/images/ean-imgs/xinan.jpg'
import xiaochi from '../../assets/images/ean-imgs/xiaochi.jpg'
export default {
  name: 'payment',
  data() {
    return {
      image_url: '',
      url: '',
      shareUrl: '',
      shareTitle: '',
      goOrderLink: getEnv().redirectUrl+'/#/orderlist',
      goOrderLinkPay: getEnv().redirectUrl+'/#/orderlist'+'?status=2',
      showGoShare: false,
    }
  },
  created() {
    this.url = getEnv().redirectUrl+'/'
    let shareUrlMap = {
        "exet": "#/ehome",
        "sebxb": "#/lhome",
        "ycwy": "#/whome",
        "ymwy": "#/vhome",
        "bwyl": "#/medicalHome",
        "bwfa": "#/preventHome",
    }
    let shareTitleMap = {
       "exet": "易安e享童年少儿综合医疗保险",
       "sebxb": "易安少儿白血病疾病保险",
       "ycwy": "易安孕产无忧综合保障计划",
       "ymwy": "易安疫苗无忧险",
       "bwyl": "太保安联全民百万医疗保险计划",
       "bwfa": "太保安联恶性肿瘤百万保障计划",
    }
    this.shareUrl = this.url + shareUrlMap[this.getProductCode().shareCode]
    this.shareTitle = shareTitleMap[this.getProductCode().shareCode]
    if(getEnv().qrcodeImgProd) {
      this.image_url = xiaochi
    } else {
      this.image_url = xinan
    }
  },
  mounted() {
    this.getShare();
    this.share();
  },
  methods: {
    getProductCode() {
        // let URL = 'http://ip.web.dev.kimed.me:8017/?code=071Fa7Nd1ynW6z06WXPd1mYlNd1Fa7NM&state=123#/payment?source=self&product=exet&payState=fail'
        let URL = decodeURIComponent(window.location.href)
        let fromPath = getParams.getURLParams(URL).source
        let payState = getParams.getURLParams(URL).payState
        let shareCode = getParams.getURLParams(URL).product
        let requestObj = {
          'fromPath': fromPath,
          'shareCode': shareCode,
          'payState': payState
        } 
        return requestObj
    },
    getShare() {
      this.$store.dispatch('postEechatShare', {
        data: {
          url: this.url,
          timestamp: parseInt((new Date().getTime())/1000)
        },
        success: data => {
          if(data.result == 'SUCCESS') {
            const result = data.retData;
            Wechat.config({
                debug: false,
                appId:  result.appId,
                timestamp: result.timestamp,
                nonceStr: result.nonceStr,
                signature: result.signature,
                jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline']
            });
          }
        }, 
      });
    },
    share() {
      Wechat.ready(()=> {
      let shareData = {
        title: this.shareTitle,
        desc: `小慈健康为您挑选好保险，保障您和家人健康无忧。`,
        link: this.shareUrl,
        imgUrl: this.url + '/static/share/share-icon.png',
        success() {
          this.showGoShare = false
        },
        cancel() {
          this.showGoShare = false
        }
      }
      Wechat.onMenuShareTimeline(shareData);
      Wechat.onMenuShareAppMessage(shareData);
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.pay-contaion {
  padding: 0 1.0rem;
  padding-top: 12%;
}
.pay-header .iconfont {
  color: #0c8be7;
  font-size: 6.5rem;
}
.pay-header .state {
  font-size: 1.2rem;
  color: black;
}
.pay-footer .info {
  color: #999;
  margin: 3% 0 2% 0;
}
.pay-footer .item-btn {
  background-color: #0c8be7;
  border: 1px solid #d6d5d6;
  color: #fff;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  margin-top: 5%;
}
.pay-button {
  margin-top: 20%;
  a {
    display: inherit;
  }
}
.pay-button .end {
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
}
.poppup-face {
  margin-bottom: 105%;
  text-align: right;
  padding: 0 5%;
}
.poppup-close {
  margin-bottom: 5%;
  font-size: 2.0rem;
  color: #fff;
}
</style>