import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import orgList from '@/pages/organizationList'

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
    }
  ]
})
