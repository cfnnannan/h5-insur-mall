<template>
  <div class="claim-contaion">
    <div class="home-claim">
      <div class="ean-title">
        <div class="name">理赔流程</div>
        <div class="tip"></div>
      </div>
      <div class="home-flow">
        <div class="item">
          <span class="iconfont">&#xe613;</span>
          <span class="indfo">请在发生保险事故后尽快拨打<span style="color:#eb1638">4000-121212</span>报案</span>
        </div>
        <div class="item">
          <span class="iconfont">&#xe623;</span>
          <span class="indfo">根据保单条款约定提理赔供所需材料</span>
        </div>
        <div class="item">
          <span class="iconfont">&#xe605;</span>
          <span class="indfo">经审核而符合保险责任，急速赔付</span>
        </div>
        <div class="contact">24小时理赔电话<span style="color:#0c8be7">4000-121212</span>全国通赔</div>
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
  name: 'ehomeflow',
  data() {
    return {
      selected: Number,
      showIcon: false,
      matterList: [
        { letter: 'A', 
          title: '这款产品提供了哪些保障？',
          subTitle: `
                1、本产品附加意外伤害医疗责任: 被保险人遭受意外伤害后实际支出的、符合当地社会基本医疗保险支付范围的医疗费用，每次事故在
                扣险绝对免赔额100元后，剩余部分赔付比例为100%。<br>
                2、本产品住院定额给付住院津贴为100元/日，每次事故免赔天数为3天。<br>
                3、本产品住院医疗赔付标准:被保险人遭受意外伤害或在等待期后因疾病在本公司认可的医疗机构住院诊疗，对被保险人实际支出的、符合当
                地社会基本医疗保险支付范围的住院医疗费用，<br>
                （1）被保险人在社保或其它途径已获得补偿的，保险人每次事故扣除300元绝对免赔额
                后，剩余部分保险人按90%比例赔付；<br>
                （2）被保险人未在社保或其它途径获得补偿的，保险人每次事故在扣除400元免赔额后按60%比
                例赔付。`,
          iconDown: '&#xe63c;',
          iconUp: '&#xe62b;'
        },
        { letter: 'B', title: '被保险人有那些限制？', subTitle: `
          出生满3周岁（含）至17周岁（含）的能正常生活的自然人可作为被保险人，未满18周岁的被保险人需由其法定监护人进行投保。`,
          iconDown: '&#xe63c;',
          iconUp: '&#xe62b;'
        },
        { letter: 'C', title: '被保险人目前有某种疾病或症状，能够买保险吗？', subTitle: `
          请在投保时详细阅读健康告知并根据实际情况作出准确回答，
          如符合健康告知提及状况，即可正常投保。如存在不符合健康告知提及情况的，则不可以投保本产品`,
          iconDown: '&#xe63c;',
          iconUp: '&#xe62b;'
        },
        { letter: 'D', title: '为什么会有90天的等待期？', subTitle: `
          等待期的设置是为了保证健康客户的投保利益，防止少数带病人群投保导致保险费率飙升。本产品自合同生效之日起60天内为等待期。`,
          iconDown: '&#xe63c;',
          iconUp: '&#xe62b;'
        },
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
.matter-title .iconfont {
  display: inline-block;
  transform: rotate(0deg);
}
.deg-up {
  transform: rotate(180deg) !important;
}
</style>