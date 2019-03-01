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
          </div>
          <div class="matter-ans" :class="{'matter-active': selected==index}">{{item.subTitle}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'whomeflow',
  data() {
    return {
      selected: Number,
      matterList: [
        { letter: 'A', 
          title: '在那些医院接受治疗可以获得理赔？',
          subTitle: `中华人民共和国境内（不含香港、澳门、台湾地区）二级及二级以上医院。`,
        },
        { letter: 'B', title: '备孕或妊娠孕周多久不能投保？', subTitle: `
          本保险产品投保时被保险人为备孕或妊娠孕周未超过20周（含），身体健康的已婚女性。`,
        },
        { letter: 'C', title: '在什么情况下不能投保？', subTitle: `
          请在投保时详细阅读健康告知并根据实际情况作出准确回答，如符合健康告知提及状况，即可正常投保。如存在不符合健康告知提及情况的，则不可以投保本产品。`,
        },
        { letter: 'D', title: '本产品等待期有多久？', subTitle: `
          本保险产品等待期为被保险人妊娠28周前（不含28周），等待期内发生的保险事故，保险人不承担保险责任。`,
        },
        { letter: 'E', title: '本产品保障年龄是多大？', subTitle: `
          20-40周岁且妊娠或备孕，周数小于20周（含）的女性。`,
        },
      ]
    }
  },
  methods: {
    showContents(index) {
      this.selected = index;
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('../../../../../assets/styles/public/ean-project/public-title');
@import url('../../../../../assets/styles/public/ean-project/public-flow-problem');
.home-matter .matter-ans {
  display: block;
}
</style>