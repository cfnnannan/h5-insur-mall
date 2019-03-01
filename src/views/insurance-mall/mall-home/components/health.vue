<template>
    <div class="nav-layor">
        <div class="nav-content-item" 
            v-for="(item, index) of healthList"
            :key="index">
            <a class="nav-link" :href="item.link" target="_blank">
                <div class="nav-item-left">
                    <img :src="item.navImg" alt="" width="100%">
                </div>
                <div class="nav-item-right">
                    <div class="nav-right-header">
                        <p class="header-title">{{item.title}}</p>
                        <p class="header-sub-title">{{item.subTitle}}</p>
                    </div>
                    <div class="nav-right-footer"><span style="font-size: 1.2rem">{{item.price}}</span>元起</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import getEnv from '@/utils/getEnv'
export default {
    name: 'health',
    data() {
        return {
            healthList: [
                {
                    navImg: require('@/assets/images/mall/mall-bwyl.png'), 
                    title: '太保安联全民百万医疗保险', 
                    subTitle: '最高200万 | 癌症0元起赔',
                    price: '155',
                    link: getEnv().redirectUrl+'/#/medicalHome?=mall'
                },
                {
                    navImg: require('@/assets/images/mall/mall-bwfa.png'), 
                    title: '太保安联恶性肿瘤百万防癌', 
                    subTitle: '300万医疗 | 超强覆盖全家可买',
                    price: '31',
                    link: getEnv().redirectUrl+'/#/preventHome?source=mall'
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('../../../../assets/styles/public/mall/mall');
</style>