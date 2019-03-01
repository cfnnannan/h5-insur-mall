<template>
  <div class="home-plan">
    <div class="title">
      <p>孕产无忧综合保障计划</p>
      <p class="light">本产品由易安财产保险承保</p>
    </div>
    <div class="plan-title">
      <div class="plan-item" 
          v-for="(item,index) of planTitle" 
          :key="index"
          @click="selectPlan(index)"
          :class="{'plan-active': selectId==index}">{{item}}</div>
    </div>
    <div class="plan-list">
      <div>
        <p v-for="(item,index) of planList" :key="index">{{item}}</p>
      </div>
      <div v-for="(item,index) of planPriceList" :key="index" v-show="selectId==index">
        <p v-for="(item,index) of planPriceList[index]" :key="index">{{item}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vhomeplan',
  mounted() {
    this.$root.eventHub.$emit('scheme',this.selectId)
  },
  data() {
    return {
      selectId: '0',
      planTitle:['方案一', '方案二', '方案三', '方案四', '方案五'],
      planList: [
        '少儿白血病专项保障', '保障期限', 
      ],
      planPriceList: [
        ['10万元', '1年'],
        ['20万元', '1年'],
        ['30万元', '1年'],
        ['40万元', '1年'],
        ['50万元', '1年'],
      ],
    }
  },
  methods: {
    selectPlan(id) {
      this.selectId = id;
      this.$root.eventHub.$emit('scheme',this.selectId)
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('../../../../../assets/styles/public/ean-project/public-plan');
@import url('../../../../../assets/styles/public/ean-project/public-plan-select');
.plan-list {
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  p {
    padding: 0.3rem 0;
    font-size: 0.9rem;
    white-space: nowrap;
  }
}
.plan-title {
  overflow: hidden;
}
</style>