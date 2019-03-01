<template>
    <div class="container">
        <div class="matter-layor">
            <div class="matter-header" @click="showContent(0)">
                <span>太保安联</span>
                <span class="iconfont" :class="{'one-icon': selectFirst}">&#xe65a;</span>
            </div>
            <div v-show="selectFirst">
                <div class="matter-content">
                    <div class="content-title">通过应用商店并下载：“太保安联”APP发起自助理赔申请(2000元及以下)</div>
                    <div class="matter-item">
                        <p class="item-title">1：申请理赔</p>
                        <p class="item-sub-title">进入APP“自助理赔”按照页面指引选着需要理赔的保单进行申请</p>
                    </div>
                    <div class="matter-item">
                        <p class="item-title">2：提交理赔材料</p>
                        <p class="item-sub-title">根据线上理赔材料的提示准备材料并上传</p>
                    </div>
                    <div class="matter-item">
                        <p class="item-title">3：保险公司审核</p>
                        <p class="item-sub-title">太保安联收到理赔材料后，将及时审核和调查</p>
                    </div>
                    <div class="matter-item">
                        <p class="item-title">4：赔付保险金</p>
                        <p class="item-sub-title">确属保险责任范围，在资料齐全正式受理后3个工作日结案赔付</p>
                    </div>
                </div>

                <div class="matter-content">
                    <div class="content-title">您可以使用快递方式发起理赔申请</div>
                    <div class="matter-item">
                        <p class="item-title">1：申请理赔</p>
                        <p class="item-sub-title">通过”太保安联“网站下载理赔申请</p>
                    </div>
                    <div class="matter-item">
                        <p class="item-title">2：提交理赔材料</p>
                        <p class="item-sub-title">理赔材料送至：中国上海市浦东新区世纪大道1229号世纪大都会
                            1号楼13层太保安联保险股份有限公司理赔部
                            邮编：200120        电话：10108686</p>
                    </div>
                    <div class="matter-item">
                        <p class="item-title">3：保险公司审核</p>
                        <p class="item-sub-title">太保安联收到理赔材料后，将及时审核和调查</p>
                    </div>
                    <div class="matter-item">
                        <p class="item-title">4：赔付保险金</p>
                        <p class="item-sub-title">确属保险责任范围，在资料齐全正式受理后3个工作日结案赔付</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="matter-layor">
            <div class="matter-header" @click="showContent(1)">
                <span>易安保险</span>
                <span class="iconfont" :class="{'one-icon': selectSecond}">&#xe65a;</span>
            </div>
            <div class="matter-content" v-show="selectSecond">
                <div class="content-title">提供7*24小时报案理赔电话4000-121212，更可全国通赔，
                    发生保险事故后，请参考以下流程办理理赔。</div>
                <div class="matter-item">
                    <p class="item-title">1：申请理赔</p>
                    <p class="item-sub-title">报案或咨询请致电4000-121212，专业人员将协助指导办理</p>
                </div>
                <div class="matter-item">
                    <p class="item-title">2：提交理赔材料</p>
                    <div class="item-sub-title">
                        <div class="sub-title-item"><span>（1）</span><span>索赔申请书（官网-理赔材料下载/客服人员发送至投保人邮箱）</span></div>
                        <div class="sub-title-item"><span>（2）</span><span>保险单原件（电子保单）</span></div>
                        <div class="sub-title-item"><span>（3）</span><span>被保险人身份证（正反面复印件）</span></div>
                        <div class="sub-title-item"><span>（4）</span><span>被保险人银行卡（正反面复印，写明开户行地址）</span></div>
                        <div class="sub-title-item"><span>（5）</span><span>医疗费用凭证原件、医疗费用结算清单</span></div>
                        <div class="sub-title-item"><span>（6）</span><span>保险条款认可的医院出具的病历资料，
                            包括但不限于门诊病历记录、出入院记录、手术记录、必要的病理检查或其他科学检验检查报告。</span></div>
                    </div>
                </div>
                <div class="matter-item">
                    <p class="item-title">3：保险公司审核</p>
                    <p class="item-sub-title">审核人员对资料进行审核，如有需要保险公司会派相关人员进行现场勘察。</p>
                </div>
                <div class="matter-item">
                    <p class="item-title">4：赔付保险金</p>
                    <p class="item-sub-title">确属保险责任范围，在资料齐全正式受理后3个工作日结案赔付</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mallApply',
    data() {
        return {
            selectFirst: false,
            selectSecond: true,
        }
    },
    methods: {
        showContent(id) {
            if(id==0) {
                this.selectFirst =! this.selectFirst;

            } else {
                this.selectSecond =! this.selectSecond;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import url('../../../../assets/styles/public/mall/user');

.content-title {
    padding-top: 0.5rem;
    text-align: justify;
}
.matter-layor .matter-content {
    box-shadow: 0 0 0;
    margin-bottom: 0.5rem;
}
.matter-layor .matter-content:last-child {
    box-shadow: 0px 2px 3px 0px #ebf7ff;
}
.matter-content .matter-item {
    padding: 0.3rem 0;
}
.sub-title-item {
    display: flex;
}
.matter-header {
    .iconfont {
        display: inline-block;
        font-size: 1.1rem;
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
    }
}
.one-icon {
    transform: rotate(180deg) !important;
    -webkit-transform: rotate(180deg) !important;
    -moz-transform: rotate(180deg) !important;
    -o-transform: rotate(180deg) !important;
    -ms-transform: rotate(180deg) !important;
}
</style>

