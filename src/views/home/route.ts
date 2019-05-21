import * as router from '@/router'

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('./Home.vue'),
    meta: {
        // Can send meta props
    }
}]

router.importRoutes(routes)