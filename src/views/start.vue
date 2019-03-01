<template>
  <div>微信授权</div>
</template>
<script>
import getEnv from '@/utils/getEnv'
import cookieUtil from '@/utils/cookie'
export default {
  name: 'start',
  data() {
    return {
      skipUrl: this.$route.query.skipUrl,
      authorizeScope: '',
    }
  },
  created() {
    // 如果不带参访问 满足条件 其他情况不满足
    if(this.skipUrl == undefined) {
      this.skipUrl = '/insureMall/mallHome'
    }
    if(this.skipUrl != '/insureMall/mallHome') {
      this.authorizeScope = 'snsapi_base'
    }else {
      this.authorizeScope = 'snsapi_userinfo'
    }
    let token_str = cookieUtil.getCookie('token_str')
    if(token_str=='null' || token_str == null) {
      window.location.href = this.getCodeApi(this.skipUrl)
    } else {
      this.$router.push(this.skipUrl)
    }
  },
  methods: {
    getCodeApi(pathUrl) {
      let urlNow = encodeURIComponent(getEnv().redirectUrl+'/#'+ pathUrl); //网页url
      let scope = this.authorizeScope
      let appid = getEnv().appid;
      let wxauthPath = getEnv().wxauthPath;
      let url = `http://${wxauthPath}/get-weixin-code.html?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=123#wechat_redirect`
      return url;
    }
  }
}
</script>
