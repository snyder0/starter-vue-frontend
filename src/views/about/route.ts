import * as routerTest from '@/router'

const routes = [{
    path: '/about',
    name: 'About',
    component: () => import('./About.vue'),
    meta: {
        // Can send meta props
    }
}]

routerTest.importRoutes(routes)