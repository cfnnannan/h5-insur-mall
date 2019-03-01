<template>
<div>
    <div class="model-inform">
        <div class="title">太保安联健康保险股份有限公司<br>个人百万恶性肿瘤疾病保险费率表</div>
        <div class="textarea" v-show="afferentRateData=='medical'">
            <div class="modal-content">
                <div class="flb-content bxtk-content-show">
                    <div id="flb-table">
                        <table bordercolor="black" border="1" align="center" cellspacing="0" cellpadding="0">
                            <thead>
                                <tr>
                                    <th rowspan="3">投保年龄(周岁)</th>
                                    <th rowspan="1" colspan="4">保费(人民币元)</th>
                                </tr>
                                <tr>
                                    <th colspan="2">免赔额5000元</th>
                                    <th colspan="2">免赔额1万元</th>
                                </tr>
                                <tr>
                                    <th>有社保</th>
                                    <th>无社保</th>
                                    <th>有社保</th>
                                    <th>无社保</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0-4</td>
                                    <td>1244</td>
                                    <td>2625</td>
                                    <td>767</td>
                                    <td>1582</td>
                                </tr>
                                <tr>
                                    <td>5-10</td>
                                    <td>357</td>
                                    <td>744</td>
                                    <td>310</td>
                                    <td>598</td>
                                </tr>
                                <tr>
                                    <td>11-15</td>
                                    <td>228</td>
                                    <td>468</td>
                                    <td>155</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>16-20</td>
                                    <td>220</td>
                                    <td>452</td>
                                    <td>158</td>
                                    <td>301</td>
                                </tr>
                                <tr>
                                    <td>21-25</td>
                                    <td>291</td>
                                    <td>635</td>
                                    <td>221</td>
                                    <td>457</td>
                                </tr>
                                <tr>
                                    <td>26-30</td>
                                    <td>402</td>
                                    <td>908</td>
                                    <td>317</td>
                                    <td>635</td>
                                </tr>
                                <tr>
                                    <td>31-35</td>
                                    <td>531</td>
                                    <td>1251</td>
                                    <td>386</td>
                                    <td>823</td>
                                </tr>
                                <tr>
                                    <td>36-40</td>
                                    <td>710</td>
                                    <td>1812</td>
                                    <td>508</td>
                                    <td>1228</td>
                                </tr>
                                <tr>
                                    <td>41-45</td>
                                    <td>919</td>
                                    <td>2595</td>
                                    <td>711</td>
                                    <td>1986</td>
                                </tr>
                                <tr>
                                    <td>46-50</td>
                                    <td>1170</td>
                                    <td>3524</td>
                                    <td>893</td>
                                    <td>2766</td>
                                </tr>
                                <tr>
                                    <td>51-55</td>
                                    <td>1529</td>
                                    <td>4664</td>
                                    <td>1163</td>
                                    <td>3698</td>
                                </tr>
                                <tr>
                                    <td>56-60</td>
                                    <td>2079</td>
                                    <td>6181</td>
                                    <td>1587</td>
                                    <td>4905</td>
                                </tr>
                                <tr>
                                    <td>61-65</td>
                                    <td>2879</td>
                                    <td>8360</td>
                                    <td>2191</td>
                                    <td>6635</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="zs">注：以上测算基于10万元恶性肿瘤确诊保险金及90万元恶性肿瘤医疗保险金。</div>
                </div>
            </div>
        </div>
        <div class="textarea" v-show="afferentRateData=='prevent'">
            <div class="modal-content">
                <div class="flb-content bxtk-content-show">
                    <div id="flb-table">
                        <table bordercolor="black" border="1" align="center" cellspacing="0" cellpadding="0">
                            <thead>
                                <tr><th rowspan="3">投保年龄<br>(周岁)</th></tr>
                                <tr><th colspan="2">保费（元）</th></tr>
                                <tr><th>男</th><th>女</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>18-20</td><td>33</td><td>31</td></tr>
                                <tr><td>21-25</td><td>40</td><td>61</td></tr>
                                <tr><td>26-30</td><td>63</td><td>122</td></tr>
                                <tr><td>31-35</td><td>110</td><td>230</td></tr>
                                <tr><td>36-40</td><td>192</td><td>397</td></tr>
                                <tr><td>41-45</td><td>319</td><td>631</td></tr>
                                <tr><td>46-50</td><td>591</td><td>894</td></tr>
                                <tr><td>51-55</td><td>1051</td><td>1097</td></tr>
                                <tr><td>56-60</td><td>1656</td><td>1339</td></tr>
                                <tr><td>61-65</td><td>2336</td><td>1705</td></tr>
                                <tr><td>66-70 </td><td>3129</td><td>2359</td></tr>
                                <tr><td>71-75 </td><td>3875</td><td>3040</td></tr>
                                <tr><td>76-80 </td><td>4609</td><td>3457</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="zs">注：以上测算基于10万元恶性肿瘤确诊保险金及90万元恶性肿瘤医疗保险金。</div>
                </div>
            </div>
        </div>
    </div>
    <div class="confirm" @click="closeRate"><span class="iconfont">&#xe612;</span></div>
</div>
</template>
<script>
export default {
    name: 'poprate',
    props: {
        afferentRateData: String
    },
    data() {
        return {
        }
    },
    methods: {
        closeRate() {
            this.$emit('closeRate')
        },
    }
}
</script>
<style scoped>
@import url('../../../assets/styles/public/public-pop');
#flb-table {
    text-align: center;
}
#flb-table table {
    border: 1px #fff solid;
    width: 90%;
    text-align: center;
    margin: 1.0rem auto 0.5rem;
}
#flb-table table th {
    height: 30px;
    font-size: 0.9rem;
    background-color: #005BAC;
    color: #fff;
    border: 1px #fff solid;
}
#flb-table table td {
    background-color: #7DABD5;
    color: #fff;
    border: 1px #fff solid;
    width: 220px;
    height: 30px;
    font-size: 0.9rem;
}
</style>