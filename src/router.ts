import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [],
})

export default router

export function importRoutes(r: any) {
  if (!(typeof(r) == 'function')) {
    r.keys().forEach(r)
  }
}

importRoutes(require.context('@/views/', true, /route.ts$/))

