<template>
    <div class="home-introduce">
      <div class="intr-basic">
        <div class="item">
          <span class="iconfont">&#xe60a;</span>
          <p class="info">最高可达<br>13.8万保障</p>
        </div>
        <div class="item">
          <span class="iconfont" style="font-size:2.1rem">&#xe640;</span>
          <p class="info">意外、第三<br>者责任均保</p>
        </div>
        <div class="item">
          <span class="iconfont">&#xe615;</span>
          <p class="info">24小时免费<br>咨询服务</p>
        </div>
      </div>
      <div class="intr-details">
        <div class="list">
          <div class="item">
            <img src="@/assets/images/ean-imgs/fall.png" alt="" width="55%">
            <p>意外跌伤</p>
          </div>
          <div class="item">
            <img src="@/assets/images/ean-imgs/injured.png" alt="" width="55%">
            <p>意外窒息</p>
          </div>
        </div>
        <div class="list">
          <div class="item">
            <img src="@/assets/images/ean-imgs/fire.png" alt="" width="55%">
            <p>烧伤烫伤</p>
          </div>
          <div>
            <img src="@/assets/images/ean-imgs/banner-m.png" alt="" width="100%">
          </div>
          <div class="item">
            <img src="@/assets/images/ean-imgs/play.png" alt="" width="55%">
            <p>玩耍打闹</p>
          </div>
        </div>
        <div class="list">
          <div class="item">
            <img src="@/assets/images/ean-imgs/traffic.png" alt="" width="55%">
            <p>交通事故</p>
          </div>
          <div class="item">
            <img src="@/assets/images/ean-imgs/drowning.png" alt="" width="55%">
            <p>溺水触电</p>
          </div>
        </div>
      </div>
      <div class="intr-wave">
        <div class="info">
          <div class="dis"><div class="font">一张保单</div></div>
          <div class="msg">无论你的视线内外 我们全年时刻守护</div>
        </div>
      </div>
      <div class="intr-advantage">
        <div class="ean-title"><div class="name">6大优势</div><div class="tip"></div></div>
        <div class="details">
          <div class="list">
            <div class="item">
              <div class="num">1</div>
              <div class="msg"><div class="caption">保障全面</div><div>疾病、意外医疗均可保</div></div>
            </div>
            <div class="item">
              <div class="num">3</div>
              <div class="msg"><div class="caption">低投高保</div><div>0.7元/天起</div></div>
            </div>
            <div class="item">
              <div class="num">5</div>
              <div class="msg"><div class="caption">等待期短</div><div>首次投保等待期仅60天</div></div>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <div class="num">2</div>
              <div class="msg"><div class="caption">保额高</div><div>单项保障最高10万元</div></div>
            </div>
            <div class="item">
              <div class="num">4</div>
              <div class="msg"><div class="caption">专为儿童定制</div><div>出生满3周岁至17周岁少儿身体健康均可投保</div></div>
            </div>
            <div class="item">
              <div class="num">6</div>
              <div class="msg"><div class="caption">全国通赔</div><div>在我国境内（不含港澳台）都可赔偿</div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="intr-tables">
        <table class="define-table" width="100%" height="100" >
          <tr>
            <th>保障内容</th>
            <th>保障金额（元）</th>
            <th>分项保费</th>
            <th>合计保费</th>
          </tr>
          <tr>
            <td>意外身故、残疾</td>
            <td>10万</td>
            <td>65元</td>
            <td style="border-bottom:none"></td>
          </tr>			
          <tr>
            <td>意外伤害医疗</td>
            <td>1万</td>
            <td>30元</td>
            <td style="border-bottom:none"></td>
          </tr>
          <tr>
            <td>住院津贴</td>
            <td>1.8万</td>
            <td>60元</td>
            <td style="border-bottom:none;"><span style="position: relative;bottom: 17px;">265元</span></td>
          </tr>
          <tr>
            <td>住院医疗</td>
            <td>1万</td>
            <td>110元</td>
            <td style="border-bottom:none"></td>
          </tr>
        </table>
      </div>
    </div>
</template>
<script>
export default {
  name: 'ehomeintroduce'
}
</script>
<style lang="scss" scoped>
@import url('../../../../../assets/styles/public/ean-project/public-title');
.home-introduce {
  margin-bottom: 0.5rem;
  padding: 5% 0;
  height: 88%;
  background-color: #fff;
  .intr-basic {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: url('../../../../../assets/images/ean-imgs/basic.png')no-repeat center center;
    width: 96%;
    background-size: contain;
    height: 116px;
    margin: 0 auto;
    .item {
      width: 33%;
      border-right: 1px solid #dcf4ff;
      color: #03acf3;
      .iconfont {
        font-size: 2.2rem;
        font-weight: 600;
        color: #03acf3;
      }
      &:last-child {
        border-right: none;
      }
    }
    .info {
      font-size: 0.9rem;
    }
  }
  .intr-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .list {
      .item {
        height: 118px;
        display: inline-block;
      }
    }
  }
  .intr-wave {
    background: url('../../../../../assets/images/ean-imgs/wave.png') no-repeat center center;
    width: 100%;
    height: 218px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .info {
      color: #fff;
      .msg {
        font-weight: 700;
        font-size: 1.1rem;
      }
      .dis {
        background-color: #fff;
        border-radius: 25px;
        width: 48%;
        padding: 0.5em 0;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0 auto;
        margin-bottom: 0.5rem;
        box-shadow: 0px 1px 15px 0px #007db1;
        .font {
          display: inline-block;
          font-weight: 600;
          font-size: 1.3rem;
          background: -webkit-gradient(linear, left top, left bottom, from(#03acf3), to(#8ccbf8));
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
  }
  .intr-advantage {
    .details {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      padding: 0 0.5rem;
      .list {
        width: 42%;
        .item {
          display: flex;
          text-align: left;
          height: 90px;
          align-items: center;
          padding: 0.5rem 0;
          .num {
            background: #03acf3;
            border-radius: 50%;
            color: #fff;
            width: 28px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            font-size: 1.2rem;
            font-weight: 600;
          }
          .msg {
            width: 80%;
            margin-left: 0.5rem;
            font-size: 0.9rem;
            .caption {
              font-weight: 700;
              font-size: 1.0rem;
            }
          }
        }
      }
    }
  }
  .intr-tables {
    width: 94%;
    margin: 0 auto;
    margin-top: 6%;
    .define-table {
      border: 1px solid #03acf3; 
      text-align: center;
      border-collapse:collapse;
      border-spacing:0;
      font-size: 0.92rem;
    }
    .define-table td {
      padding: 0.8rem 0.5rem;
      border-bottom: 1px solid #03acf3; 
      border-right: 1px solid #03acf3;
    }
    .define-table th {
      background-color:#03acf3;
      color: #fff;
      padding: 0.6rem 0;
      letter-spacing: 2.0px;
    }
  }
}

@media screen and (max-width: 320px) {
  .intr-wave {
    width: 100% !important;
    height: 175px !important;
    .dis {
      width: 42% !important;
      padding: 0.3rem 0 !important;
    }
  }
}

</style>