<template>
    <div class="claim-contaion">
        <div class="home-flow">
            <div class="ean-title color-14a2ee">
                <div class="name">理赔流程</div>
                <div class="tip"></div>
            </div>
            <div class="some-msg">
                根据相关法律规定和条款约定，在发现保险事故后您应当及时向我公司报案，
                我司提供<span class="color-14a2ee">APP自助理赔</span>和<span class="color-14a2ee">快递申请理赔</span>两种方式。
            </div>
            <div class="part2-claim">
                <div class="title-flow">APP自助理赔</div>
                <p class="title-guide">您可通过登录太平洋保险网站（www.cpic.com.cn）自助发起理赔申请：</p>
                <img src="@/assets/images/taibao-imgs/bwfa-icon.png" alt="" width="85%">
                <p class="some-msg">登录太平洋保险网站，注册成为认证客户，
                    按照界面提示逐一扫描上传索赔资料，发起自助理赔申请。
                </p>
            </div>
            <div class="part3-claim">
                <div class="title-flow">快递理赔</div>
                <div class="some-msg">
                    <p>您可以使用快递方式发起理赔申请，通过我司网站下载理赔申请并准备理赔材料送至：</p><br>
                    <p>中国上海市浦东新区世纪大道1229号世纪大都会1号楼13层太保安联保险股份有限公司理赔部<br>
                    邮编: <span class="color-14a2ee">200120</span>&nbsp;&nbsp;&nbsp;电话: <span class="color-14a2ee">10108686</span></p>
                </div>
            </div>
        </div>

        <div class="home-matter">
        <div class="ean-title color-14a2ee">
            <div class="name">常见问题</div>
            <div class="tip"></div>
        </div>
        <div class="matter-contaion">
            <div class="matter-list" 
                v-for="(item,index) of matterList" 
                :key="index"
                @click="showContents(index)">
            <div class="matter-title">
                <div class="item">
                <span class="letter">{{item.letter}}</span>
                <p>{{item.title}}</p>
                </div>
                <!-- <span class="iconfont" v-show="selected!=index" v-html="item.iconDown">{{item.iconDown}}</span>
                <span class="iconfont" v-show="selected==index" v-html="item.iconUp">{{item.iconUp}}</span> -->
            </div>
            <div class="matter-ans" :class="{'matter-active': selected==index}" v-html="item.subTitle">{{item.subTitle}}</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'preventFlow',
    data() {
        return {
            selected: Number,
            matterList: [
                { letter: 'A', 
                title: '恶性肿瘤确诊保险金需要报销吗？',
                subTitle: `根据条款约定，恶性肿瘤确诊保险金，无需报销，确诊即赔。`,
                },
                { letter: 'B', title: '恶性肿瘤医疗保险金可多次赔付吗？', 
                subTitle: `可以，但累计赔付金额不超过合同约定的医疗保险金额。`,
                },
                { letter: 'C', title: '哪些医院医疗费用可以报销？', 
                subTitle: `中国境内（不含港澳台）二级以上（含二级）公立医院普通部。`,
                },
                { letter: 'D', title: '什么是疾病观察期？这个产品的疾病观察期是几天？', 
                subTitle: `指在指定时期内，即使发生保险事故，受益人也不能获得保险赔偿，这段时期也被称为等待期，本产品观察期为90天，到期续保不设疾病观察期。`,
                },
                { letter: 'E', title: '无社保可以投保该产品吗？', 
                subTitle: `无社保也可投保此产品，但恶性肿瘤医疗保险金赔付比例为80%。`,
                },
                { letter: 'F', title: '购买后如何获取个人发票？', 
                subTitle: `可以统一拨打客服热线<span style="color:#14a2ee">10108686</span>索要发票。`,
                },
            ]
        }
    },
    methods: {
        showContents(index) {
            this.selected = index;
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('../../../../../assets/styles/public/ean-project/public-title');
@import url('../../../../../assets/styles/public/ean-project/public-flow-problem');
.color-14a2ee {
    color: #14a2ee;
}
.some-msg {
    text-align: left;
    line-height: 22px;
    font-size: 0.9rem;
    padding: 1.0rem 0;
    border-bottom: 1px solid #f8f8f8;
}
.home-matter .matter-ans {
    display: block;
}
.claim-contaion .home-flow {
    padding: 0.8rem;
    background-color: #fff;
    margin-bottom: 0.5rem;
    padding-bottom: 1.0rem;
}
.part2-claim {
    margin: 8% 0 5% 0;
}
.title-flow {
    color: #14a2ee;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 2%;
}
.part2-claim .title-guide {
    font-size: 0.9rem;
    text-align: left;
    margin-bottom: 1.0rem;
}
.part2-flow-item .flow-item-title {
    background: -webkit-gradient(linear, left top, left bottom, from(#13b4eb), to(#14a2ee));
    background: linear-gradient(#13b4eb, #14a2ee);
    width: 70%;
    border-radius: 30px;
    margin: 0 auto;
    color: #fff;
    font-size: 0.9rem;
    height: 40px;
    line-height: 40px;
    padding: 5px 0;
}
.part2-flow-item img {
    width: 5%;
    margin: 2% 0;
}
</style>
