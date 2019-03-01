<template>
  <div>
    <div class="body-contaion">
      <div class="tabs-title">
        <div class="tab" 
            v-for="(item, index) of tabList" 
            :key="index" 
            @click="getOrderListInfo(index)" 
            :class="{'nav-active':index==status}">{{item}}</div>
      </div>
      <div class="list-contaion" 
            v-for="(item,index) of dataList" 
            :key="index"
            v-show="showEmpty=='1'">
        <div class="order-title">
          <img src="../../assets/images/order-summary/tzx.png" alt="" v-show="item.companyId=='taibaohainan'">
          <img src="../../assets/images/order-summary/tzx.png" alt=""  v-show="item.companyId=='taibaoanlian'">          
          <img src="../../assets/images/order-summary/tbal.png" alt="" v-show="item.companyId=='taibaoanlian'">
          <img src="../../assets/images/order-summary/ean.png" alt="" v-show="item.companyId=='yian001'">
          <span>{{item.productName}}</span></div>
        <div class="order-info"
              v-show="status!=2"
              @click="getOrderDetail(item,index)">
          <div class="order-state">
            <div>订&nbsp;&nbsp;单&nbsp;&nbsp;号：{{item.orderSysid}}</div>
            <div class="order-del"><span>{{item.claimStatus}}</span><span class="iconfont">&#xe601;</span></div>
          </div>
          <div>投保时间：{{item.createTime | formatDate}}</div>
        </div>

        <!-- 待支付 -->
        <div class="order-info" 
              v-show="status==2"
              @click="getOrderPayUrl(item,index)">
          <div class="order-state">
            <div>创建时间：{{item.createTime | formatDate}}</div>
            <div class="order-del"><span>去支付</span><span class="iconfont">&#xe601;</span></div>
          </div>
          <div>被保险人：{{item.insurantName}}</div>
          <div>订单金额：{{item.premium / 100}}元</div>
        </div>
      </div>
      <div class="status-two" v-show="status==2 && showEmpty!='0'">请在当日24小时前完成支付</div>
      <!-- 数据为空 -->
      <div class="list-empty" v-show="showEmpty=='0'">
        <img src="@/assets/images/order-summary/empty-icon.png" alt="">
        <p class="tip">{{emptyInfo}}</p>
        <div @click="goMallFn" class="into-btn">立即享受保障</div>
      </div>
    </div>
  </div>
