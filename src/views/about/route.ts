import { RouteBuilder } from '@/router'
const Router = new RouteBuilder()

const routes = [{
  path: '/about',
  name: 'About',
  component: () => import('./About.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

Router.registerRoutes(routes)