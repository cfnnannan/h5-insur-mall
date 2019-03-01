<template>
  <div class="infor-contaion">
    <div>
      <div class="infor-title">我们的产品优势</div>
      <div class="merit">
        <div class="merit-item">
          <div class="merit-msg">
            <b class="strong">专门针对儿童白血病设计</b>
            <p>专家专业研发，更针对，<br>更精准</p>            
          </div>
          <img class="face" src="@/assets/images/ean-imgs/merit-1.png" alt="">
        </div>
        <div class="merit-item">
          <img class="face" src="@/assets/images/ean-imgs/merit-2.png" alt="">
          <div class="merit-msg">
            <b class="strong">确诊最高赔付50万元</b>
            <p>真正解决病不起问题</p>            
          </div>
        </div>
         <div class="merit-item">
          <div class="merit-msg">
            <b class="strong">最低16元起</b>
            <p>儿童白血病险种超高性价比<br>真正宝贝无忧</p>            
          </div>
          <img class="face" src="@/assets/images/ean-imgs/merit-3.png" alt="">
        </div>
      </div>
    </div>
    <div class="point-contaion">
      <div class="point-list">
        <div class="infor-title">白血病病发4大<span style="color:#ed547e">诱因</span></div>
        <div class="infor-point">
          <div class="point-item"><img src="@/assets/images/ean-imgs/w_icon1.png" alt=""><p>病毒</p></div>
          <div class="point-item"><img src="@/assets/images/ean-imgs/w_icon2.png" alt=""><p>遗传基因</p></div>
          <div class="point-item"><img src="@/assets/images/ean-imgs/w_icon3.png" alt=""><p>辐射因素</p></div>
          <div class="point-item"><img src="@/assets/images/ean-imgs/w_icon4.png" alt=""><p>化学因素</p></div>
        </div>
      </div>
      <div class="point-list">
        <div class="infor-title">白血病病发4大<span style="color:#ed547e">表现</span></div>
        <div class="infor-point">
          <div class="point-item"><img src="@/assets/images/ean-imgs/w_icon5.png" alt=""><p>发烧</p></div>
          <div class="point-item"><img src="@/assets/images/ean-imgs/w_icon6.png" alt=""><p>出血不止</p></div>
          <div class="point-item"><img src="@/assets/images/ean-imgs/w_icon7.png" alt=""><p>贫血</p></div>
          <div class="point-item"><img src="@/assets/images/ean-imgs/w_icon8.png" alt=""><p>骨骼疼痛</p></div>
        </div>
      </div>
    </div>
    <div>
      <div class="infor-title">少儿白血病专项保障</div>
      <div class="table-contaion">
        <table class="define-table" width="100%" height="100" >
          <tr class="table-title"><th>方案</th><th>保费</th><th>保障金额</th></tr>
          <tr><td>方案一</td><td>16元</td><td>10万</td></tr>
          <tr><td>方案二</td><td>32元</td><td>20万</td></tr>
          <tr><td>方案三</td><td>48元</td><td>30万</td></tr>
          <tr><td>方案四</td><td>64元</td><td>40万</td></tr>
          <tr><td>方案五</td><td>80元</td><td>50万</td></tr>		
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lhomeintroduce',
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.infor-contaion {
  background-color: #fff;
  padding: 5% 0.8rem;
  margin-bottom: 0.5rem;
}
.infor-title {
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 28px;
}
.merit-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .merit-msg {
    text-align: left;
    .strong {
      font-weight: 600;
    }
    p {
      font-size: 0.9rem;
    }
  }
  .face {
    width: 25%;
  }
}
.point-contaion {
  padding: 1.5rem 0;
}
.point-list {
  padding: 1.0rem 0;
}
.infor-point {
  padding-top: 1.0rem;
  display: flex;
  justify-content: space-evenly;
  .point-item img {
    width: 50%;
  }
}
.table-contaion {
  margin-top: 1.0rem;
  .define-table {
    text-align: center;
    border-collapse: separate;
    border-spacing: 0;
    .table-title {
      background-color: #ed547e;
      color: #fff;
      height: 35px;
    }
    tr {
      height: 35px;
    }
    tr th {
      width: 33.333%;
    }
    tr th:first-child,table tr td:first-child {
        border-left: 1px solid #ed547e;
    }
    tr th:last-child,table tr td:last-child {
        border-right: 1px solid #ed547e;
    }
    tr td:first-child,
    tr td:nth-child(2),
    tr td:nth-child(3),
    tr td:last-child{
      border-bottom: 1px solid #ed547e;
      border-left: 1px solid #ed547e;
    }
    tr td:nth-child(3) {
      border-right: 1px solid #ed547e;
    }
    tr:first-child th:first-child {
      border-top-left-radius: 12px;
    }
    tr:first-child th:last-child {
      border-top-right-radius: 12px;
    }
    tr:last-child td:first-child {
      border-bottom-left-radius: 12px;
    }
    tr:last-child td:last-child {
      border-bottom-right-radius: 12px;
    }
  }
}

</style>