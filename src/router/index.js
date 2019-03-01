import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: resolve => require(['@/views/start'],resolve)
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      meta: {title: '保单查询'},
      component: resolve => require(['@/views/order-summary/order-list'],resolve)
    },
    {
      path: '/orderdetails',
      name: 'orderdetails',
      meta: {
        title: '保单详情',
        // requireAuth: true
      },
      component: resolve => require(['@/views/order-summary/order-details'],resolve)
    },
    {
      path: '/ehome',
      name: 'ehome',
      meta: {title: 'E享童年少儿综合医疗保险'},
      component: resolve => require(['@/views/ean-project/e-enjoy-child/e-home/e-home-page'],resolve)
    },
    {
      path: '/whome',
      name: 'whome',
      meta: {title: '孕产无忧综合保障计划'},
      component: resolve => require(['@/views/ean-project/woman-worry-free/w-home/w-home-page'],resolve)
    },
    {
      path: '/vhome',
      name: 'vhome',
      meta: {title: '疫苗无忧险'},
      component: resolve => require(['@/views/ean-project/vaccine-worry-free/v-home/v-home-page'],resolve)
    },
    {
      path: '/lhome',
      name: 'lhome',
      meta: {title: '少儿白血病疾病保险'},
      component: resolve => require(['@/views/ean-project/leukemia-insure/l-home/l-home-page'],resolve)
    },
    {
      path: '/payment',
      name: 'payment',
      meta: {
        title: '支付状态',
        // requireAuth: true
      },
      component: resolve => require(['@/components/public-components/payment'],resolve)
    },
    {
      path: '/medicalHome',
      name: 'medicalHome',
      meta: {title: '全民百万医疗保险计划'},
      component: resolve => require(['@/views/taibao-project/million-medical-care/medical-home/medical-home-page'],resolve)
    },
    {
      path: '/preventHome',
      name: 'preventHome',
      meta: {title: '恶性肿瘤百万保障计划'},
      component: resolve => require(['@/views/taibao-project/million-prevent-cancer/prevent-home/prevent-home-page'],resolve)
    },
    {
      path: '/insureMall',
      name: 'insureMall',
      component: resolve => require(['@/views/insurance-mall'],resolve),
      children: [
        {
          path: 'mallHome',
          meta: {title: '小慈保保首页'},
          component: resolve => require(['@/views/insurance-mall/mall-home/mall-home-page'],resolve),
        },
        {
          path: 'mallUcenter',
          meta: {title: '我的'},
          component: resolve => require(['@/views/insurance-mall/user-center/user'],resolve),
        },
      ]
    },
    {
      path: '/mallMatter',
      meta: {title: '常见问题'},
      component: resolve => require(['@/views/insurance-mall/user-center/user-router/common-matter'],resolve),
    },
    {
      path: '/mallApply',
      meta: {title: '申请理赔'},
      component: resolve => require(['@/views/insurance-mall/user-center/user-router/apply-compensate'],resolve),
    },
  ]
})