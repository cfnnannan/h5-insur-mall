import store from '@/store/index'
import cookieUtil from '@/utils/cookie'
import router from '@/router/index'
export default {
    login: {
        wechatLogin(URL) {
            let token_str = cookieUtil.getCookie('token_str')
            if( token_str == 'null' || token_str == null ) {
                let code = this.getWechatCode(URL)
                if( code ) {
                    this.setLoginWechatToken(code)
                } else {
                    if(URL.indexOf('#') != -1) {
                        router.push({path: '/', query: { skipUrl: URL.split('#')[1] }})
                    } else {
                        router.push({path: '/', query: { skipUrl: '/insureMall/mallHome' }})
                    }
                }
            } else {
                return true;
            }
        },
        getWechatCode(URL) {
            let WeChatCode = new Object();
            if (URL != undefined && URL.indexOf("?") != -1) {
                let str = URL.split('?')[1];
                let strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    WeChatCode[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
                }
            }
            return WeChatCode.code;
        },
        setLoginWechatToken(CODE) {
            store.dispatch('postLoginWechat', {
                data: {
                    code: CODE
                  },
                  success: data => {
                    if (data.result === 'SUCCESS') {
                      const result = data.retData
                      cookieUtil.setCookie('token_str', result.tokenstr, 21)
                    } else {
                        alert(data.retMsg)
                    }
                }
            })
        }
    }
}