<template>
<div class="insure-contaion">
  <div class="home-insure" id="get-focus">
    <div class="insure-title padding">
      <div class="left">您为谁投保</div>
      <div class="right">
        <button class="select-btn relation" 
        v-for="item of relationList" 
        :key="item.id"
        :class="{'actived': item.id=='40'}"
        :disabled="item.id != '40'"
        @click="chooseRel(item.id)">{{item.rel}}</button>
      </div>
    </div>
    <div class="insure-msg">
      <div class="msg-title padding">投保人信息</div>
      <div class="msg-cont">
        <div class="msg">
          <label>投保人</label>
          <input type="text"
            v-model="holderName"
            placeholder="请输入投保人姓名"
            @focus="getFocus"
            @blur="closeFocus"/>
          <span class=iconfont v-show="errorIcon.hNameIcon">&#xe685;</span>
        </div>
        <div class="msg">
          <label>身份证号</label>
          <input type="text"
            v-model="holderId"
            placeholder="请输入投保人身份证号"
            @focus="getFocus"
            @blur="closeFocus"/>
          <span class=iconfont v-show="errorIcon.hIdIcon">&#xe685;</span>
        </div>
        <div class="msg">
          <label>手机号</label>
          <input type="tel"
            v-model="holderPhone"
            placeholder="请输入投保人手机号"
            @focus="getFocus"
            @blur="closeFocus"/>
          <span class=iconfont v-show="errorIcon.phoneIcon">&#xe685;</span>
        </div>
      </div>
    </div>
    <div class="insure-msg">
      <div class="suffer-msg">
        <div class="msg-title padding">被保人信息</div>
        <div class="msg-cont">
          <div class="msg">
            <label>被保人</label>
            <input type="text"
              v-model="insurerName"
              placeholder="请输入被保人姓名"
              @focus="getFocus"
              @blur="closeFocus"/>
              <span class=iconfont v-show="errorIcon.iNameIcon">&#xe685;</span>
          </div>
          <div class="msg">
            <label>身份证号</label>
            <input type="text"
              v-model="insurerId"
              placeholder="请输入被保人身份证号"
              @focus="getFocus"
              @blur="closeFocus"/>
            <span class=iconfont v-show="errorIcon.iIdIcon">&#xe685;</span>
          </div>
        </div>
      </div>
    </div>
    <div class="check-info padding">
      <div class="checkbox" @click="checkedHandel">
        <span class="iconfont" v-show="checkedValue">&#xe61b;</span>
      </div>
      <div>我已阅读
        <span style="color: #0c8be7" @click="showClause=true">《保险条款》</span>，
        <span style="color: #0c8be7" @click="showNotice=true">《投保须知》</span></div>
    </div>
    <div v-show="showError" class="error-msg">{{errorMsg}}</div>
  </div>
  <!-- 投保条款弹框 -->
  <yd-popup v-model="showClause" position="center" width="92%">
    <popclause :afferentClauseData="'eInsure'" @closeClause="showClause=false"></popclause>
  </yd-popup>
  <!-- 投保须知弹框 -->
  <yd-popup v-model="showNotice" position="center" width="92%">
    <popnotice :afferentNoticeData="'eInsure'" @closeNotice="showNotice=false"></popnotice>
  </yd-popup>
  <!-- 立即投保声明及告知弹框 -->
  <yd-popup v-model="inforNotice" position="center" width="92%">
    <div class="model-inform model-rate">
        <div class="rate">
          <div @click="toggleTab(0)" :class="{'model-active': selectedTab==0}">健康告知</div>
          <div @click="toggleTab(1)" :class="{'model-active': selectedTab==1}">投保声明</div>
        </div>
        <div class="textarea" v-show="selectedTab==0">
          1、被保险人出生时未有早产、难产、过期产、出生体重低于2公斤情况，未有窒息或缺氧史，未有先天性疾病、遗传性疾病或畸形，未有体重不增或增长缓慢情况；
          <br>2、被保险人最近2年内未因健康异常发生过住院或手术；未有体检医师或医生向被保险人提出复查、住院治疗或手术建议；
          <br>3、被保险人最近一年内没有参加飞行、深度潜水（超20米）、跳伞、拳击、赛车、特技表演的计划；
          <br>4、被保险人没有或被怀疑有下列健康异常：精神疾病、失聪、语言功能丧失、肢体缺损、疝、痔、结石、包块、肿物、息肉、恶性肿瘤、癌症、原位癌、白血病；
          <br>5、被保险人没有或被怀疑有下列循环及呼吸系统疾病：高血压、冠心病、脑梗死、脑缺血等脑血管疾病、主动脉疾病、心律失常、其他心脏病、椎基底动脉疾病、静脉曲张、外周动脉血管疾病；肺纤维化、支气管扩张、慢性支气管炎、肺气肿、哮喘、肺结核、咯血；
          <br>6、被保险人没有或被怀疑有下列内分泌及消化系统疾病：糖尿病、系统性红斑狼疮、甲状腺疾病、脑垂体疾病；肝炎、肝硬化、消化道溃疡、胰腺疾病、慢性胃炎、消化道出血、肠息肉、直肠炎、结肠炎、便血；
          <br>7、被保险人没有或被怀疑有下列血液、免疫及泌尿系统疾病：类风湿性疾病、重症肌无力、贫血、血友病、痛风、强直性脊柱炎、紫癜症；尿毒症、肾病综合征、肾炎、肾功能不全、血尿；
          <br>8、被保险人没有或被怀疑有下列肌肉、骨骼及神经系统疾病：颈椎病、腰椎间盘突出、腰肌劳损；癫痫、脊髓病变、帕金森病、慢性酒精中毒；
          <br>9、被保险人没有或被怀疑有下列五官疾病：白内障、青光眼、视网膜疾病、中耳炎；
          <br>10、被保险人未患有盆腔炎症、乳腺结节、乳腺增生、乳腺纤维腺瘤、子宫肌瘤、子宫内膜异位症、子宫内膜增生、卵巢囊肿、宫颈炎、宫颈纳囊、宫颈不典型增生；
          <br>11、被保险人过去没有被保险公司解除合同或投保、复效时被拒保、延期的情况。
        </div>
        <div class="textarea" v-show="selectedTab==1">
          <p class="avow-title">投保人在投保时已确认如下投保声明</p>
          <div>
            1、	本人（即投保人）已完整阅读并理解本产品的投保须知、保险条款、健康告知（若有）等内容，尤其是其中免除或减轻保险人责任的条款或约定（包括但不限于责任免除、投保人被保险人义务、免赔额（率）、保险赔偿等），本人已充分理解并接受上述内容，并同意以此作为订立保险合同的依据。
            <br>2、	投保时，本人已就该产品的保障内容及保险金额等情况向被保险人进行了明确说明，并征得其同意。投保时所填写的所有内容（包括所确认的健康告知内容，若有）均属实，如有隐瞒或不实告知，贵司有权解除保险合同且不退还保险费，并对于合同解除前发生的任何事故不承担任何责任。
            <br>3、	本人及被保险人（本人承诺已取得被保险人代为处理其个人信息的全权委托）同意贵司以提供本保险或与此相关的服务为目的，而收集或使用本人及被保险人的个人信息，无论该信息是从本次投保申请或其他渠道所获取。本人及被保险人理解并同意授权贵司及贵司合作伙伴为提升服务质量而可能查询、提供或使用本人及被保险人个人信息。本人及被保险人理解此声明自投保时生效，具有独立法律效力，不受保险合同效力状态变化的影响。
          </div>
        </div>
      <div class="confirm">
        <div class="handel" @click="partMatch">
          <span class="iconfont">&#xe629;</span>
          <span>以上部分符合</span>
        </div>
        <div class="handel" @click="getExetOrder">
          <span class="iconfont">&#xe62a;</span>
          <span>全部符合并支付</span>
        </div>
      </div>
    </div>
  </yd-popup>
  <!-- 立即投保底部fixed -->
  <div id="home-fixed" class="home-fixed">
    <div class="item left">
      <a class="customer" :href="'tel:' + '4000-121212'">
        <p class="iconfont">&#xe624;</p>
        <p style="font-size: 0.8rem;">客服</p>
      </a>
      <span class="price">￥265元</span>
    </div>
    <div class="item right" @click="submit" >
      <button>立即投保</button>
    </div>
  </div>
