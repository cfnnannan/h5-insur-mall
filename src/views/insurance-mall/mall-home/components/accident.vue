<template>
    <div class="nav-layor">
        <div class="nav-content-item" 
            v-for="(item, index) of accidentList"
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
    name: 'accident',
    data() {
        return {
            accidentList: [
                {
                    navImg: require('@/assets/images/mall/mall-ycwy.png'), 
                    title: '易安孕产无忧险', 
                    subTitle: '保障范围广 | 超值性价比 | 专保母婴',
                    price: '490',
                    link: getEnv().redirectUrl+'/#/whome?source=mall'
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('../../../../assets/styles/public/mall/mall');
</style>