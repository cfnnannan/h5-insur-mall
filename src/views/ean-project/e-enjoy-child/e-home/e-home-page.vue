<template>
  <div class="body">
    <div class="home-banner">
      <img src="@/assets/images/ean-imgs/banner.png" alt="" width="100%">
    </div>
    <div class="switchNavbar" id="switchModule"  :class="searchBarFixed == true ? 'isFixed' :''">
      <div class="navbar_item plan" @click="plan()" :class="{switchAcitve:active=='plan'}">保障计划</div>
      <div class="navbar_item introduct" @click="introduct()" :class="{switchAcitve:active=='introduct'}">产品介绍</div>
      <div class="navbar_item flowpath" @click="flowpath()" :class="{switchAcitve:active=='flowpath'}">理赔流程</div>
      <div class="navbar_item insure" @click="insure()" :class="{switchAcitve:active=='insure'}">我要投保</div>
    </div>
    <div style="height:50px" v-if="searchBarFixed==true"></div>
    <ehomeplan id="homeplan"></ehomeplan>
    <ehomeintroduce id="homeintroduce"></ehomeintroduce>
    <ehomeflow id="homeflow"></ehomeflow>
    <ehomeinsure id="homeinsure"></ehomeinsure>
  </div>
</template>
<script>
import utilsLogin from '@/utils/loginUtils'
import getEnv from '@/utils/getEnv'
import ehomeplan from '../e-home/components/e-home-plan'
import ehomeinsure from '../e-home/components/e-home-insure'
import ehomeintroduce from '../e-home/components/e-home-introduce'
import ehomeflow from '../e-home/components/e-home-flow'
import $ from 'jquery'
export default {
  name: 'ehome',
  components: {
    ehomeplan,
    ehomeinsure,
    ehomeintroduce,
    ehomeflow,
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
      if (scroll < 360) {
        this.active = 'plan'
      } else if (scroll < 1625 && scroll >= 365) {
        this.active = 'introduct'
      } else if (scroll < 2055 && scroll >= 1620) {
        this.active = 'flowpath'
      } else if (scroll >= 2055) {
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
