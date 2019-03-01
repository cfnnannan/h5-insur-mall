<template>
    <div class="nav-layor">
        <div class="nav-content-item" 
            v-for="(item, index) of hotList"
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
    name: 'hot',
    data() {
        return {
            hotList: [
                {
                    navImg: require('@/assets/images/mall/mall-bwyl.png'), 
                    title: '太保安联全民百万医疗保险', 
                    subTitle: '最高200万 | 癌症0元起赔',
                    price: '155',
                    link: getEnv().redirectUrl+'/#/medicalHome?source=mall'
                },
                {
                    navImg: require('@/assets/images/mall/mall-exet.png'), 
                    title: '易安E享儿童少儿综合保障', 
                    subTitle: '最高13.8万 | 疾病意外医疗均可保',
                    price: '265',
                    link: getEnv().redirectUrl+'/#/ehome?source=mall'
                },
                {
                    navImg: require('@/assets/images/mall/mall-sjbb.png'), 
                    title: '太保安联四季宝贝少儿疾病保障', 
                    subTitle: '45万特定重疾 | 30万重疾 | 每天0.25元起',
                    price: '90',
                    link: getEnv().kidsEnv
                },
                {
                    navImg: require('@/assets/images/mall/mall-ymwy.png'), 
                    title: '易安疫苗无忧险', 
                    subTitle: '不限疫苗接种 | 不限接种次数 | 性价比高',
                    price: '13',
                    link: getEnv().redirectUrl+'/#/vhome?source=mall'
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('../../../../assets/styles/public/mall/mall');
</style>