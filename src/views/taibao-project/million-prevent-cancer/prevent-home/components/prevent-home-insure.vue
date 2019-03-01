<template>
<div class="insure-contaion">
  <div class="home-insure" id="get-focus">
    <div class="insure-title padding">
      <div class="left">您为谁投保</div>
      <div class="right">
        <button class="select-btn relation" 
        v-for="(item,index) of relationList" 
        :key="index"
        :class="{'actived': selectedRel==index }"
        @click="chooseRel(index)">{{item}}</button>
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
            @blur="closeFocus(0)"/>
          <span class=iconfont v-show="errorIcon.hNameIcon">&#xe685;</span>
        </div>
        <div class="msg">
          <label>身份证号</label>
          <input type="text"
            v-model="holderId"
            placeholder="请输入投保人身份证号"
            @focus="getFocus"
            @blur="closeFocus(1)"/>
          <span class=iconfont v-show="errorIcon.hIdIcon">&#xe685;</span>
        </div>
        <div class="msg">
          <label>手机号</label>
          <input type="tel"
            v-model="holderPhone"
            placeholder="请输入投保人手机号"
            @focus="getFocus"
            @blur="closeFocus(0)"/>
          <span class=iconfont v-show="errorIcon.phoneIcon">&#xe685;</span>
        </div>
      </div>
    </div>
    <div class="insure-msg">
      <div class="suffer-msg" v-show="selectedRel!='0'">
        <div class="msg-title padding">被保人信息</div>
        <div class="msg-cont">
          <div class="msg">
            <label>被保人</label>
            <input type="text"
              v-model="insurantName"
              placeholder="请输入被保人姓名"
              @focus="getFocus"
              @blur="closeFocus(0)"/>
              <span class=iconfont v-show="errorIcon.iNameIcon">&#xe685;</span>
          </div>
          <div class="msg">
            <label>身份证号</label>
            <input type="text"
              v-model="insurantId"
              placeholder="请输入被保人身份证号"
              @focus="getFocus"
              @blur="closeFocus(1)"/>
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
                :class="{'plan-active': selectEditId==index}">{{item}}</div>
      </div>
    </div>
    <div class="footer-content padding">
        <div class="rate-title">保费与被保人有无社保，年龄相关，详见<span style="color: #0c8be7" @click="showRate=true">《完整费率表》</span></div>
        <div class="check-info">
        <div class="checkbox" @click="checkedHandel">
            <span class="iconfont" v-show="checkedValue">&#xe61b;</span>
        </div>
        <div>我已阅读
            <span style="color: #0c8be7" @click="showClause=true">《保险条款》</span>，
            <span style="color: #0c8be7" @click="showNotice=true">《投保须知》</span></div>
        </div>
    </div>
    <div v-show="showError" class="error-msg">{{errorMsg}}</div>
  </div>
  <!-- 投保条款弹框 -->
  <yd-popup v-model="showClause" position="center" width="92%">
    <popclause :afferentClauseData="'prevent'" @closeClause="showClause=false"></popclause>
  </yd-popup>
  <!-- 投保须知弹框 -->
  <yd-popup v-model="showNotice" position="center" width="92%">
    <popnotice :afferentNoticeData="'prevent'" @closeNotice="showNotice=false"></popnotice>
  </yd-popup>
  <!-- 费率表 -->
  <yd-popup v-model="showRate" position="center" width="92%">
    <poprate :afferentRateData="'prevent'" @closeRate="showRate=false"></poprate>
  </yd-popup>
  <!-- 投保时告知 -->
  <yd-popup v-model="inforNotice" position="center" width="92%">
    <div class="model-inform model-rate">
        <div class="rate">
          <div @click="toggleTab(0)" :class="{'model-active': selectedTab==0}">健康告知</div>
          <div @click="toggleTab(1)" :class="{'model-active': selectedTab==1}">投保声明</div>
        </div>
        <div class="textarea" v-show="selectedTab==0">
          需对以下问题进行告知，如任意一项告知为“是”，则不接受其投保申请：
          <br>（1）被保险人在最近两年内，接受X光、超声波、CT、核磁共振、心电图、胃镜、肠镜等内窥镜、病理活检、肿瘤标志物等检查，检查结果未提示异常或未发现有肿物、息肉、囊肿、结节、赘生物或新生物， 
          <br>（2）被保险人在最近一年内没有以下身体不适症状：
          <br> 反复出现胸痛、心慌、晕厥、抽搐、头痛、咳嗽、咳痰、咯血、气喘、呼吸困难、吞咽困难、吐血、肝区疼痛、黄疸、便血、黑便、腹痛、反酸、呕吐、腹泻、血尿、蛋白尿、排尿困难、尿潴留、皮下瘀斑、紫癜、鼻出血；视力明显下降（近视800度以上）；持续两周以上发热；良恶性质未确诊的肿块；消瘦（体重减轻5公斤以上）。
          <br>（3）被保险人目前或过往未曾经患有以下疾病，不存在下列情况：
          <br>  a.恶性肿瘤、白血病、癌前病变、原位癌、类癌、手术后组织病理活检异常（恶性或交界性）
          <br>  b.肝炎、肝硬化、慢性萎缩性胃炎、胆囊息肉、HIV感染、半年内新发现的淋巴结肿大
          <br>（4）如被保险人为女性，没有子宫异常增大、宫颈上皮内瘤变（CIN）、HPV阳性、不规则的阴道流血或排液、恶性葡萄胎、乳房皮肤及乳头有不明原因的凹陷、脱屑、变形、乳头溢液。
          <br>（5）被保险人吸烟每天不超过40支，或者饮酒不过量（饮酒过量指的是：啤酒超过1500ml/天，或者白酒超过150ml/天，或者红酒或黄酒超过350ml/天）。
          <br>（6）被保险人的近亲属（父母、子女、兄弟、姐妹）中未发现2名及以上的成员在60周岁前罹患恶性肿瘤。
          <br>（7）被保险人目前未从事高危职业（职业分类表中5、6、特定类职业），或者所从事的工作及工作环境与石棉生产、砷加工、镉、煤焦油、制革、制铝、品红制造、甲醛、异丙醇、石棉粉、芥子气、苯及及其有机制品、氯乙烯、放射线等无关。
          <br>（8）被保险人未曾被保险公司拒保、延期；被保险人未曾向保险公司递交重大疾病、癌症、心脑血管疾病、糖尿病的理赔申请。
        </div>
        <div class="textarea" v-show="selectedTab==1">
          <p class="avow-title">《投保人声明》</p>
          <div>
            1、本人声明就贵公司提出的询问据实告知且所填写的各项内容均属实，可作为贵公司签发保险单的依据，并作为保险合同的组成部分。 如有隐瞒或告知不实，贵公司有权解除本保险合同，并对合同解除前发生的任何保险事故均不负保险金给付责任。 
            <br>2、本人同意贵公司通过电话、手机（包括手机短信）、E-mail、ＱＱ、微博、微信、信件提供保险信息服务。 
            <br>3、本人同意中国太保{指中国太平洋保险（集团）股份有限公司及其直接或间接控股的子公司}以及其认为业务必要而委托的第三方将本人提供的全部资料用于为本人提供高质量的服务和推荐产品。中国太保及第三方对本人个人信息承担保密义务。中国太保采集客户信息特别是联系电话和联系地址的用途，包括但不限于计算保费、核保、寄送保单和客户回访等。 
            <br>4、本人已认真阅读并同意接受保险条款、投保须知的全部内容，且同意将电子保单发出之日的次日视为客户签收日。同意如发生有关保险合同等方面的分歧，以贵公司的电子保单等数据电文作为判断本保险合同的有效凭证，该凭证具有完全证据效力。
          </div>
        </div>
      <div class="confirm">
        <div class="handel" @click="partMatch">
          <span class="iconfont">&#xe629;</span>
          <span>以上部分符合</span>
        </div>
        <div class="handel" @click="getBwfaOrderData">
          <span class="iconfont">&#xe62a;</span>
          <span>全部符合并支付</span>
        </div>
      </div>
    </div>
  </yd-popup>
  <div id="home-fixed" class="home-fixed">
    <div class="item left">
      <a class="customer" :href="'tel:' + '10108686'">
        <p class="iconfont">&#xe624;</p>
        <p style="font-size: 0.8rem;">客服</p>
      </a>
      <span class="price">￥{{premium}}元</span>
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
import poprate from '@/components/public-components/popup/rate'
export default {
  name: 'medicalInsure',
  components: {
    popclause,
    popnotice,
    poprate,
  },
  data () {
    return {
      selectEditId: '0',
      selectedTab: '0',
      selectedSec: '1',
      selectedRel: '0',
      showClause: false,
      showNotice: false,
      showRate: false,
      inforNotice: false,
      showError: false,
      checkedValue: false,
      errorMsg: '',
      relationList: [ '自己', '配偶', '子女', '父母'],
      planTitle:['经济版', '经典版', '尊享版'],
      socialSec: [
        {id: 1, name:'有社保'},
        {id: 0, name:'无社保'}
        ],
      successUrl: '',
      failUrl: '',
      holderGender: '',
      insurantGender: '',
      holderBirthday: '',
      insurantBirthday: '',
      startDate: '',
      holderName: '',
      holderId: '',
      holderPhone: '',
      insurantName: '',
      insurantId: '',
      premium: '31',
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
      this.successUrl = getEnv().redirectUrl+'/#/payment'+'?source=mall&product=bwfa&payState=success'
      this.failUrl = getEnv().redirectUrl+'/#/payment'+'?source=mall&product=bwfa&payState=fail'
    } else {
      this.successUrl = getEnv().redirectUrl+'/#/payment'+'?source=self&product=bwfa&payState=success'
      this.failUrl = getEnv().redirectUrl+'/#/payment'+'?source=self&product=bwfa&payState=fail'
    }
    this.startDate = checkUtil.commonCheck.getDate(1, 1);
    this.endDate = checkUtil.commonCheck.getDate(1, 2);
  },
  methods: {
    selectPlan(id) {
      this.selectEditId = id;
      this.computePremiun()
    },
    toggleTab(num) {
      this.selectedTab = num;
    },
    getFocus() {
      let homeFixed = document.getElementById('home-fixed')
      homeFixed.style.position = 'absolute'
    },
    closeFocus(num) {
      if(num==0) {
        this.getDomElement()
      } else {
        this.getDomElement()
        this.computePremiun()
      }
    },
    getDomElement() {
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
    chooseRel(index) {
      this.selectedRel = index;
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
      if(this.selectedRel=='0') {
        this.insurantName = this.holderName;
        this.insurantId = this.holderId;
      }
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
      if(checkUtil.commonCheck.checkNull(this.insurantName)) {
        this.popError('请填写被保人姓名');
        this.errorIcon.iNameIcon=true
        return;
      } this.errorIcon.iNameIcon=false
      if(checkUtil.commonCheck.checkNull(this.insurantId)) {
        this.popError('请填写被保人证件号');
        this.errorIcon.iIdIcon=true
        return;
      }
      if(checkUtil.commonCheck.checkRegular(1, this.insurantId)) {
        this.popError('请填写被保人正确身份证号');
        this.errorIcon.iIdIcon=true
        return;
      }
      if(this.selectedRel != '2' && checkUtil.commonCheck.checkAge(this.currentDate, this.insurantId, 18, -1)) {
        this.popError('被保人小于18周岁，则仅限给子女投保');
        return;
      }

      this.holderGender = checkUtil.commonCheck.judgeSexRel(this.holderId);
      this.insurantGender = checkUtil.commonCheck.judgeSexRel(this.insurantId);
      let holderAge = this.holderId.substring(6,14)
      let insurantAge = this.insurantId.substring(6,14)
      // TODO 被保人限制18-80周岁 45周岁及以下最高300w 55 200w 56以及之上 100w
      if(this.selectedRel != '0' && checkUtil.commonCheck.checkAge(this.currentDate, this.insurantId, 18, 80)) {
        this.popError('本产品只限18周岁（含）-80周岁（含）人员购买');
        this.errorIcon.iIdIcon=true
        return;
      } this.errorIcon.iIdIcon=false;
      if(this.selectEditId == 2 && checkUtil.commonCheck.checkAge(this.currentDate, this.insurantId, -1, 45)) {
        this.popError('本产品尊享版只限45周岁（含）及以下人员购买');
        this.errorIcon.iIdIcon=true
        return;
      } this.errorIcon.iIdIcon=false;

      if(this.selectEditId == 1 && checkUtil.commonCheck.checkAge(this.currentDate, this.insurantId, -1, 55)) {
        this.popError('本产品经典版只限55周岁（含）及以下人员购买');
        this.errorIcon.iIdIcon=true
        return;
      } this.errorIcon.iIdIcon=false;

      if(this.selectedRel=='0' || this.selectedRel=='1') {
        this.relation = this.selectedRel
      } else {
        if(this.holderGender == '1' && this.insurantGender == '1') {
          this.relation = '1'
        } else if(this.holderGender == '2' && this.insurantGender == '2') {
          this.relation = '4'
        } else if((this.holderGender == '1' && holderAge-insurantAge <= 0)
          || (this.holderGender == '2' && holderAge-insurantAge > 0)) {
            this.relation = '2'
        } else {
          this.relation = '3'
        }
      }
      if(this.checkedValue == false) {
        this.popError('请勾选我已阅读《保险条款》，《投保须知》');
        return;
      }
      this.computePremiun()
      this.inforNotice = true
    },
    computePremiun() {
      if(this.selectedRel == '0' && this.holderId != '') {
        this.insurantId = this.holderId
      }
      if(this.insurantId == '') {
        return;
      }
      /** 男性保费 */
      let premiun_man = [
        '33', '40', '63', '110', '192', '319', '591', '1051', '1656', '2336', 
        '3129', '3875', '4609'
      ]
      /** 女性保费 */
      let premiun_woman = [
        '31', '61', '122', '230', '397', '631', '894', '1097', '1339', '1705', 
        '2359', '3040', '3457'
      ]
      let index = 0;
      let insurantAge = this.insurantId.substring(6,14)
      let ageShort = this.currentDate - insurantAge;
      if(ageShort < 210000) {
        index = 0;
      } else {
        index = ageShort / 50000; 
        index = index - 3;
      }
      index = parseInt(index)
      this.insurantGender = checkUtil.commonCheck.judgeSexRel(this.insurantId);
      if(this.insurantGender == 1) {
        this.premium = premiun_man[index] * (this.selectEditId + 1)
      } else {
        this.premium = premiun_woman[index] * (this.selectEditId + 1)
      }
    },
    popError(message) {
      this.showError = true;
      this.errorMsg = message;
      setTimeout(() => {
        this.showError = false;
      }, 2000);
    },
    getBwfaOrderData() {
      this.$dialog.loading.open('验证数据中...');
      this.$store.dispatch('postTbbwfaOrder', {
        data: {
          premium: this.premium * 100,
          amount: 10000000 * (this.selectEditId + 1),
          startDate: this.startDate,
          endDate: this.endDate,
          productType: (this.selectEditId + 1),

          holderName: this.holderName,
          holderId: this.holderId,
          holderPhone: this.holderPhone,
          holderBirthday: this.holderId.substring(6,10)+"-"+ this.holderId.substring(10,12)+"-"+this.holderId.substring(12,14),
          holderGender: this.holderGender,

          insurantName: this.insurantName,
          insurantId: this.insurantId,
          insurantBirthday: this.insurantId.substring(6,10)+"-"+ this.insurantId.substring(10,12)+"-"+this.insurantId.substring(12,14),
          insurantGender: this.insurantGender,
          relation: this.relation,
          beneficiary: '1',  //受益人
          payWayId: '2',
          failUrl: this.failUrl,
          successUrl: this.successUrl,
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
.footer-content {
  text-align: left;
  font-size: 0.9rem;
}
.footer-content .rate-title {
  letter-spacing: -1px;
  margin-bottom: 2%;
}
.clickable-pop {
  color: #0c8be7
}

.plan-item {
  margin-bottom: 0;
}
</style>