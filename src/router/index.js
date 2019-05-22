import Vue from 'vue'
import Router from 'vue-router'
import NotFoundView from '@/views/404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () =>
            import(/* webpackChunkName: "home" */ '@/views/Home'),
    },
    {
      name: 'About',
      path: '/about',
      component: () =>
            import(/* webpackChunkName: "about" */ '@/views/About'),
    },
    {
      name: 'Music',
      path: '/music',
      component: () =>
            import(/* webpackChunkName: "music" */ '@/views/Music'),
    },
    {
      name: 'Tech',
      path: '/tech',
      component: () =>
            import(/* webpackChunkName: "tech" */ '@/views/Tech'),
    },
    {
      path: '/*',
      name: 'Not Found',
      component: NotFoundView
    }
  ]
})

export default router
