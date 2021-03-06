import { RouteBuilder } from '@/router'
const Router = new RouteBuilder()

const routes = [{
  path: '/home',
  name: 'Home',
  component: () => import('./Home.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

Router.registerRoutes(routes)