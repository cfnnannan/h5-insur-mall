<template>
    <div class="container">
        <router-view></router-view>
        <div class="mall-tabs">
            <div class="tab-item" 
                v-for="(item,index) of tabList"
                :key="index"
                :class="{'tab-active': selectTab==index}" 
                @click="toggleTab(index)">
                <yd-icon :name="item.icon" slot="icon"></yd-icon>
                <div class="tab-name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import utilsLogin from '@/utils/loginUtils'
import getEnv from '@/utils/getEnv'
export default {
    name: 'tabs',
    data() {
        return {
            selectTab: '',
            tabList: [
                {name: '首页', icon: 'home-outline'},
                {name: '我的', icon: 'ucenter-outline'}
            ]
        }
    },
    created() {
        if( !getEnv().useLocalToken ) {
            utilsLogin.login.wechatLogin(window.location.href)
        }
        if( this.$route.path == '/insureMall/mallUcenter' ) {
            this.selectTab = '1'
        } else {
            this.selectTab = '0'
        }
    },
    methods: {
        toggleTab(num) {
            this.selectTab = num
            if(this.selectTab == '0') {
                this.$router.push('/insureMall/mallHome')
            } else {
                this.$router.push('/insureMall/mallUcenter')
            }
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
.mall-tabs {
    display: flex;
    position: fixed;
    background-color: #fff;
    bottom: 0;
    width: 100%;
    padding: 0.3rem 0;
    border-top: 1px solid #f5f5f5;
    .tab-item {
        width: 50%;
        .tab-name {
            font-size: 0.8rem;
        }
    }
}
.tab-active {
    color: #0c8be7;
}
.mall-tabs /deep/ .yd-icon-home-outline,.yd-icon-ucenter-outline {
    font-size: 1.6rem !important;
    font-style: inherit;
}
</style>
