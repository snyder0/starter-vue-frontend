import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [],
})

// Router Navigation Guards
router.beforeEach((to, from, next) => {
  /* must call `next` */
  if (to.matched.length > 0) {
    // There is a matched route for the navigation to be fulfilled
    next()
  } else {
    // There is no matched route for the navigation to be fulfilled
    next('/')
  }
})

router.beforeResolve((to, from, next) => {
  /* must call `next` */
  next()
})

router.afterEach((to, from) => {

})

export default router

export class RouteBuilder {
  public registerRoutes (routes: RouteConfig[]) {
    router.addRoutes(routes)
  }

  public importRoutes (r: any) {
    r.keys().forEach(r)
  }
}

let routeBuilder = new RouteBuilder()
routeBuilder.importRoutes(require.context('@/views/', true, /route.ts$/))