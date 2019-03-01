<template>
<div>
   <div class="model-inform">
        <div class="title" v-show="afferentDetailsData=='medical'">保障详情</div>
        <div class="title" v-show="afferentDetailsData=='prevent'">{{afferentSelfData}}</div>
        <div class="textarea medical" v-show="afferentDetailsData=='medical'">
            <div class="modal-content" data-content="modal">
                <div class="wrap securityDetails">
                    <div class="content">
                        <div class="container">
                            <div class="securityDetails_item">
                                <div class="securityDetails_item_detail clearfix">
                                    <div class="item_detail-row-18  item_detail_color">一般医疗保险金</div>
                                    <div class="item_detail-row-6 securityDetails_item_detail_value "></div>
                                </div>
                                <div class="securityDetails_item_content">
                                    <p>在保险期间内，被保险人因遭受<b class="b-color">意外伤害</b>事故或在疾病观察期后因患疾病，在<b class="b-color">指定医疗机构</b>普通病房或普通门诊部接受治疗的，我们依照下列约定给付保险金：
                                    </p>
                                    <p>1、住院医疗保险金</p>
                                    <p>
                                        被保险人因疾病或者意外伤害经指定医疗机构诊断必须<b class="b-color">住院治疗</b>的，对于在指定医疗机构普通病房住院期间发生的<b class="b-color">合理且必要</b>的<b class="b-color">住院医疗费用</b>，我们以一般医疗保险金额为限，按本合同约定的保险金计算方法计算并给付住院医疗保险金。
                                    </p>
                                    <p>在每一保单年度内，因疾病或者意外住院的最高给付日数为180日，累计疾病或意外住院超过180日发生的医疗费用，不属于保险责任范围。
                                    </p>
                                    <p>若被保险人在保险期间内开始住院治疗，到保险期间届满住院仍未结束的，我们继续承担给付保险金责任至住院结束，但最长不超过保险期间届满之日起第30日。
                                    </p>
                                    <p>2、指定门诊医疗保险金</p>
                                    <p>被保险人因疾病或意外伤害在指定医疗机构普通门诊部进行<b class="b-color">门诊</b>治疗发生如下合理且必要的医疗费用：</p>
                                    <p>(1)门诊肾透析费用；</p>
                                    <p>(2)门诊<b class="b-color">恶性肿瘤</b>治疗费用，包括<b class="b-color">化学疗法</b>、<b class="b-color">放射疗法</b>、<b class="b-color">肿瘤免疫疗法</b>、<b class="b-color">肿瘤内分泌疗法</b>、<b class="b-color">肿瘤靶向疗法</b>治疗费用；</p>
                                    <p>(3)器官移植后的门诊抗排异治疗费用；</p>
                                    <p>(4)门诊手术费。</p>
                                    <p>对于因上述治疗发生的合理且必要的医疗费用，我们以一般医疗保险金额为限，按本合同约定的保险金计算方法计算并给付指定门诊医疗保险金。</p>
                                    <p>3、住院前后门诊急诊医疗保险金</p>
                                    <p>
                                        被保险人在指定医疗机构普通病房住院前7日（含出院当日）内和出院后30日（含出院当日）内，与该次住院相同原因而发生的门急诊医疗费用，不包括门诊肾透析、门诊恶性肿瘤治疗、器官移植后的门诊抗排异治疗和门诊手术费用。
                                    </p>
                                    <p>
                                        对于因上述治疗发生的合理且必要的医疗费用，我们以一般医疗保险金额为限，按本合同约定的保险金计算方法计算并给付住院前后门诊急诊医疗保险金。
                                    </p>
                                    <p>
                                        在任何情况下，我们在保险期间内对被保险人一次或多次累计给付的住院医疗保险金、指定门诊医疗保险金、住院前后门诊急诊医疗保险金总和以一般医疗保险金额为限。当一次或累计给付的住院医疗保险金、指定门诊医疗保险金、住院前后门诊急诊医疗保险金总和达到一般医疗保险金额时，我们给付一般医疗保险金的责任即时终止。                        </p>
                                    <p>
                                    </p>
                                </div>
                            </div>
                            <div class="securityDetails_item">
                                <div class="securityDetails_item_detail clearfix">
                                    <div class="item_detail-row-18 item_detail_color">恶性肿瘤医疗保险金</div>
                                    <div class="item_detail-row-6 securityDetails_item_detail_value"></div>
                                </div>
                                <div class="securityDetails_item_content">
                                    <p>
                                        在保险期间内，被保险人在疾病观察期后初次被确诊为恶性肿瘤，在指定医疗机构普通病房或普通门诊部接受治疗的，我们首先按照前款约定给付一般医疗保险金，当我们累计给付金额达到一般医疗保险金金额后，我们依照下列约定给付恶性肿瘤医疗保险金：
                                    </p>
                                    <p>1、恶性肿瘤住院医疗保险金</p>
                                    <p>
                                        被保险人因确诊恶性肿瘤经指定医疗机构诊断必须住院治疗的，对于在指定医疗机构普通病房住院期间发生的合理且必要的<b class="b-color">恶性肿瘤住院医疗费用</b>，我们以恶性肿瘤医疗保险金额为限，按本合同约定的保险金计算方法计算并给付恶性肿瘤住院医疗保险金。
                                    </p>
                                    <p>
                                        在每一个保单年度内，恶性肿瘤住院的最高给付日数为180日，累计恶性肿瘤住院超过180日发生的医疗费用，不属于保险责任范围。
                                    </p>
                                    <p>
                                        若被保险人在保险期间内开始恶性肿瘤住院治疗，到保险期间届满住院仍未结束的，我们继续承担给付保险金责任至住院结束，但最长不超过保险期间届满之日起第30日。
                                    </p>
                                    <p>2、恶性肿瘤特殊门诊医疗保险金</p>
                                    <p>
                                        被保险人因确诊恶性肿瘤在指定医疗机构普通门诊部进行门诊恶性肿瘤治疗发生的合理且必要的医疗费用，包括化学疗法、放射疗法、肿瘤免疫疗法、肿瘤内分泌疗法、肿瘤靶向疗法治疗费用，我们以恶性肿瘤医疗保险金额为限，按本合同约定的保险金计算方法计算并给付恶性肿瘤特殊门诊医疗保险金。
                                    </p>
                                    <p>3、恶性肿瘤住院前后门诊急诊医疗保险金</p>
                                    <p>
                                        被保险人在指定医疗机构普通病房住院前7日（含出院当日）内和出院后30日（含出院当日）内，因为恶性肿瘤而发生的门诊急诊医疗费用，不包括门诊肾透析、门诊恶性肿瘤治疗、器官移植后的门诊抗排异治疗和门诊手术费用。
                                    </p>
                                    <p>
                                        对于因上述治疗发生的合理且必要的医疗费用，我们以恶性肿瘤医疗保险金额为限，按本合同约定的保险金计算方法计算并给付恶性肿瘤住院前后门诊急诊医疗保险金。
                                    </p><p>
                                        在任何情况下，我们在保险期间内对被保险人一次或多次累计给付的恶性肿瘤住院医疗保险金、恶性肿瘤特殊门诊医疗保险金、恶性肿瘤住院前后门诊急诊医疗保险金总和以恶性肿瘤医疗保险金额为限。当一次或累计给付的恶性肿瘤住院医疗保险金、恶性肿瘤特殊门诊医疗保险金、恶性肿瘤住院前后门诊急诊医疗保险金总和达到恶性肿瘤医疗保险金额时，我们给付恶性肿瘤医疗保险金的责任即时终止。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="textarea prevent" v-show="afferentDetailsData=='prevent'">
            <div v-show="afferentSelfData=='经济版'">
                <div class="modal-content" data-content="modal">
                    <div class="wrap securityDetails">
                        <div class="content">
                            <div class="container">
                                <div class="securityDetails_item">
                                    <div class="securityDetails_item_detail clearfix">
                                        <div class="item_detail-row-18  item_detail_color">恶性肿瘤确诊保险金</div>
                                        <div class="item_detail-row-6 securityDetails_item_detail_value ">10万元</div>
                                    </div>
                                    <div class="securityDetails_item_content">
                                        <p>若被保险人在疾病观察期后被确诊初次发生本合同约定的<b class="b-color">恶性肿瘤</b>（无论一种或多种，下同），我们按本合同恶性肿瘤确诊保险金额给付恶性肿瘤确诊保险金，本项保险责任终止。</p>
                                        <p>若被保险人在疾病观察期内被确诊初次发生本合同约定的恶性肿瘤，我们按您根据本合同约定最后一次已支付的保险费金额给付恶性肿瘤确诊保险金， 本合同终止。</p>
                                    </div>
                                </div>
                                <div class="securityDetails_item">
                                    <div class="securityDetails_item_detail clearfix">
                                        <div class="item_detail-row-18 item_detail_color">恶性肿瘤医疗保险金</div>
                                        <div class="item_detail-row-6 securityDetails_item_detail_value">90万元</div>
                                    </div>
                                    <div class="securityDetails_item_content">
                                        <p>若被保险人在疾病观察期后被确诊初次发生本合同约定的恶性肿瘤，并在<b class="b-color">指定医疗机构</b>进行治疗，对于被保险人实际发生的与治疗该恶性肿瘤相关的<b class="b-color">合理且必要</b>的医疗费用，我们以本合同恶性肿瘤医疗保险金额为限，按以下公式计算并给付恶性肿瘤医疗保险金：</p>
                                        <p>(1)申请保险金时被保险人已从<b class="b-color">公费医疗</b>或<b class="b-color">社会医疗保险</b>获得医疗费用补偿的恶性肿瘤医疗保险金=被保险人发生的上述医疗费用金额总和-被保险人从公费医疗、社会医疗保险取得的医疗费用补偿金额总和-免赔额;</p>
                                        <p>(2)申请保险金时被保险人未从公费医疗也未从社会医疗保险获得医疗费用补偿的，恶性肿瘤医疗保险金=（被保险人发生的上述医疗费用金额总和-免赔额）X 80%。</p>
                                        <p>上述“免赔额”由您与我们约定，并在保险单上载明。
                                            被保险人在保险期间内开始<b class="b-color">住院治疗</b>，到保险期间届满住院仍未结束的，我们继续承担给付保险金责任至住院结束，但最长不超过保险期间届满之日起在任何情况下，我们一次或多次累计给付的恶性肿瘤医疗保险金以本合同恶性肿瘤医疗保险金额为限，我们一次或多次累计给付的恶性肿瘤医疗保险金达到本合同恶性肿瘤医疗保险金额时，本合同终止。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="afferentSelfData=='经典版'">
                <div class="modal-content" data-content="modal">
                    <div class="wrap securityDetails">
                        <div class="content">
                            <div class="container">
                                <div class="securityDetails_item">
                                    <div class="securityDetails_item_detail clearfix">
                                        <div class="item_detail-row-18  item_detail_color">恶性肿瘤确诊保险金</div>
                                        <div class="item_detail-row-6 securityDetails_item_detail_value ">20万元</div>
                                    </div>
                                    <div class="securityDetails_item_content">
                                        <p>若被保险人在疾病观察期后被确诊初次发生本合同约定的<b class="b-color">恶性肿瘤</b>（无论一种或多种，下同），我们按本合同恶性肿瘤确诊保险金额给付恶性肿瘤确诊保险金，本项保险责任终止。</p>
                                        <p>若被保险人在疾病观察期内被确诊初次发生本合同约定的恶性肿瘤，我们按您根据本合同约定最后一次已支付的保险费金额给付恶性肿瘤确诊保险金， 本合同终止。</p>
                                    </div>
                                </div>
                                <div class="securityDetails_item">
                                    <div class="securityDetails_item_detail clearfix">
                                        <div class="item_detail-row-18 item_detail_color">恶性肿瘤医疗保险金</div>
                                        <div class="item_detail-row-6 securityDetails_item_detail_value">180万元</div>
                                    </div>
                                    <div class="securityDetails_item_content">
                                        <p>若被保险人在疾病观察期后被确诊初次发生本合同约定的恶性肿瘤，并在<b class="b-color">指定医疗机构</b>进行治疗，对于被保险人实际发生的与治疗该恶性肿瘤相关的<b class="b-color">合理且必要</b>的医疗费用，我们以本合同恶性肿瘤医疗保险金额为限，按以下公式计算并给付恶性肿瘤医疗保险金：</p>
                                        <p>(1)申请保险金时被保险人已从<b class="b-color">公费医疗</b>或<b class="b-color">社会医疗保险</b>获得医疗费用补偿的恶性肿瘤医疗保险金=被保险人发生的上述医疗费用金额总和-被保险人从公费医疗、社会医疗保险取得的医疗费用补偿金额总和-免赔额;</p>
                                        <p>(2)申请保险金时被保险人未从公费医疗也未从社会医疗保险获得医疗费用补偿的，恶性肿瘤医疗保险金=（被保险人发生的上述医疗费用金额总和-免赔额）X 80%。</p>
                                        <p>上述“免赔额”由您与我们约定，并在保险单上载明。
                                            被保险人在保险期间内开始<b class="b-color">住院治疗</b>，到保险期间届满住院仍未结束的，我们继续承担给付保险金责任至住院结束，但最长不超过保险期间届满之日起在任何情况下，我们一次或多次累计给付的恶性肿瘤医疗保险金以本合同恶性肿瘤医疗保险金额为限，我们一次或多次累计给付的恶性肿瘤医疗保险金达到本合同恶性肿瘤医疗保险金额时，本合同终止。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="afferentSelfData=='尊享版'">
                <div class="modal-content" data-content="modal">
                    <div class="wrap securityDetails">
                        <div class="content">
                            <div class="container">
                                <div class="securityDetails_item">
                                    <div class="securityDetails_item_detail clearfix">
                                        <div class="item_detail-row-18  item_detail_color">恶性肿瘤确诊保险金</div>
                                        <div class="item_detail-row-6 securityDetails_item_detail_value ">30万元</div>
                                    </div>
                                    <div class="securityDetails_item_content">
                                        <p>若被保险人在疾病观察期后被确诊初次发生本合同约定的<b class="b-color">恶性肿瘤</b>（无论一种或多种，下同），我们按本合同恶性肿瘤确诊保险金额给付恶性肿瘤确诊保险金，本项保险责任终止。</p>
                                        <p>若被保险人在疾病观察期内被确诊初次发生本合同约定的恶性肿瘤，我们按您根据本合同约定最后一次已支付的保险费金额给付恶性肿瘤确诊保险金， 本合同终止。</p>
                                    </div>
                                </div>
                                <div class="securityDetails_item">
                                    <div class="securityDetails_item_detail clearfix">
                                        <div class="item_detail-row-18 item_detail_color">恶性肿瘤医疗保险金</div>
                                        <div class="item_detail-row-6 securityDetails_item_detail_value">270万元</div>
                                    </div>
                                    <div class="securityDetails_item_content">
                                        <p>若被保险人在疾病观察期后被确诊初次发生本合同约定的恶性肿瘤，并在<b class="b-color">指定医疗机构</b>进行治疗，对于被保险人实际发生的与治疗该恶性肿瘤相关的<b class="b-color">合理且必要</b>的医疗费用，我们以本合同恶性肿瘤医疗保险金额为限，按以下公式计算并给付恶性肿瘤医疗保险金：</p>
                                        <p>(1)申请保险金时被保险人已从<b class="b-color">公费医疗</b>或<b class="b-color">社会医疗保险</b>获得医疗费用补偿的恶性肿瘤医疗保险金=被保险人发生的上述医疗费用金额总和-被保险人从公费医疗、社会医疗保险取得的医疗费用补偿金额总和-免赔额;</p>
                                        <p>(2)申请保险金时被保险人未从公费医疗也未从社会医疗保险获得医疗费用补偿的，恶性肿瘤医疗保险金=（被保险人发生的上述医疗费用金额总和-免赔额）X 80%。</p>
                                        <p>上述“免赔额”由您与我们约定，并在保险单上载明。
                                            被保险人在保险期间内开始<b class="b-color">住院治疗</b>，到保险期间届满住院仍未结束的，我们继续承担给付保险金责任至住院结束，但最长不超过保险期间届满之日起在任何情况下，我们一次或多次累计给付的恶性肿瘤医疗保险金以本合同恶性肿瘤医疗保险金额为限，我们一次或多次累计给付的恶性肿瘤医疗保险金达到本合同恶性肿瘤医疗保险金额时，本合同终止。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="confirm" @click="closeDetails"><span class="iconfont">&#xe612;</span></div>
