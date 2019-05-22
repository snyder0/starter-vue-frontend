import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/About.vue')
    },
    {
      path: '/organization',
      name: 'organization',
      component: () => import('@/views/organization/Organization.vue')
    },
  ],
})

export default router

