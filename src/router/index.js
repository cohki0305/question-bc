import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/Questions'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Questions',
      component: Questions
    }
  ]
})
