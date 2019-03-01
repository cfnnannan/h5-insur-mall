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
              @focus="getFocus"/>
            <span class=iconfont v-show="errorIcon.iIdIcon">&#xe685;</span>
          </div>
        </div>
      </div>
    </div>
    <div class="plan-contaion">
      <div class="plan-select">选择保障</div>
      <div class="plan-title">
        <div class="plan-item" 
            v-for="(item,index) of planTitle" 
            :key="index"
            @click="selectPlan(index)"
            :class="{'plan-active': selectPlanId==index}">{{item}}</div>
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
    <popclause :afferentClauseData="'lInsure'" @closeClause="showClause=false"></popclause>
  </yd-popup>
  <!-- 投保须知弹框 -->
  <yd-popup v-model="showNotice" position="center" width="92%">
    <popnotice :afferentNoticeData="'lInsure'" @closeNotice="showNotice=false"></popnotice>
  </yd-popup>
  <yd-popup v-model="inforNotice" position="center" width="92%">
    <div class="model-inform model-rate">
        <div class="rate">
          <div @click="toggleTab(0)" :class="{'model-active': selectedTab==0}">健康告知</div>
          <div @click="toggleTab(1)" :class="{'model-active': selectedTab==1}">投保声明</div>
        </div>
        <div class="textarea" v-show="selectedTab==0">
          1、您的孩子是否出现过以下一种或几种情况:出生时体重小于2.5公斤;出生时曾有早产、难产;出生时曾有窒息、产伤、新生儿缺血缺氧性脑病。
          <br>2、您的孩子在近三个月内是否出现过以下症状:不明原因的发热、头晕、气喘、腹痛、紫癜、视力或听力障碍、身体包块或肿物、消瘦(体重下降超过2公斤)、贫血、出血倾向(如牙龈、鼻腔出血或皮下有出血点)、血液检查白细胞异常增高或过低。
          <br>3、您的孩子目前是否患有或者曾经患有、被怀疑患有以下的疾病、残疾及器官功能障碍:
          <br>（1）先天性畸形、变形或染色体异常、先天性或遗传性疾病(如先天性心脏病、侏儒症、蚕豆症、先天性聋哑、先天性器官缺失或发育不全等、脑积水、无脑儿、脊柱裂、先天性无肛门等); 
          <br>（2）残疾及功能障碍(聋哑、高度近视(800度以上)或失明、语言障碍、肢体残缺畸形或者运动功能障碍); 
          <br>（3）心脑血管疾病、川崎病、神经系统及精神疾病(脑炎、脑膜炎、严重脑损伤、智障、癫痫、多发性硬化、重症肌无力、进行性脊肌萎缩症、抑郁症); 
          <br>（4）其他(恶性肿瘤、颅内良性肿瘤、糖尿病、肝炎、肝硬化、肾病、白血病、再生障碍性贫血、艾滋病)
          <br>4、您的孩子最近两年内曾否因血液问题或诊断为血液疾病而接受过任何住院或手术治疗?
          <br>5、您的孩子过去是否被保险公司解除合同或投保、复效时被拒保、延期或有任何形式的人身索赔?
          <br>6、您的孩子是否有过血液化验、X光、CT、核磁共振、心电图、活检、超声、内窥镜、乳腺照相等检查结果异常?
          <br>7、您的孩子家族成员中是否有白血病发生史?
          <br>8、您的孩子最近两年是否接触过有害化学物质和放射性物质?
          重要提示：我们就您和被保险人的有关情况提出询问的，您应当如实告知。如果您故意或因重大过失未履行前款如实告知义务，足以影响我们决定是否同意承保或提高保险费率的，我们有权解除保险合同，并对保险合同解除前发生的保险事故不承担赔偿/给付保险金责任。
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
        <div class="handel" @click="getSebxbOrder">
          <span class="iconfont">&#xe62a;</span>
          <span>全部符合并支付</span>
        </div>
      </div>
    </div>
  </yd-popup>
  <div id="home-fixed" class="home-fixed">
    <div class="item left">
      <a class="customer" :href="'tel:' + '4000-121212'">
        <p class="iconfont">&#xe624;</p>
        <p style="font-size: 0.8rem;">客服</p>
      </a>
      <span class="price">￥{{premium/100}}元</span>
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
  name: 'lhomeinsure',
  components: {
    popclause,
    popnotice
  },
  created() {
    this.$root.eventHub.$on('scheme',(scheme) => {
      if(scheme == 0) {
        this.scheme = 'one'
        // this.premium = 1600
      } else if(scheme == 1) {
        this.scheme = 'two'
        //  this.premium = 3200
      } else if(scheme == 2) {
        this.scheme = 'three'
        // this.premium = 4800
      } else if(scheme == 3){
        this.scheme = 'four'
        // this.premium = 6400
      } else {
        this.scheme = 'five'
        // this.premium = 8000
      }
    });
  },
  data () {
    return {
      selectedTab: '0',
      selectedSec: '1',
      selectedRel: '40',
      inforNotice: false,
      showClause: false,
      showNotice: false,
      showError: false,
      checkedValue: false,
      errorMsg: '',
      relationList: [
        { id: '01', rel: '自己' }, 
        { id: '10', rel: '配偶' },
        { id: '40', rel: '子女' },
        { id: '50', rel: '父母' },
      ],
      selectPlanId: '0',
      planTitle:['方案一', '方案二', '方案三', '方案四', '方案五'],
      holderGender: '',
      insurerGender: '',
      startDate: '',
      holderName: '',
      holderId: '',
      scheme: '',
      holderPhone: '',
      insurerName: '',
      insurerId: '',
      premium: '1600',
      redirectUrl: '',
      errorIcon: {
        hNameIcon: false,
        hIdIcon: false,
        phoneIcon: false,
        iNameIcon: false,
        iIdIcon: false
      },
      currentDate: utilsDate.formatDate.format(new Date(),'yyyMMdd')
    }
  },
  mounted() {
    let URL = decodeURIComponent(window.location.href)
    if (getParams.getURLParams(URL).source == 'mall') {
      this.redirectUrl = getEnv().redirectUrl+'/#/payment'+'?source=mall&product=sebxb&payState=success'
    } else {
      this.redirectUrl = getEnv().redirectUrl+'/#/payment'+'?source=self&product=sebxb&payState=success'
    }
    this.startDate = checkUtil.commonCheck.getDate(1, 1);
    this.endDate = checkUtil.commonCheck.getDate(1, 2);
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
    selectPlan(id) {
      this.selectPlanId = id;
      if(this.selectPlanId == 0) {
        this.scheme = 'one'
        this.premium = 1600
      } else if(this.selectPlanId == 1) {
        this.scheme = 'two'
        this.premium = 3200
      } else if(this.selectPlanId == 2) {
        this.scheme = 'three'
        this.premium = 4800
      } else if(this.selectPlanId == 3){
        this.scheme = 'four'
        this.premium = 6400
      } else {
        this.scheme = 'five'
        this.premium = 8000
      }
    },
    submit() {
      $('html,body').animate({ scrollTop: $("#get-focus").offset().top});
      if(checkUtil.commonCheck.checkNull(this.holderName)) {
        this.popError('请填写投保人姓名');
        this.errorIcon.hNameIcon=true
        return;
      } this.errorIcon.hNameIcon=false
      if(checkUtil.commonCheck.checkNull(this.holderId)) {
        this.popError('请填写投保人身份证号');
        this.errorIcon.hIdIcon=true
        return;
      }
      if(checkUtil.commonCheck.checkRegular(1, this.holderId)) {
        this.popError('请填写投保人正确身份证号');
        this.errorIcon.hIdIcon=true
        return;
      }
      if(checkUtil.commonCheck.checkAge(this.currentDate, this.holderId, 18, -1)) {
        this.popError('投保人年龄必须在18（含）周岁以上');
        this.errorIcon.hIdIcon=true
        return;
      } this.errorIcon.hIdIcon=false
      if(checkUtil.commonCheck.checkNull(this.holderPhone)) {
        this.popError('请填写投保人手机号');
        this.errorIcon.phoneIcon=true
        return;
      }
      if(checkUtil.commonCheck.checkRegular(2, this.holderPhone)) {
        this.popError('请填写投保人正确手机号');
        this.errorIcon.phoneIcon=true
        return;
      } this.errorIcon.phoneIcon=false
      if(checkUtil.commonCheck.checkNull(this.insurerName)) {
        this.popError('请填写被保人姓名');
        this.errorIcon.iNameIcon=true
        return;
      } this.errorIcon.iNameIcon=false
      if(checkUtil.commonCheck.checkNull(this.insurerId)) {
        this.popError('请填写被保人证件号');
        this.errorIcon.iIdIcon=true
        return;
      }
      if(checkUtil.commonCheck.checkRegular(1, this.insurerId)) {
        this.popError('请填写被保人正确身份证号');
        this.errorIcon.iIdIcon=true
        return;
      }
      this.holderGender = '0'+ checkUtil.commonCheck.judgeSexRel(this.holderId);
      this.insurerGender = '0'+ checkUtil.commonCheck.judgeSexRel(this.insurerId);
      const currentDate = new Date()
      let currentDateSub = currentDate.getTime() - 1000 * 60 * 60 * 24 * 30;
      let currentDateSubStr = utilsDate.formatDate.formatTime(currentDateSub, 'yyyyMMdd');
      if(currentDateSubStr - this.insurerId.substring(6, 14) < 0) {
        this.popError('本产品只限出生30天（含）-9周岁（含）儿童购买');
        this.errorIcon.iIdIcon=true
        return;
      }
      if(checkUtil.commonCheck.checkAge(this.currentDate, this.insurerId, -1, 9)) {
        this.popError('本产品只限出生30天（含）-9周岁（含）儿童购买');
        this.errorIcon.iIdIcon=true
        return;
      } this.errorIcon.iIdIcon=false;
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
    getSebxbOrder() {
      this.$dialog.loading.open('验证数据中...');
      this.$store.dispatch('getEanOrder', {
        data: {
          premium: this.premium,
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
          type: 'sebxb',
          scheme: this.scheme,
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
@import url('../../../../../assets/styles/public/ean-project/public-plan-select');
.plan-item:nth-child(4) {
  margin-bottom: 0;
}
.plan-item:nth-child(5) {
  margin-bottom: 0;
}

</style>