</div>
</template>
<script>
import utilsDate from '@/utils/date'
import getEnv from '@/utils/getEnv'
import getParams from '@/utils/get-params'
import cookieUtil from '@/utils/cookie'
import checkUtil from '@/utils/common-check'
import popclause from '@/components/public-components/popup/clause'
import popnotice from '@/components/public-components/popup/notice'
import $ from 'jquery'
export default {
  name: 'ehomeinsure',
  components: {
    popclause,
    popnotice
  },
  data () {
    return {
      selectedTab: '0',
      selectedSec: '1',
      selectedRel: '40',
      inforNotice: false,
      showError: false,
      checkedValue: false,
      showClause: false,
      showNotice: false,
      errorMsg: '',
      relationList: [
        { id: '01', rel: '自己' }, 
        { id: '10', rel: '配偶' },
        { id: '40', rel: '子女' },
        { id: '50', rel: '父母' },
      ],
      holderGender: '',
      insurerGender: '',
      startDate: '',
      holderName: '',
      holderId: '',
      holderPhone: '',
      insurerName: '',
      insurerId: '',
      redirectUrl: '',
      errorIcon: {
        hNameIcon: false,
        hIdIcon: false,
        phoneIcon: false,
        iNameIcon: false,
        iIdIcon: false
      },
      currentDate: utilsDate.formatDate.format(new Date(),'yyyMMdd'),
    }
  },
  mounted() {
    let URL = decodeURIComponent(window.location.href)
    if (getParams.getURLParams(URL).source == 'mall') {
      this.redirectUrl = getEnv().redirectUrl+'/#/payment'+'?source=mall&product=exet&payState=success'
    } else {
      this.redirectUrl = getEnv().redirectUrl+'/#/payment'+'?source=self&product=exet&payState=success'
    }
    this.startDate = checkUtil.commonCheck.getDate(3, 1);
    this.endDate = checkUtil.commonCheck.getDate(3, 2);
  },
  methods: {
    getFocus() {
      let homeFixed = document.getElementById('home-fixed')
      homeFixed.style.position = 'absolute'
    },
    closeFocus() {
      let homeFixed = document.getElementById('home-fixed')
      homeFixed.style.position = 'fixed'
      $('html,body').animate({ scrollTop: $("#get-focus").offset().top});
    },
    partMatch() {
      this.inforNotice = false;
      this.showError = true;
      this.errorMsg = '很抱歉你暂时无法投保，推荐投保其他产品'
      setTimeout(() => {
        this.showError = false;
      }, 3000);
    },
    chooseSec(id) {
      this.selectedSec = id
    },
    toggleTab(num) {
      this.selectedTab = num;
    },
    chooseRel(id) {
      this.selectedRel = id;
    },
    checkedHandel() {
      this.checkedValue = !this.checkedValue
    },
    submit() {
      $('html,body').animate({ scrollTop: $("#get-focus").offset().top});
      if(checkUtil.commonCheck.checkNull(this.holderName)) {
        this.popError('请填写投保人姓名');
        this.errorIcon.hNameIcon=true
        return;
      } else {this.errorIcon.hNameIcon=false}
      if(checkUtil.commonCheck.checkNull(this.holderId)) {
        this.popError('请填写投保人身份证号');
        this.errorIcon.hIdIcon=true
        return;
      } else {this.errorIcon.hIdIcon=false}
      if(checkUtil.commonCheck.checkRegular(1, this.holderId)) {
        this.popError('请填写投保人正确身份证号');
        this.errorIcon.hIdIcon=true
        return;
      } else {this.errorIcon.hIdIcon=false}
      if(checkUtil.commonCheck.checkAge(this.currentDate, this.holderId, 18, -1)) {
        this.popError('投保人年龄必须在18（含）周岁以上');
        this.errorIcon.hIdIcon=true
        return;
      } else {this.errorIcon.hIdIcon=false}
      if(checkUtil.commonCheck.checkNull(this.holderPhone)) {
        this.popError('请填写投保人手机号');
        this.errorIcon.phoneIcon=true
        return;
      } else {this.errorIcon.phoneIcon=false}
      if(checkUtil.commonCheck.checkRegular(2, this.holderPhone)) {
        this.popError('请填写投保人正确手机号');
        this.errorIcon.phoneIcon=true
        return;
      } else {this.errorIcon.phoneIcon=false}
      if(checkUtil.commonCheck.checkNull(this.insurerName)) {
        this.popError('请填写被保人姓名');
        this.errorIcon.iNameIcon=true
        return;
      } else {this.errorIcon.iNameIcon=false}
      if(checkUtil.commonCheck.checkNull(this.insurerId)) {
        this.popError('请填写被保人证件号');
        this.errorIcon.iIdIcon=true
        return;
      } else {this.errorIcon.iIdIcon=false}
      if(checkUtil.commonCheck.checkRegular(1, this.insurerId)) {
        this.popError('请填写被保人正确身份证号');
        this.errorIcon.iIdIcon=true
        return;
      } else {this.errorIcon.iIdIcon=false}
      if(checkUtil.commonCheck.checkAge(this.currentDate, this.insurerId, 3, 17))  {
        this.popError('本产品只限3（含）周岁-17周岁（含）儿童购买');
        this.errorIcon.iIdIcon=true
        return;
      } else {this.errorIcon.iIdIcon=false}
      this.holderGender = '0'+ checkUtil.commonCheck.judgeSexRel(this.holderId);
      this.insurerGender = '0'+ checkUtil.commonCheck.judgeSexRel(this.insurerId);
      if(this.checkedValue == false) {
        this.popError('请勾选我已阅读《保险条款》，《投保须知》');
        return;
      }
      this.inforNotice = true
    },
    popError(message) {
      this.showError = true;
      this.errorMsg = message;
      setTimeout(() => {
        this.showError = false;
      }, 2000);
    },
    getExetOrder() {
      this.$dialog.loading.open('验证数据中...');
      this.$store.dispatch('getEanOrder', {
        data: {
          premium: 26500,
          startDate: this.startDate,
          endDate: this.endDate,
          holderName: this.holderName,
          holderId: this.holderId,
          holderPhone: this.holderPhone,
          holderBirthDate: this.holderId.substring(6,10)+"-"+ this.holderId.substring(10,12)+"-"+this.holderId.substring(12,14),
          holderGender: this.holderGender,

          insurerName: this.insurerName,
          insurerId: this.insurerId,
          insurerBirthDate: this.insurerId.substring(6,10)+"-"+ this.insurerId.substring(10,12)+"-"+this.insurerId.substring(12,14),
          insurerGender: this.insurerGender,
          type: 'exet',
          redirectUrl: this.redirectUrl,
          relation: this.selectedRel
        },
        success: data => {
          if(data.result === 'SUCCESS') {
            const res = data.retData;
            const u = navigator.userAgent;
            if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
              window.open(res.payUrl)
            } else {
              window.location.href = res.payUrl
            }
          } else {
            this.$dialog.loading.close();
            this.inforNotice = false
            this.$dialog.toast({mes: data.retMsg, timeout: 1500});
          }
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('../../../../../assets/styles/public/public-pop');
@import url('../../../../../assets/styles/public/ean-project/public-insure');
</style>