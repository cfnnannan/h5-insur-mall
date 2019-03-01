<template>
  <div class="claim-contaion">
    <div class="home-claim">
      <div class="ean-title">
        <div class="name">理赔流程</div>
        <div class="tip"></div>
      </div>
      <div class="home-flow">
        <div class="contact">7*24小时<span class="phone">4000-121212</span>全国通赔</div>
        <div class="item">
          <span class="num-li">1</span>
          <span class="indfo">请在发生保险事故后尽快拨打<span style="color:#eb1638">4000-121212</span>报案</span>
        </div>
        <div class="item">
          <span class="num-li">2</span>
          <span class="indfo">根据保单条款约定提理赔供所需材料</span>
        </div>
        <div class="item">
          <span class="num-li">3</span>
          <span class="indfo">经审核而符合保险责任，急速赔付</span>
        </div>
      </div>
    </div>

    <div class="home-matter">
      <div class="ean-title">
        <div class="name">常见问题</div>
        <div class="tip"></div>
      </div>
      <div class="matter-contaion">
        <div class="matter-list" 
            v-for="(item,index) of matterList" 
            :key="index"
            @click="showContents(index)">
          <div class="matter-title">
            <div class="item">
              <span class="letter">{{item.letter}}</span>
              <p>{{item.title}}</p>
            </div>
            <span class="iconfont" :class="{'deg-up': showIcon && selected==index}" v-html="item.iconDown">{{item.iconDown}}</span>
          </div>
          <div class="matter-ans" :class="{'matter-active': showIcon && selected==index}" v-html="item.subTitle">{{item.subTitle}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lhomeflow',
  data() {
    return {
      selected: Number,
      showIcon: false,
      matterList: [
        { letter: 'A', 
          title: '在那些医院接受治疗可以获得理赔？',
          subTitle: `被保险人经中华人民共和国（不包括香港、澳门、台湾地区）二级及以上医院，其中北京平谷地区医院除外，确诊初次患有本合同约定的疾病，则保险人按照合同约定给付保险金。`,
          iconDown: '&#xe63c;',
          iconUp: '&#xe62b;'
        },
        { letter: 'B', title: '本产品的等待期是多久？', subTitle: `
          本保单等待期为90天。`
        },
        { letter: 'C', title: '遇到哪些情况不赔偿？', subTitle: `
          本合同不承担既往症责任。既往症定义：指在本合同生效之前罹患的被保险人已知或应该知道的有关疾病或病症。通常有以下几种情况：
          <br>（1）本主险合同生效前，医生已有明确诊断，长期治疗未间断；
          <br>（2）本主险合同生效前，医生已有明确诊断，治疗后症状未完全消失，有间断用药情况；
          <br>（3）本主险合同生效前，未经医生诊断和治疗，但症状明显且持续存在，以普通人医学常识应当知晓。`,
          iconDown: '&#xe63c;',
          iconUp: '&#xe62b;'
        }
      ]
    }
  },
  methods: {
    showContents(id) {
      this.selected = id;
      this.showIcon = !this.showIcon;
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('../../../../../assets/styles/public/ean-project/public-title');
@import url('../../../../../assets/styles/public/ean-project/public-flow-problem');
.home-flow .num-li {
  background-color: #0c8be7;
  color: #fff;
  margin-right: 0.3rem;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  text-align: center;
  line-height: 22px;
}
.contact {
  padding: 0 !important;
  border-radius: 5px;
  margin-top: 1.5rem !important;
}
.contact .phone {
  display: inline-block;
  background-color: #0c8be7;
  color: #fff;
  font-weight: 600;
  height: 35px;
  line-height: 35px;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
}
.home-flow .item {
  padding: 0.5rem 0.8rem!important;
}
.matter-title .iconfont {
  display: inline-block;
  transform: rotate(0deg);
}
.deg-up {
  transform: rotate(180deg) !important;
}
</style>