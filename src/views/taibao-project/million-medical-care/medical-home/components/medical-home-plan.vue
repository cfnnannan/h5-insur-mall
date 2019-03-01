<template>
    <div class="home-plan">
        <div class="title">
            <p>全民百万医疗保险计划</p>
            <p class="light">本产品由太保安联保险承保</p>
        </div>
        <div class="table-list">
            <div class="table-item"><span>一般医疗保险金</span><span>100万元</span></div>
            <div class="table-item"><span>恶性肿瘤医疗保险金</span><span>100万元</span></div>
            <div class="table-item"><span>就诊服务</span><span>就医绿色通道，国内三甲二次诊疗</span></div>
            <div class="table-item">
                <span>年免赔额</span>
                <div>
                    <select dir="rtl">
                        <option v-for="(item,index) of deductibleList" 
                                :key="index" 
                                :value="index">{{item}}元</option>
                    </select>
                    <span class="iconfont">&#xe65a;</span>
                </div>
            </div>
            <div class="table-item"><span>保障期限</span><span>1年</span></div>
            <div class="table-item"><span>职业类型</span><span class="clickable-pop" @click="showOccupation=true">1-4类职业可保</span></div>
            <div class="table-item"><span class="clickable-pop" @click="showDetails=true">查看保障详情</span></div>
        </div>
        <!-- 保障详情 -->
        <yd-popup v-model="showDetails" position="center" width="92%">
            <popdetails :afferentDetailsData="'medical'" @closeDetails="showDetails=false"></popdetails>
        </yd-popup>
        <!-- 职业类别 -->
        <yd-popup v-model="showOccupation" position="center" width="92%">
            <popoccupation @closeOccupation="showOccupation=false"></popoccupation>
        </yd-popup>
    </div>
</template>

<script>
import popoccupation from '@/components/public-components/popup/occupation'
import popdetails from '@/components/public-components/popup/details'
export default {
    name: 'medicalPlan',
    components: {
        popoccupation,
        popdetails
    },
    data() {
        return {
            showDetails: false,
            showOccupation: false,
            deductibleList: ['5000', '10000'],
        }
    },
}
</script>

<style lang="scss" scoped>
@import url('../../../../../assets/styles/public/ean-project/public-plan');
.clickable-pop {
    color: #0c8be7
}
</style>
