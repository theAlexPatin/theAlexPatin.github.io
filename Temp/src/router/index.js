import Vue from 'vue'
import Router from 'vue-router'
import NotFoundView from '@/views/404'
import Home from '@/views/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/*',
      name: 'Not Found',
      component: NotFoundView
    }
  ]
})

export default router
