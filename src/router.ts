import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [],
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