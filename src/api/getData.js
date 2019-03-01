import axios from '@/axios'
import getEnv from '@/utils/getEnv'
export default {
  postLoginWechat (data) {
    return axios.post('/common/login/wxgrantlogin', data)
  },
  getOrderListInfo (data) {
    return axios.post('/common/order/list',data)
  },
  getCompensateApply( data ) {
    return axios.post('/tbtzx001/order/compensateApply', data)
  },

  /**通用电子保单下载 */
  getEPolicyContent(data) {
    return axios.post(getEnv().mapPath[data.productId] + '/order/electronic/download' , data)
  },


  /**百万医疗 */
  postTbbwylOrder(data) {
    return axios.post('/tbbwyl001/order', data)
  },

  /**百万防癌 */
  postTbbwfaOrder(data) {
    return axios.post('/tbbwfa001/order', data)
  },

  /**通用订单详情查询 */
  getOrderDetail(data) {
    return axios.get(getEnv().mapPath[data.productId] + '/order/' + data.orderSysid)
  },

  /**通用待支付订单直接获取支付链接 */
  getOrderPayUrl(data) {
    return axios.post(getEnv().mapPath[data.productId] + '/order/directPayUrl', data)
  },


  /**易安订单接口 */
  getEanOrder(data) {
    return axios.post('/yian001/order', data)
  },
  
  /**分享功能 */
  postEechatShare(data) {
    return axios.post('/common/wechatTokenService/jsSdkConfig', data)
  },

  /**查询用户信息 */
  getUserInfor() {
    return axios.get('/common/user/detail')
  }
    
}