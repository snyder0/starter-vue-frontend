import { RouteBuilder } from '@/router'
const Router = new RouteBuilder()

const routes = [{
  path: '/organizations',
  name: 'Organizations',
  component: () => import('./Organizations.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

Router.registerRoutes(routes)