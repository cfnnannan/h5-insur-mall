<template>
    <div class="container">
        <div><img src="@/assets/images/mall/mall-banner.png" alt="" width="100%"></div>
        <div class="mall-switchNavbar">
            <div class="navbar_item" 
            v-for="(item,index) of navTabList" 
            :key="index"
            @click="toggleNavTab(index)"
            :class="{'switchAcitve': selectNavTab==index}">{{item}}</div>
        </div>
        <hot-page v-show="selectNavTab==0"></hot-page>
        <health-page v-show="selectNavTab==1"></health-page>
        <accident-page v-show="selectNavTab==2"></accident-page>
        <kids-page v-show="selectNavTab==3"></kids-page>
    </div>
</template>
<script>
import hotPage from '../mall-home/components/hot'
import healthPage from '../mall-home/components/health'
import accidentPage from '../mall-home/components/accident'
import kidsPage from '../mall-home/components/kids'
export default {
    name: 'mallHome',
    components: {
        hotPage,
        healthPage,
        accidentPage,
        kidsPage
    },
    data() {
        return {
            selectNavTab: '0',
            navTabList: ['热门精选','健康保险','意外保险','少儿保险']
        }
    },
    methods: {
        toggleNavTab(tabId) {
            this.selectNavTab = tabId;
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    background-color: #fff;
    width: 100%;
    height: 100vh;
}
.mall-switchNavbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    width: 100%;
    font-size: 1.0rem;
    .navbar_item {
        padding: 0.8rem 0.3rem 0.5rem 0.3rem;
    }
}
.switchAcitve {
  border-bottom: 2px solid #0c8be7;
  color: #0c8be7
}

</style>