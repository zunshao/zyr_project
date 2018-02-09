import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import orgList from '@/pages/organizationList'
import deviceList from '@/pages/deviceList'
import checkList from '@/pages/checkList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/orgList',
      component: orgList
    },
    {
      path: '/deviceList',
      component: deviceList
    },
    {
      path: '/checkList',
      component: checkList
    }
  ]
})
