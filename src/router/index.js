import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'
import ElementVue from '@/components/ElementVue'
import ComponentVue from '@/components/ComponentVue'
import BossWeb from '@/components/BossWeb'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo
    },
    {
      path: '/ele',
      name: 'ele',
      component: ElementVue
    },
    {
      path: '/component-is',
      name: 'component-is',
      component: ComponentVue
    },
    {
      path: '/bossWeb',
      name: 'bossweb',
      component: BossWeb
    },
    {
      path:'/Detail',
      name:"detail",
      component:Detail
    }
  ]
})
