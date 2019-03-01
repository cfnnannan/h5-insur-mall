<template>
  <div class="claim-contaion">
    <div class="home-claim">
      <div class="ean-title">
        <div class="name">理赔流程</div>
        <div class="tip"></div>
      </div>
      <div class="home-flow">
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
            <!-- <span class="iconfont" v-show="selected!=index" v-html="item.iconDown">{{item.iconDown}}</span>
            <span class="iconfont" v-show="selected==index" v-html="item.iconUp">{{item.iconUp}}</span> -->
          </div>
          <div class="matter-ans" :class="{'matter-active': selected==index}">{{item.subTitle}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vhomeflow',
  data() {
    return {
      selected: Number,
      matterList: [
        { letter: 'A', 
          title: '在哪些医院接受治疗可以获得理赔？',
          subTitle: `二级及二级以上公立医院，北京市平谷区所有医院除外。`,
          iconDown: '&#xe63c;',
          iconUp: '&#xe62b;'
        },
        { letter: 'B', title: '本产品年龄限制是多少岁？', subTitle: `
          本产品承保年龄为出生满28天（含）至17周岁（含），未成年人由其父母或监护人作为投保人。`,
          iconDown: '&#xe63c;',
          iconUp: '&#xe62b;'
        },
        { letter: 'C', title: '住院津贴是怎么赔偿的？', subTitle: `
          如方案三：住院伙食津贴每天50元累计180天共计9000元。`,
          iconDown: '&#xe63c;',
          iconUp: '&#xe62b;'
        }
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
.home-matter .matter-ans {
  display: block;
}
</style>