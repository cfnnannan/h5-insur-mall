import actionCallback from '@/utils/action-util';
import getData from '../../api/getData';

const state = {};
const getters = {};
const actions = {

  async postLoginWechat({ commit }, options) {
    const result = await getData.postLoginWechat(options.data);
    actionCallback(options, result);
  },
  async getOrderListInfo({ commit }, options) {
    const result = await getData.getOrderListInfo(options.data);
    actionCallback(options, result);
  },
  async getCompensateApply({commit}, options) {
    const result = await getData.getCompensateApply(options.data) 
    actionCallback(options, result);
  },

  /**通用电子保单下载 */
  async getEPolicyContent({commit}, options) {
    const result = await getData.getEPolicyContent(options.data);
    actionCallback(options, result);
  },

  /**订单详情 */
  async getOrderDetail({commit}, options) {
    const result = await getData.getOrderDetail(options.data);
    actionCallback(options, result);
  },

  /**通用待支付订单直接获取支付链接 */
  async getOrderPayUrl({commit}, options) {
    const result = await getData.getOrderPayUrl(options.data);
    actionCallback(options, result);
  },

  /**易安订单接口 */
  async getEanOrder({commit}, options) {
    const result = await getData.getEanOrder(options.data);
    actionCallback(options, result);
  },

  async postEechatShare({ commit }, options) {
    const result = await getData.postEechatShare(options.data);
    actionCallback(options, result);
  },

  async postTbbwylOrder({ commit }, options) {
    const result = await getData.postTbbwylOrder(options.data);
    actionCallback(options, result);
  },

  async postTbbwfaOrder({ commit }, options) {
    const result = await getData.postTbbwfaOrder(options.data);
    actionCallback(options, result)
  },

  async getUserInfor({ commit }, options) {
    const result = await getData.getUserInfor();
    actionCallback(options, result)
  }

};
const mutations = {};
export default {
  state,
  getters,
  actions,
  mutations
};
