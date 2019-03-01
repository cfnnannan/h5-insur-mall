<template>
  <div class="body-contaion">
    <!-- 非停诊险 -->
    <div class="main-layor" v-show="productId!='tbtzx001'">
      <div class="main-title">{{productName}}</div>
      <div class="order-content">
        <div class="order-list">
          <div class="order-item"><label>订&nbsp;&nbsp;单&nbsp;&nbsp;号：</label><span>{{res.orderSysid}}</span></div>
          <div class="order-item"><label>保&nbsp;&nbsp;单&nbsp;&nbsp;号：</label><span>{{res.policyNo}}</span></div>
          <div class="order-item"><label>保障期限：</label><span>1年</span></div>
          <div class="order-item"><label>保障状态：</label><span>{{claimStatus}}</span></div>
          <div class="order-item order-time-cont">
            <div class="order-time"><label>起止时间：</label>
              <div>
                <p>{{res.startDate | formatDate}}起</p>
                <p>{{res.endDate | formatDate}}止</p>
              </div>
            </div>
          </div>
        </div>
        <div class="order-list">
          <div class="order-item" v-show="res.typeName"><label>保障套餐: </label><span>{{res.typeName}}</span></div>
        </div>
        <div class="order-list">
          <div class="order-item"><label>被保险人：</label><span>{{res.insurerName}}</span></div>
          <div class="order-item"><label>投&nbsp;&nbsp;保&nbsp;&nbsp;人：</label><span>{{res.holderName}}</span></div>
          <div class="order-item order-notice"><label>相关条款：</label>
            <span @click="showPopupClause">《保险条款》</span>
            <span @click="showPopupNotice">《投保须知》</span>
          </div>
          <div class="order-item order-notice item-end">
            <label>客服电话：</label><a :href="'tel:' + telphone">{{telphone}}</a>
          </div>
        </div>
      </div>
      <a :href="ePolicy" target="_blank" class="claim-button claim-handel link-epolicy" >下载电子保单</a>
    </div>

    <!-- 停诊险详情 -->
    <div class="main-layor" v-show="productId=='tbtzx001'">
      <div class="main-title">{{productName}}</div>
      <div class="order-list">
        <div class="order-item"><label>订&nbsp;&nbsp;单&nbsp;&nbsp;号：</label><span>{{res.orderSysid}}</span></div>
        <div class="order-item"><label>挂&nbsp;&nbsp;号&nbsp;&nbsp;费：</label><span>{{res.amount / 100}}元</span></div>
        <div class="order-item"><label>挂号信息：</label><span>{{res.riskInfo}}</span></div>
        <div class="order-item"><label>保障状态：</label><span>{{claimStatus}}</span></div>
        <div class="order-item"><label>被保险人：</label><span>{{res.insurerName}}</span></div>
        <div class="order-item order-time-cont">
          <div class="order-time"><label>起止时间：</label>
            <div>
              <p>{{res.startDate | formatDate}}起</p>
              <p>{{res.endDate | formatDate}}止</p>
              <p class="order-tip" v-show="productId=='tbtzx001'">*{{claimInform}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="claim-button" v-show="flag==0">{{claimButton}}</div>
      <div class="claim-button" v-show="flag==1" :class="{'clickable': flag==1}" @click="openConfirm">{{claimButton}}</div>
    </div>
    <!-- 投保条款弹框 -->
    <yd-popup v-model="showClause" position="center" width="92%">
      <pop-clause :afferentClauseData="fromOrderList" @closeClause="showClause=false"></pop-clause>
    </yd-popup>
    <!-- 投保须知弹框 -->
    <yd-popup v-model="showNotice" position="center" width="92%">
      <pop-notice :afferentNoticeData="fromOrderList" @closeNotice="showNotice=false"></pop-notice>
    </yd-popup>
  </div>
</template>
<script>
import formatDate from '@/utils/filters-date'
import cookieUtil from '@/utils/cookie'
import axios from '@/axios'
import utilsLogin from '@/utils/loginUtils'
import getEnv from '@/utils/getEnv'
import popClause from '@/components/public-components/popup/clause'
import popNotice from '@/components/public-components/popup/notice'
export default {
  name: 'orderdetails',
  components: {
    popClause,
    popNotice,
  },
  data () {
    return {
      orderSysid: this.$route.query.orderSysid,
      productId: this.$route.query.productId,
      productName: this.$route.query.productName,
      status: this.$route.query.status,
      compensate: this.$route.query.compensate,
      claimStatus: '',
      fromOrderList: '',
      showClause: false,
      showNotice: false,
      mapPopup: {},
      telphone: '',
      res: '',
      ePolicy: '' ,  
      showPolicy: false,
      policyContent: '',
      flag: '',
      claimInform: '',
      claimButton: '',
    }
  },
  created() {
    if( !getEnv().useLocalToken ) {
      utilsLogin.login.wechatLogin(window.location.href)
    }
    cookieUtil.setCookie('statusIndex', this.status, 0.03)
    if(this.status == 0 && this.compensate == 0) {
      this.claimStatus = '保障中';
    } else if (this.status == 0 && this.compensate != 0) {
      this.claimStatus = '理赔中';
    } else if (this.status == 1) {
      this.claimStatus = '已过期';
    } else {
      this.claimStatus = '去支付';
    }
    this.mapPopup = {
      "tbbwfa001": "prevent",
      "exet": "eInsure",
      "sebxb": "lInsure",
      "tbbwyl001": "medical",
      "ycwy": "wInsure",
      "ymwy": "vInsure",
      "tbsjbb001": "sjbb",
    }
     let mapTel = {
      "exet": "4000-121212",
      "sebxb": "4000-121212",
      "ycwy": "4000-121212",
      "ymwy": "4000-121212",
      "tbbwfa001": "10108686",
      "tbbwyl001": "10108686",
      "tbsjbb001": "10108686",
    }
    this.telphone = mapTel[this.productId]
    this.getOrderDetail();
  },

  /**路由拦截*/
  // beforeRouteEnter (to, from, next) {
  //   if(from.name !== 'orderlist') {
  //     next({path: 'orderlist'})
  //   } else {
  //     next()
  //   }
  // },
  methods: {
    showPopupClause() {
      this.showClause = true
      this.fromOrderList = this.mapPopup[this.productId]
    },
    showPopupNotice() {
      this.showNotice = true
      this.fromOrderList = this.mapPopup[this.productId]
    },
    getOrderDetail(){
      this.$dialog.loading.open('加载中');
      this.$store.dispatch('getOrderDetail',{
        data: {
          orderSysid: this.orderSysid,
          productId: this.productId
        },
        success: data => {
          this.$dialog.loading.close();
          if(data.result === 'SUCCESS') {
            this.res = data.retData
            this.ePolicy = data.retData.ePolicy
            let currentTime = new Date().getTime()
            let addEndtime = this.res.endDate+86400000*3;
            if(this.status == 0 && this.compensate == 0) {
              this.claimStatus = '保障中';
              if (currentTime < this.res.endDate ) {
                this.flag = '0'   //灰色不可点击
                this.claimInform = '未到就诊时间'
                this.claimButton = '申请理赔'
              } else if( currentTime < addEndtime) {
                  this.flag = '1'   //蓝色可点击
                  this.claimInform = '理赔时间'
                  this.claimButton = '申请理赔'
              }
            } else if (this.status == 0 && this.compensate != 0) {
              this.flag = '0'
              this.claimInform = '正在进行理赔，请耐心等待'
              this.claimButton = '理赔中'
              this.claimStatus = '理赔中';
            } else if (this.status == 1) {
              this.claimStatus = '已过期';
              if(addEndtime < currentTime) {
                  this.flag = '2'
                  this.claimInform = '已超过理赔时间'
                } else if(this.compensate==2 || this.compensate==3) {
                  this.flag = '0'
                  this.claimInform = '已完成理赔'
                  this.claimButton = '理赔完成'
                } else {
                  this.flag = '2'
                  this.claimInform = '理赔未通过'
                }
            } else {
              this.claimStatus = '去支付';
            }
          } else {
            this.$dialog.toast({mes: data.retMsg, timeout: 1500});
          }
        }
      })
    },
    openConfirm() {
      this.$dialog.confirm({
        title: '请您确认是否申请理赔!',
        mes: '受理后将会有专员联系您了解停诊情况。',
        opts: () => {
          this.getCompensateApply()
        }
      });
    },
    getCompensateApply() {
      this.$dialog.loading.open('加载中');
      this.$store.dispatch('getCompensateApply', {
        data: {
          orderSysid: this.orderSysid
        },
        success: data => {
          this.$dialog.loading.close();
          if (data.result === 'SUCCESS'){
            this.flag = 0
            this.claimStatus = '理赔中'
            this.claimInform = '正在进行理赔，请耐心等待'
            this.claimButton = '理赔中'
            this.$router.push('/orderlist')
          } else {
            this.$dialog.loading.close();
            this.$dialog.toast({mes: data.retMsg, timeout: 1500});
          }
        }
      })
    }
  },
  filters: {
    formatDate
  }
}
</script>
<style scoped>
@import url('../../assets/styles/public/order-summary/public');
.body-title {
  border-bottom: 1px solid #ccc;
}
.main-layor {
  text-align: left;
  padding-top: 1.0rem;
  margin: 0 0.5rem;
}
.main-title {
  background-color: #0c8be7;
  color: #fff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.order-list {
  background-color: #fff;
  padding: 0 0.5rem;
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.5rem;
  box-shadow: 0px 2px 3px 0px #ebf7ff;
}
.order-list .order-item {
  height: auto;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
.order-list .order-item:last-child {
  border-bottom-color: transparent;
}
.order-list .order-time-cont {
  border-bottom: none;
  padding: 0.8rem 0;
  line-height: 24px;
}
.order-item .order-time {
  display: flex;
  flex-direction: row;
}
.order-item label {
  display: inline-block;
  width: 80px;
  margin-right: 10px;
}
.item-end {
  border-bottom-color: transparent !important;
}
.order-notice span {
  color: #0c8be7;
}
.order-tip {
  text-align: left;
  color: #0c8be7;
  font-size: 0.8rem;
}
.claim-button {
  text-align: center;
  background-color: #ccc;
  color: #fff;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  margin: 0 0.5rem;
  margin-top: 10%;
}
.claim-handel {
  background-color: #0c8be7;
}
.link-epolicy {
  display: flex;
  justify-content: center;
}
.clickable {
  background-color: #0c8be7;
  color: #fff;
}

</style>
