// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import cookieUtil from '@/utils/cookie'
import VueWechatTitle from 'vue-wechat-title'
import {Popup} from 'vue-ydui/dist/lib.rem/popup';
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar';
import {Icons} from 'vue-ydui/dist/lib.rem/icons';
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
Vue.use(VueWechatTitle)
Vue.component(Popup.name, Popup);
Vue.component(TabBar.name, TabBar);
Vue.component(TabBarItem.name, TabBarItem);
Vue.component(Icons.name, Icons);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
    eventHub:new Vue()
  }
})
