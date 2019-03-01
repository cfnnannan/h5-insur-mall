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
      <div class="judge-msg">
          <label>年免赔额</label>
          <div class="right">
            <select dir="rtl" v-model="deductibleIndex" @change="computePremiun">
                <option 
                  v-for="(item,index) of deductibleList" 
                  :key="index" 
                  :value="index">{{item / 100}}元</option>
            </select>
            <span class="iconfont">&#xe65a;</span>
          </div>
      </div>
      <div class="judge-msg">
          <label>是否有社保</label>
          <div class="right">
            <div class="select-btn" 
              v-for="item of socialSec"
              :key="item.id"
              @click="chooseSec(item.id)"
              :class="{'actived': selectedSec==item.id}">{{item.name}}
            </div>
          </div>
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
    <popclause :afferentClauseData="'medical'" @closeClause="showClause=false"></popclause>
  </yd-popup>
  <!-- 投保须知弹框 -->
  <yd-popup v-model="showNotice" position="center" width="92%">
    <popnotice :afferentNoticeData="'medical'" @closeNotice="showNotice=false"></popnotice>
  </yd-popup>
    <!-- 费率表 -->
  <yd-popup v-model="showRate" position="center" width="92%">
    <poprate :afferentRateData="'medical'" @closeRate="showRate=false"></poprate>
  </yd-popup>
  <!-- 投保时弹框 -->
  <yd-popup v-model="inforNotice" position="center" width="92%">
    <div class="model-inform model-rate">
        <div class="rate">
          <div @click="toggleTab(0)" :class="{'model-active': selectedTab==0}">健康告知</div>
          <div @click="toggleTab(1)" :class="{'model-active': selectedTab==1}">投保声明</div>
        </div>
        <div class="textarea" v-show="selectedTab==0">
            需对以下问题进行告知，如任意一项告知为“是”，则不接受其投保申请：
          <br>（1） 被保险人职业是否不属于《太保安联健康保险职业类别表》中的1-4类人员。
          <br>（2）被保险人是否曾经被保险公司拒保、延期、加费或除外责任承保？
          <br>（3）被保险人过去2年内，接受X光、超声波、CT、核磁共振、心电图、胃镜、肠镜等内窥镜、病理活检、验血、尿等检查，检查结果是否提示异常？过去2年内是否曾有住院史（不包括剖腹产、顺产、鼻炎、急性胃肠炎、肺炎、上呼吸道感染住院）？
          <br>（4）被保险人是否正在或曾经患有以下疾病或存在下列情况：
          <br>良/恶性肿瘤、白血病、3级以上高血压（收缩压大于180mmHg、舒张压大于110mmHg）、冠心病、心肌梗死、风湿性心脏病、肺源性心脏病、主动脉疾病、心肌病、心脏瓣膜疾病、心功能不全二级以上、脑梗死、脑出血、帕金森氏病、癫痫、阿尔茨海默病、瘫痪、重症肌无力、运动神经元病变、多发性硬化、慢性阻塞性肺病、慢性呼吸功能衰竭、肾炎、肾功能不全、肝炎、肝硬化、慢性肝功能衰竭、胃/十二指肠溃疡、克罗恩病（节段性肠炎）、胰腺炎、溃疡性结肠炎、胆石症、胆囊息肉、再生障碍性贫血、血小板减少性紫癜、血友病、糖尿病、甲亢、甲状腺结节、系统性红斑狼疮、类风湿性关节炎、强直性脊柱炎、传导性耳聋、视网膜疾病、椎间盘突出症、严重Ⅲ度烧伤、严重残疾（包括双目失明、一肢及一肢以上断离、双耳失聪、语言能力丧失）、精神病、慢性酒精中毒、先天性疾病、遗传性疾病、职业病、结核病、接受重大器官移植或造血干细胞移植术。
          <br>（5）被保险人在最近1年内是否有以下身体不适症状：
          <br>反复胸痛、心慌、晕厥、抽搐、头痛、咳嗽、咳痰、咯血、气喘、呼吸困难、吞咽困难、吐血、肝区疼痛、黄疸、便血、黑便、腹痛、反酸、呕吐、腹泻、血尿、蛋白尿、排尿困难、尿潴留、皮下瘀斑、鼻出血、视力明显下降（近视800度以上）；持续2周以上发热；良恶性质未确诊的肿块；消瘦（体重减轻5公斤以上）。
          <br>（6）被保险人如为2周岁以下儿童（含2周岁），请同时告知以下事项：
          是否早产，且出生体重是否低于2500克？出生时是否有产伤、窒息史、抢救史或被置于保温箱史？是否有畸形、发育迟缓、惊厥、抽搐、脑瘫？
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
        <div class="handel" @click="getBwylOrderData">
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
    poprate
  },
  data () {
    return {
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
      deductibleIndex: '0',
      relationList: [ '自己', '配偶', '子女', '父母'],
      deductibleList: ['500000', '1000000'],
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
      premium: '155',
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
      this.successUrl = getEnv().redirectUrl+'/#/payment'+'?source=mall&product=bwyl&payState=success'
      this.failUrl = getEnv().redirectUrl+'/#/payment'+'?source=mall&product=bwyl&payState=fail'
    } else {
      this.successUrl = getEnv().redirectUrl+'/#/payment'+'?source=self&product=bwyl&payState=success'
      this.failUrl = getEnv().redirectUrl+'/#/payment'+'?source=self&product=bwyl&payState=fail'
    }
    this.startDate = checkUtil.commonCheck.getDate(1, 1);
    this.endDate = checkUtil.commonCheck.getDate(1, 2);
  },
  methods: {
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
    chooseSec(id) {
      this.selectedSec = id;
      this.computePremiun();
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
      const currentDate = new Date()
      let currentDateSub = currentDate.getTime() - 1000 * 60 * 60 * 24 * 30;
      let currentDateSubStr = utilsDate.formatDate.formatTime(currentDateSub, 'yyyyMMdd');
      
      if(this.selectedRel != '0' && currentDateSubStr - this.insurantId.substring(6, 14) < 0) {
        this.popError('本产品只限出生30天（含）-65周岁（含）人群购买');
        this.errorIcon.iIdIcon=true
        return;
      }
      if(this.selectedRel != '0' && checkUtil.commonCheck.checkAge(this.currentDate, this.insurantId, -1, 65)) {
        this.popError('本产品只限出生30天（含）-65周岁（含）人群购买');
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
      let premiun_lowDed_hasSocial = [
        '1244','357','228','220','291','402',
        '531','710','919','1170','1529','2079','2879'
      ]
      /**免赔额5000并且无社保 */
      let premiun_lowDed_noSocial = [
        '2625','744','468','452','635','908',
        '1251','1812','2595','3524','4664','6181','8360'
      ]
      /**免赔额10000并且有社保 */
      let premiun_highDed_hasSocial = [
        '767','310','155','158','221','317',
        '386','508','711','893','1163','1587','2191'
      ]
      /**免赔额10000并且无社保 */
      let premiun_highDed_noSocial = [
        '1582','598','300','301','457','635',
        '823','1228','1986','2766','3698','4905','6635'
      ]
      let index = 0;
      let insurantAge = this.insurantId.substring(6,14)
      let ageShort = this.currentDate - insurantAge;
      if(ageShort < 50000) {
        index = 0;
      } else if(ageShort < 110000) {
        index = 1
      } else {
        index = ageShort / 50000; 
      }
      index = parseInt(index)
      if(this.selectedSec == '1' &&  this.deductibleIndex == '0') {
        this.premium = premiun_lowDed_hasSocial[index];
      } else if(this.selectedSec == '0' &&  this.deductibleIndex == '0') {
        this.premium = premiun_lowDed_noSocial[index]
      } else if(this.selectedSec == '1' &&  this.deductibleIndex == '1') {
        this.premium = premiun_highDed_hasSocial[index]
      } else if(this.selectedSec == '0' &&  this.deductibleIndex == '1'){
        this.premium = premiun_highDed_noSocial[index]
      }
    },
    popError(message) {
      this.showError = true;
      this.errorMsg = message;
      setTimeout(() => {
        this.showError = false;
      }, 2000);
    },
    getBwylOrderData() {
      this.$dialog.loading.open('验证数据中...');
      this.$store.dispatch('postTbbwylOrder', {
        data: {
          premium: this.premium * 100,
          amount: '100000000',
          deductibleExcess: (this.deductibleIndex + 1 ) * 500000,  //免赔额
          startDate: this.startDate,
          endDate: this.endDate,
          holderName: this.holderName,
          holderId: this.holderId,
          holderPhone: this.holderPhone,
          holderBirthday: this.holderId.substring(6,10)+"-"+ this.holderId.substring(10,12)+"-"+this.holderId.substring(12,14),
          holderGender: this.holderGender,

          insurantName: this.insurantName,
          insurantId: this.insurantId,
          insurantBirthday: this.insurantId.substring(6,10)+"-"+ this.insurantId.substring(10,12)+"-"+this.insurantId.substring(12,14),
          insurantGender: this.insurantGender,
          socialSecurity: this.selectedSec, 
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
.footer-content {
  text-align: left;
  font-size: 0.9rem;
}
.footer-content .rate-title {
  letter-spacing: -1px;
  margin-bottom: 2%;
}
</style>