</div>
</template>
<script>
export default {
    name: 'popdetails',
    props: {
        afferentDetailsData: String,
        afferentSelfData: String
    },
    data() {
        return {
        }
    },
    methods: {
        closeDetails() {
            this.$emit('closeDetails')
        },
    }
}
</script>
<style lang="scss" scoped>
@import url('../../../assets/styles/public/public-pop');
.textarea .modal-content {
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    margin-left: 0;
    margin-right: 0;
    -webkit-overflow-scrolling: touch;
}
.medical {
    .securityDetails {
        background-color: #f5f5f9;
    }
    .wrap {
        position: relative;
        background: #fff;
    }
    .container {
        margin-right: auto;
        margin-left: auto;
        *min-height: 1%;
    }
}
.securityDetails_item {
    padding: 1.0rem 0;
    min-height: inherit;
    color: #333;
    background-color: #fff;
}
 .securityDetails_item_detail {
    position: relative;
    display: flex;
    justify-content: space-between;
}
.securityDetails_item_content {
    font-size: 1rem;
    text-align: justify;
    line-height: 35px;
    color: #A5A5A5;
    margin: 14px 0px;
}
.modal-content p {
    text-align: justify;
    text-justify: inter-ideograph;
}
.prevent {
    .item_detail_color {
        color: #2E77BA;
        font-size: 1rem;
    }
    .securityDetails {
        background-color: #fff;
        padding: 0px;
        margin-top: -18px;
    }
}
</style>