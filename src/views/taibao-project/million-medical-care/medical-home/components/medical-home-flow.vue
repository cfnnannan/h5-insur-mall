<template>
    <div class="claim-contaion">
        <div class="home-flow">
            <div class="ean-title color-14a2ee">
                <div class="name">理赔流程</div>
                <div class="tip"></div>
            </div>
            <div class="part1-claim">
                <div class="part1-item"><img src="@/assets/images/taibao-imgs/icon1.png" alt="">
                    <p>发现保险事故</p></div>
                <div class="iconfont">&#xe610;</div>
                <div class="part1-item"><img src="@/assets/images/taibao-imgs/icon2.png" alt="">
                    <p>向我司汇报</p></div>
                <div class="iconfont">&#xe610;</div>
                <div class="part1-item"><img src="@/assets/images/taibao-imgs/icon3.png" alt="">
                    <p>APP自助理赔</p></div>
                <div class="iconfont">&#xe610;</div>
                <div class="part1-item"><img src="@/assets/images/taibao-imgs/icon4.png" alt="">
                    <p>快递申请理赔</p></div>
            </div>
            <div class="some-msg">
                根据相关法律规定和条款约定，在发现保险事故后您应当及时向我公司保安，
                我司提供<span class="color-14a2ee">APP自助理赔</span>和<span class="color-14a2ee">快递申请理赔</span>两种方式。
            </div>
            <div class="part2-claim">
                <div class="title-flow">APP自助理赔</div>
                <p class="title-guide">您可以通过应用商店搜索并下载“太保安联”APP发起自助理赔申请。</p>
                <div class="part2-flow">
                    <div class="part2-flow-item">
                        <div class="flow-item-title">下载并注册太保安联APP</div>
                        <img src="@/assets/images/taibao-imgs/arrow-down.png" alt="">
                    </div>
                    <div class="part2-flow-item">
                        <div class="flow-item-title" style="line-height: 20px;">进入APP“自助理赔”<br>按页面指引完成自助理赔申请</div>
                        <img src="@/assets/images/taibao-imgs/arrow-down.png" alt="">
                    </div>
                    <div class="part2-flow-item">
                        <div class="flow-item-title">保险公司审核</div>
                        <img src="@/assets/images/taibao-imgs/arrow-down.png" alt="">
                    </div>
                    <div class="part2-flow-item">
                        <div class="flow-item-title">赔付保险金</div>
                    </div>
                </div>
                <div class="color-14a2ee">
                    <strong>注：</strong>
                    <span style="font-size: 0.9rem;">太保安联APP当前支持申请金额小于2000元，索赔事故性质为门诊医疗，住院医疗，住院补贴的保险事故理赔申请。</span>
                </div>
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
                    :key="index">
                    <div class="matter-title">
                        <div class="item">
                        <span class="letter">{{item.letter}}</span>
                        <p>{{item.title}}</p>
                        </div>
                        <!-- <span class="iconfont" v-show="selected!=index" v-html="item.iconDown">{{item.iconDown}}</span>
                        <span class="iconfont" v-show="selected==index" v-html="item.iconUp">{{item.iconUp}}</span> -->
                    </div>
                    <div class="matter-ans" 
                        @click="showContents(index)"
                        :class="{'matter-active': selected==index}" 
                        v-html="item.subTitle">{{item.subTitle}}</div>
                </div>
            </div>
        </div>
        <!-- 医院 -->
        <yd-popup v-model="showHospital" position="center" width="92%">
            <pop-hospital @closeHospital="showHospital=false"></pop-hospital>
        </yd-popup>
    </div>
</template>

<script>
import popHospital from '@/components/public-components/popup/hospital'
export default {
    name: 'medicalFlow',
    components: {
        popHospital,
    },
    data() {
        return {
            selected: Number,
            showHospital: false,
            matterList: [
                { letter: 'A', 
                title: '1万元免赔额是什么意思？',
                subTitle: `您个人支付累积超过1万元的部分由太保安联报销，1万元以下由个人承担。`,
                iconDown: '&#xe63c;',
                iconUp: '&#xe62b;'
                },
                { letter: 'B', title: '被保险人有哪些限制？', 
                subTitle: `投保年龄范围为出生满30天至65周岁。续保时被保险人的年龄超过65周岁的，最高续保年龄可延至99周岁。`,
                iconDown: '&#xe63c;',
                iconUp: '&#xe62b;'
                },
                { letter: 'C', title: '代约专家的三甲医院有哪些？', 
                subTitle: `可以协调安排的医院覆盖北京、上海、广州的<span style="color:#14a2ee">知名三甲医院</span>。`,
                iconDown: '&#xe63c;',
                iconUp: '&#xe62b;'
                },
            ]
        }
    },
    methods: {
        showContents(id) {
            this.selected = id;
            if(id==2) {
                this.showHospital = true
            }
        },
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
.part1-claim {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5% 0;
    padding: 0 10px;
}
.part1-claim .part1-item {
    padding: 0 0.5rem;
}
.part1-claim .part1-item p {
    font-size: 0.9rem;
}
.part1-claim .part1-item img {
    width: 40px;
    height: 40px;
}
.part1-claim .iconfont {
    font-size: 0.85rem;
    color: #999;
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
}
.part2-claim .part2-flow {
    margin: 3% 0;
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
