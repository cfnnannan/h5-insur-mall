<template>
    <div class="container">
        <div class="user-header">
            <div class="user-name-pic">
                <img class="user-pic" :src="userInfor.headimgurl" alt="">
                <span class="user-name">{{userInfor.nickname}}</span>
            </div>
        </div>
        <div class="user-container">
            <a :href="policyDetailLink" target="_blank">
                <div class="user-nav-item">
                    <div class="nav-left"><img src="@/assets/images/mall/icon1.png" alt=""><span>保单查询</span></div>
                    <div class="iconfont">&#xe601;</div>
                </div>
            </a>
            <router-link tag="div" to="/mallApply" class="user-nav-item">
                <div class="nav-left"><img src="@/assets/images/mall/icon2.png" alt=""><span>申请理赔</span></div>
                <div class="iconfont">&#xe601;</div>
            </router-link>
            <router-link tag="div" to="/mallMatter" class="user-nav-item">
                <div class="nav-left"><img src="@/assets/images/mall/icon3.png" alt=""><span>常见问题</span></div>
                <div class="iconfont">&#xe601;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import getEnv from '@/utils/getEnv'
export default {
    name: 'user',
    data() {
        return {
            policyDetailLink: '',
            userInfor: {
                nickname: '',
                headimgurl: '',
            },
        }   
    },
    created() {
        this.policyDetailLink = getEnv().redirectUrl + '/#/orderlist';
        this.getUserInfor()
    },
    methods: {
        getUserInfor() {
            this.$store.dispatch('getUserInfor',{
                success: data => {
                    if (data.result === 'SUCCESS') {
                        const res = data.retData;
                        this.userInfor['nickname'] = res.name;
                        this.userInfor['headimgurl'] = res.headimgUrl;
                    } else {
                        this.$dialog.toast({mes: data.retMsg, timeout: 1500});
                    }
                }
            })
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
.user-header {
    background: url('../../../assets/images/mall/user-banner.jpg') no-repeat center center;
    width: 100%;
    background-size: cover;
    height: 147px;
    display: flex;
    justify-content: left;
    align-items: center;
}
.user-name-pic {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 5%;
    .user-pic {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-name {
        color: #fff;
        margin-left: 5%;
        font-size: 1.5rem;
    }
}
.user-container {
    padding: 0.5rem;
}
.user-nav-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0.5rem;
    border-bottom: 1px solid #f5f5f5;
    .nav-left {
        display: flex;
        align-items: center;
        color: #333;
        img {
            width: 25%;
            margin-right: 10%;
        }
    }
    .iconfont {
        font-size: 0.9rem;
        color: #999;
    }
}
</style>