</template>
<script>
import utilsDate from '@/utils/date'
import formatDate from '@/utils/filters-date'
import cookieUtil from '@/utils/cookie'
import getEnv from '@/utils/getEnv'
import utilsLogin from '@/utils/loginUtils'
export default {
  name: 'orderlist',
  data() {
    return {
      dataList: [],
      status: '0',
      dataIndex: '',  //点中的下标
      claimStatus: '',
      currentTime: new Date().getTime(),
      showEmpty: '',
      emptyInfo: '',
      tabList: ['保障中', '已过期', '待支付'],
      orderItem: {},
      statusIndex: cookieUtil.getCookie('statusIndex')
    }
  },
  created() {
    let URL = window.location.href
    let requestObj = new Object();
    if(URL.indexOf("?") != -1) {
      let strArr = URL.split('?');
      let str = strArr[strArr.length - 1]
      let strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
        requestObj[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
      }
      if(requestObj.status) {
        this.statusIndex = requestObj.status
      }
    }
    if(this.statusIndex == null) {
      this.statusIndex = 0;
      cookieUtil.setCookie(this.statusIndex, 0, 0.03);
    }
    if(getEnv().useLocalToken) {
      this.getOrderListInfo(this.statusIndex);
    } else {
      let token_str = cookieUtil.getCookie('token_str')
      if (token_str =='null' || token_str == null) {
        if(this.GetRequest()) {
          this.getLoginWechat();
        } else {
          this.$router.push({path: '/', query: { skipUrl: window.location.href.split('#')[1]}})
        }
      } else {
        this.getOrderListInfo(this.statusIndex);
      }
    }
  },
  methods: {
    getOrderListInfo(index) {
      this.status = index;
      if(this.status==0) { 
        this.emptyInfo = '暂无有效保单'
      } else if(this.status==1) {
         this.emptyInfo = '暂无过期保单'
      } else {
        this.emptyInfo = '暂无保单'
      }
      this.$dialog.loading.open('加载中');
      this.$store.dispatch('getOrderListInfo',{
        data: {
          status: parseInt(this.status)+1
        },
        success: data => {
          this.$dialog.loading.close();
          if (data.result === 'SUCCESS') {
            this.dataList = data.retData.orderList;
            for(let i = 0; i < this.dataList.length; i++) {
              if(this.status==0 && this.dataList[i].compensate == 0) {
                this.dataList[i].claimStatus = '保障中';
              } else if(this.status==0 && this.dataList[i].compensate != 0) {
                this.dataList[i].claimStatus = '理赔中';
              } else if (this.status==1) {
                this.dataList[i].claimStatus = '已过期';
              } else {
                this.dataList[i].claimStatus = '去支付';
              }
            }
            //判断数据为空的时候
            if(this.dataList.length == 0) {
              this.showEmpty = '0';
            } else {
              this.showEmpty = '1';
            }
          } else {
            this.$dialog.toast({mes: data.retMsg, timeout: 1500});
          }
        }
      })
    },
    getOrderDetail(item,index) {
      this.orderItem = item;
      this.dataIndex = index;
      this.$router.push({
        path: '/orderdetails',
        query: {
          orderSysid: this.orderItem.orderSysid,
          productId: this.orderItem.productId,
          status: this.status,
          productName: this.orderItem.productName, 
          compensate: this.orderItem.compensate,
        }
      });
    },
    getOrderPayUrl(item, index) {
      this.orderItem = item;
      this.dataIndex = index;
      this.$store.dispatch('getOrderPayUrl', {
        data: {
          productId: this.orderItem.productId,
          orderSysid: this.orderItem.orderSysid
        },
        success: data => {
          if(data.result === 'SUCCESS') {
            const res = data.retData;
            const u = navigator.userAgent;
            if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
              window.open(res.payurl)
            } else {
              window.location.href = res.payurl
            }
          } else {
            this.$dialog.loading.close();
            this.$dialog.toast({mes: data.retMsg, timeout: 1500});
          }
        }
      })
    },
    getLoginWechat() {
      this.$store.dispatch('postLoginWechat', {
        data: {
          code: this.GetRequest()
        },
        success: data => {
          if (data.result === 'SUCCESS') {
            const result = data.retData
            cookieUtil.setCookie('token_str', result.tokenstr, 21)
            this.getOrderListInfo(this.statusIndex);
          } else {
            this.$dialog.toast({mes: data.retMsg, timeout: 1500});
          }
        }
      })
    },
    GetRequest() {
      let URL = window.location.href
      if( URL != undefined && URL.indexOf("=") != -1) {
        let subCode = URL.split('=')[1]
        let WeChatCode = subCode.split('&')[0]
        return WeChatCode;
      }
    },
    goMallFn() {
      cookieUtil.delCookie('token_str')
      this.$router.push('/')
    }
  },
  filters: {
    formatDate
  }
}
</script>
<style scoped>
@import url('../../assets/styles/public/order-summary/public');
.tabs-title {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}
.tabs-title .tab {
  padding: 0.6rem 0.8rem;
  font-size: 1.0rem;
}
.nav-active {
  border-bottom: 2px solid #0c8be7;
  color: #0c8be7
}
.list-title {
  height: 35px;
  background-color: #fff;
  line-height: 35px;
  border-bottom: 1px solid #ccc;
}
.list-contaion {
  background-color: #fff;
  margin: 0.5rem;
  box-shadow: 0px 2px 3px 0px #ebf7ff;
  text-align: left;
  padding: 0 0.5rem;
}
.order-title {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}
.order-title img {
  width: 6%;
  margin-right: 5px;
}
.order-info {
  padding: 0.8rem 0;
  line-height: 24px;
  color: #999;
  font-size: 0.9rem;
}
.order-state {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order-del {
  color: #0c8be7;
  white-space: nowrap;
}
.order-del .iconfont {
  font-size: 0.9rem;
  margin-left: -3px;
}
.list-empty {
  margin-top: 25%;
}
.list-empty .tip {
  color: #999;
  margin-bottom: 5%;
}
.list-empty img {
  width: 32%;
  margin-bottom: 3%;
}
.list-empty .into-btn {
  background-color: #0c8be7;
  color: #fff;
  border-radius: 5px;
  padding: 0.6rem 0;
  width: 40%;
  margin: 0 auto;
  display: block;
}
.status-two {
  margin-top: 5%;
  color: #999;
  font-size: 0.8rem;
}
</style>
