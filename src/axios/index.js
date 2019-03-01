import Vue from 'vue';
import axios from 'axios'
import getEnv from '@/utils/getEnv'
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import cookieUtil from '@/utils/cookie'
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading,
};

const instance = axios.create({
  baseURL: getEnv().env,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
})
instance.interceptors.request.use((config) => {
  if(getEnv().useLocalToken) {
    config.headers['Authorization'] = 'Beerer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDgyOTg2ODUsImp0aSI6IjEzYmMyMjYzLWFlYzItNDQ4MS05YWI4LTFjY2I5MGE2ZWUxMyIsInVzZXJTeXNpZCI6IjIwMTkwMTE3MDk0NzU5NjM4OTMzNDYwYXhBUSJ9.GLV1rpTFwlnYuOTLrBZDW3nO_zHSb9po8Y8lkpGvI8g' || null
  } else {
    config.headers['Authorization'] = cookieUtil.getCookie('token_str') || null
  }
  return config
}, (err) => {
  return Promise.reject(err)
})
export default instance
