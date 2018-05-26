import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/Questions'
import Main from '@/components/main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    }
  ]
})
