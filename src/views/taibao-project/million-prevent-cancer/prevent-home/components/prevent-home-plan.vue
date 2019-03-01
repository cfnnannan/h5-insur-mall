<template>
    <div class="home-plan">
        <div class="title">
            <p>恶性肿瘤百万保障计划</p>
            <p class="light">本产品由太保安联保险承保</p>
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
                <p>职业类别</p>
                <p class="clickable-pop" @click="showDetailsFn(selectId)">查看保障详情</p>
            </div>
            <div class="plan-item-right" v-for="(item,index) of planPriceList" :key="index" v-show="selectId==index">
                <p v-for="(item,index) of planPriceList[index]" :key="index">{{item}}</p>
                <p class="clickable-pop" @click="showOccupation=true">1-4类职业可保</p>
            </div>
        </div>
        <!-- 保障详情 -->
        <yd-popup v-model="showDetails" position="center" width="92%">
            <popdetails 
            :afferentDetailsData="'prevent'" 
            :afferentSelfData="detailsTitle" 
            @closeDetails="showDetails=false"></popdetails>
        </yd-popup>
        <!-- 职业类别 -->
        <yd-popup v-model="showOccupation" position="center" width="92%">
            <popccupation @closeOccupation="showOccupation=false"></popccupation>
        </yd-popup>
    </div>
</template>

<script>
import popccupation from '@/components/public-components/popup/occupation';
import popdetails from '@/components/public-components/popup/details'
export default {
    name: 'preventPlan',
    components: {
        popccupation,
        popdetails
    },
    data() {
        return {
            showOccupation: false,
            showDetails: false,
            detailsTitle: '',
            selectId: '0',
            planTitle:['经济版', '经典版', '尊享版'],
            planList: [
                '恶性肿瘤确诊保险金', '恶性肿瘤医疗保险金', '健康风险评估', '电话健康咨询','健康资讯', '保障期限'
            ],
            planPriceList: [
                ['10万元', '90万元', '四次', '专业健康管理师全年五次咨询', '全年', '1年'],
                ['20万元', '180万元', '四次', '专业健康管理师全年五次咨询', '全年', '1年'],
                ['30万元', '270万元', '四次', '专业健康管理师全年五次咨询', '全年', '1年'],
            ],
        }
    },
    methods: {
        selectPlan(id) {
            this.selectId = id;
            this.$root.eventHub.$emit('scheme',this.selectId)
        },
        showDetailsFn(num) {
            this.showDetails = true;
            if(num == 0) {
                this.detailsTitle = '经济版'
            } else if(num == 1) {
                this.detailsTitle = '经典版'
            } else {
                this.detailsTitle = '尊享版'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('../../../../../assets/styles/public/ean-project/public-plan');
@import url('../../../../../assets/styles/public/ean-project/public-plan-select');
.clickable-pop {
  color: #0c8be7
}
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
.plan-item-right {
  text-align: right;
}
</style>
