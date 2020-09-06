import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bell from '@/pages/Bell'
import index2 from '@/pages/index2'

Vue.use(Router)

export default new Router({
  mode : 'hash',//路由模式 需要本地预览 禁止用history
  routes: [
    //path为空默认首页
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },


    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      name: 'Bell',
      path: '/Bell',
      component: Bell,
    },

    {
      name: 'index2',
      path: '/index2',
      component: index2,
    },

  ]
})
