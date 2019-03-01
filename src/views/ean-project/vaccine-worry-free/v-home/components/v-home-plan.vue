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
          :class="{'active': selectId==index}">{{item}}</div>
    </div>
    <div class="plan-list">
      <div><p v-for="(item,index) of planList" :key="index">{{item}}</p></div>
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
      planTitle:['方案一', '方案二', '方案三'],
      planList: [
        '预防接种意外身故', '预防接种意外残疾', '预防接种异常反应或偶合症医疗', '预防接种一般反应医疗', '住院伙食津贴',  '保障期限', 
      ],
      planPriceList: [
        ['5万元',  '5万元',  '1000元',  '500元',  '9000元', '1年'],
        ['20万元',  '20万元',  '10000元',  '1000元',  '3600元', '1年'],
        ['20万元',  '20万元',  '10000元',  '1000元',  '9000元', '1年'],
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
.plan-list {
  display: flex;
  justify-content: space-between;
  p {
    padding: 0.3rem 0;
    font-size: 0.9rem;
    white-space: nowrap;
  }
}
.plan-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
}
.plan-item {
  width: 100px;
  border: 1px solid #0c8be7;
  color: #0c8be7;
  border-radius: 10px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 1.1rem;
}
.active {
  background-color: #0c8be7;
  color: #fff;
  border-color: #0c8be7;
}
</style>