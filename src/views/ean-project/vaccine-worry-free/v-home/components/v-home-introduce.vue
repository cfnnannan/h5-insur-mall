<template>
  <div class="infor-contaion">
    <div>
      <div class="infor-title">你知道宝宝从出生起，要接种多少疫苗吗？</div>
      <div class="infor-vaccine">
        <div class="list left">
          <div class="item">
            <img src="@/assets/images/ean-imgs/vhome-first.png" alt="">
            <div class="item-msg">
              <p class="msg-title">0岁 约每月一次</p>
              <p class="msg-subtitle">乙肝疫苗、卡介苗、脊髓灰质炎糖丸、百白破疫苗等免费疫苗</p>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/images/ean-imgs/vhome-second.png" alt="">
            <div class="item-msg">
              <p class="msg-title">1-6岁 约每年1-2次</p>
              <p class="msg-subtitle">百白破疫苗等续种免费疫苗、麻腮风疫苗等自费疫苗接种</p>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="item">
            <img src="@/assets/images/ean-imgs/vhome-third.png" alt="">
            <div class="item-msg">
              <p class="msg-title">7-14岁 自主选择性接种</p>
              <p class="msg-subtitle">水痘疫苗、流行性感冒疫苗等资费疫苗</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="infor-title">一张保单</div>
      <div class="msg-subtitle">呵护你的宝贝 为健康成长保驾护航</div>
      <div class="info-msg-list">
        <div class="item"
          v-for="(item,index) of inforList"
          :key="index">
          <div class="item-face"><img :src="item.img" alt=""></div>
          <div class="item-msg">
            <div class="msg-title">
              <span style="color:#29bac3">{{item.titleLfet}}</span>
              <span style="color:#ed547e">{{item.titleRight}}</span>
            </div>
            <div class="msg-subtitle">{{item.subTitle}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import iconOne from '@/assets/images/ean-imgs/vhome-fx.png'
import iconTwo from '@/assets/images/ean-imgs/vhome-dj.png'
import iconThree from '@/assets/images/ean-imgs/vhome-yw.png'
import iconFour from '@/assets/images/ean-imgs/vhome-nn.png'
export default {
  name: 'vhomeintroduce',
  data() {
    return {
      inforList: [
        {
          img: iconOne, 
          titleLfet: '风险覆盖', titleRight: '贴心保障',
          subTitle: `疫苗意外身故、疫苗意外残疾、预防接种异常反应或偶合症医疗、预防接种一般反应医疗、住院伙食津贴等保障`
        },
        {
          img: iconTwo, 
          titleLfet: '低价保全年', titleRight: '天天安心',
          subTitle: `0.03元/天起保，价格便宜，性价比高`
        },
        {
          img: iconThree, 
          titleLfet: '疫苗意外医疗', titleRight: '家长更放心',
          subTitle: `专为0-17岁儿童定制，免配额100元，赔付比100%`
        },
        {
          img: iconFour, 
          titleLfet: '年内不限', titleRight: '接种次数',
          subTitle: `一次投保，保障整年`
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.infor-contaion {
    padding: 5% 0.8rem;
  background-color: #fff;
  margin-bottom: 0.5rem;
}
.infor-title {
  color: #29bac3;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 28px;
}
.infor-vaccine {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
}
.infor-vaccine .list .item img {
  width: 90%;
  margin-bottom: -15%;
}
.infor-vaccine .list {
  width: 50%;
}
.infor-vaccine .item .item-msg {
  border: 2px solid #29bac3;
  padding: 1.8rem 0.5rem 0.5rem 0.5rem;
}
.infor-vaccine .item .msg-title {
  color: #ed547e;
  font-size: 1.1rem;
}
.infor-vaccine .left {
  margin-right: 0.5rem;
}
.infor-vaccine .left .item {
  margin-bottom: 12%;
}
.msg-subtitle {
  color: #666;
}

.info-msg-list {
  padding-top: 1.0rem;
}
.info-msg-list .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
} 
.info-msg-list .item .item-face {
  width: 20%
}
.info-msg-list .item .item-face img {
  width: 80%;
}
.info-msg-list .item .item-msg {
  text-align: left;
  width: 80%;
}
.info-msg-list .item .item-msg .msg-title {
  font-size: 1.1rem;
  font-weight: 800;
}
</style>