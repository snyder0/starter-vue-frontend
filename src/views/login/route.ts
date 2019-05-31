import { RouteBuilder } from '@/router'
const Router = new RouteBuilder()

const routes = [{
  path: '/',
  name: 'Login',
  component: () => import('./Login.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

Router.registerRoutes(routes)