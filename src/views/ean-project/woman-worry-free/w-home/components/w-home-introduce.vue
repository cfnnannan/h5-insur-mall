<template>
  <div class="infor-contaion">
    <div class="infor-title">孕产选易安 保障更周全</div>
    <div class="brief-list">
      <div class="brief-item">
        <div class="item-title"><img src="@/assets/images/ean-imgs/one.png" alt="" width="15%"><span style="color: #29bac3">保障范围</span></div>
        <div class="face">
          <img src="@/assets/images/ean-imgs/first.png" alt="" width="100%">
          <span class="face-infor" style="top: 28%">孕期意外流产，新生儿先天畸形，新生儿身故</span>
        </div>
      </div>
      <div class="brief-item">
        <div class="item-title"><img src="@/assets/images/ean-imgs/two.png" alt="" width="15%"><span style="color: #fb8a91">超值性价比</span></div>
        <div class="face">
          <span class="face-infor" style="top: 30%">最高20万保障，每天仅<br>需1.3元</span>
          <img src="@/assets/images/ean-imgs/second.png" alt="" width="100%">
        </div>
      </div>
      <div class="brief-item">
        <div class="item-title"><img src="@/assets/images/ean-imgs/three.png" alt="" width="15%"><span style="color: #f4c937">专保母婴</span></div>
        <div class="face">
          <img src="@/assets/images/ean-imgs/third.png" alt="" width="100%">
          <span class="face-infor" style="top: 30%; right:6%">准妈妈与新生儿<br>双重保障</span>
        </div>
      </div>
    </div>
    <div class="infor-term">
      <div class="term-list left">
        <div class="term-item">
          <img src="@/assets/images/ean-imgs/term-one.png" alt="" width="30%">
          <p class="item-title" style="color: #29bac3">保障年龄</p><p class="item-info">20-40周岁且妊娠或备孕周数小于20周（含）的女性</p>
        </div>
        <div class="term-item">
          <img src="@/assets/images/ean-imgs/term-three.png" alt="" width="30%">
          <p class="item-title" style="color: #fb8a91">购买份数</p><p class="item-info">每位被保险人限购1份</p>
        </div>
      </div>
      <div class="term-list">
        <div class="term-item">
          <img src="@/assets/images/ean-imgs/term-two.png" alt="" width="30%">
          <p class="item-title" style="color: #f4c937">保障期间</p><p class="item-info">妊娠第28周（含）至分娩7日内及新生儿出生7日内</p>
        </div>
        <div class="term-item">
          <img src="@/assets/images/ean-imgs/term-four.png" alt="" width="30%">
          <p class="item-title" style="color: #fbbb7c">等待期</p><p class="item-info">妊娠第28周前（不含28周）</p>
        </div>
      </div>
    </div>
    <div class="infor-title">保障信息</div>
    <div class="infor-specific">
      <table class="infor-table">
        <tr class="table-title"><th>保障内容</th><th>保障金额</th></tr>
        <tr class="table-item singular"><td class="first">意外伤害身故、全残</td><td>20万</td></tr>			
        <tr class="table-item"><td class="first">妊娠手术意外身故、全残</td><td>20万</td></tr>		
        <tr class="table-item singular"><td class="first">妊娠并发症身故</td><td>20万</td></tr>
        <tr class="table-item"><td class="first">子宫切除</td><td>2万</td></tr>
        <tr class="table-item singular"><td class="first">流产、引产手术责任</td><td>2万</td></tr>
        <tr class="table-item"><td class="first">新生儿先天畸形</td><td>2万</td></tr>
        <tr class="table-item singular"><td class="first">新生儿意外身故</td><td>2万</td></tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'whomeintroduce'
}
</script>
<style lang="scss" scoped>
.infor-contaion {
  background-color: #fff;
  padding: 5% 0.8rem;
  margin-bottom: 0.5rem;
}
.infor-title {
  font-size: 1.15rem;
  font-weight: 600;
}
.brief-list .brief-item .item-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.0rem 0;
}
.brief-list .brief-item .face {
  position: relative;
}
.brief-list .brief-item .face .face-infor {
  position: absolute;
  font-size: 0.9rem;
  color: #fff;
  padding: 0 0.5rem;
}
.infor-term {
  display: flex;
}
.infor-term .left {
  margin-right: 15%;
}
.infor-term .term-item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 135px;
}
.infor-term .term-item .item-title {
  font-size: 1.0rem;
  font-weight: 600;
}
.infor-term .term-item .item-info {
  font-size: 0.9rem;
}
.infor-specific {
  margin-top: 1.0rem;
}
.infor-specific .infor-table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #f4c115;
}
 .infor-table .table-title {
  background-color: #f4c115;
  height: 36px;
  color: #fff;
}
 .infor-table .table-item {
  background-color: #fff3c9;
  height: 36px;
}
 .infor-table .singular {
   background-color: #fff;
 }
 .infor-table .first {
   border-right: 1px solid #f4c115;
 }
</style>