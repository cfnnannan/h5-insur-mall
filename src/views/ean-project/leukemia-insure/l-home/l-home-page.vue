<template>
  <div class="body">
    <div class="home-banner">
      <img src="@/assets/images/ean-imgs/lhome-banner.png" alt="" width="100%">
    </div>
    <div class="switchNavbar" id="switchModule"  :class="searchBarFixed == true ? 'isFixed' :''">
      <div class="navbar_item plan" @click="plan()" :class="{switchAcitve:active=='plan'}">保障计划</div>
      <div class="navbar_item introduct" @click="introduct()" :class="{switchAcitve:active=='introduct'}">产品介绍</div>
      <div class="navbar_item flowpath" @click="flowpath()" :class="{switchAcitve:active=='flowpath'}">理赔流程</div>
      <div class="navbar_item insure" @click="insure()" :class="{switchAcitve:active=='insure'}">我要投保</div>
    </div>
    <div style="height:50px" v-if="searchBarFixed==true"></div>
    <lhomeplan id="homeplan"></lhomeplan>
    <lhomeintroduce id="homeintroduce"></lhomeintroduce>
    <lhomeflow id="homeflow"></lhomeflow>
    <lhomeinsure id="homeinsure"></lhomeinsure>
  </div>
</template>
<script>
import utilsLogin from '@/utils/loginUtils'
import getEnv from '@/utils/getEnv'
import lhomeplan from '../l-home/components/l-home-plan'
import lhomeinsure from '../l-home/components/l-home-insure'
import lhomeintroduce from '../l-home/components/l-home-introduce'
import lhomeflow from '../l-home/components/l-home-flow'
import $ from 'jquery'
export default {
  name: 'vhome',
  components: {
    lhomeplan,
    lhomeinsure,
    lhomeintroduce,
    lhomeflow
  },
  data() {
    return {
      active: 'plan',
      searchBarFixed:false,
    }
  },
  created() {
    if( !getEnv().useLocalToken ) {
      utilsLogin.login.wechatLogin(window.location.href)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.menu)
  },
  methods: {
    plan() {
      this.active = 'plan'
      var plan_h = ($("#homeplan").offset().top)-50;
      $('html,body').animate({ scrollTop: plan_h }, 500);
    },
    introduct() {
      this.active = 'introduct'
      var intr_h = ($("#homeintroduce").offset().top)-50;
      $('html,body').animate({ scrollTop: intr_h }, 500);
    },
    flowpath() {
      this.active = 'flowpath'
      var claims_h = ($("#homeflow").offset().top)-50;
      $('html,body').animate({ scrollTop: claims_h }, 500);
    },
    insure() {
      this.active = 'insure'
      var insure_h = ($("#homeinsure").offset().top)-50;
      $('html,body').animate({ scrollTop: insure_h }, 500);
    },
    menu() {
      let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var menuTop = document.querySelector('#switchModule').offsetTop
      //滑动到指定位置菜单吸顶
      if (scroll > menuTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
      //滑动到指定位置相应菜单高亮
      // var plan_h = ($("#homeplan").offset().top)-50;
      // var intr_h = ($("#homeintroduce").offset().top)-50;
      // var claims_h =($("#homeflow").offset().top)-50;
      // var insure_h =($("#homeinsure").offset().top)-50;
      // console.log(scroll)

      if (scroll < 400) {
        this.active = 'plan'
      } else if (scroll < 1280 && scroll >= 400) {
        this.active = 'introduct'
      } else if (scroll < 1830 && scroll >= 1280) {
        this.active = 'flowpath'
      } else if (scroll >= 1830) {
        this.active = 'insure'
      }
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.menu)
  }
}
</script>
<style lang="scss" scoped>
.body {
  background-color: #f8f8f8;
}
.home-banner {
  height: 155px;
  img {
    height: 100%;
  }
}
.switchNavbar {
  display: flex;
  position: relative;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
  width: 100%;
  background-color: #fff;
  font-size: 1.0rem;
  .navbar_item {
    padding: 0.8rem 0.5rem;
  }
}
.switchAcitve {
  border-bottom: 2px solid #0c8be7;
  color: #0c8be7
}
.isFixed {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>
