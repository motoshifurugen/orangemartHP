import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    // base: '/orange/',
    routes: [
        {
            path: '/',
            name: 'top',
            component: () => import('./views/Top.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('./views/News.vue')
        },
        {
            path: '/part-time',
            name: 'part-time',
            component: () => import('./views/PartTime.vue')
        },
        {
            path: '/leaflet',
            name: 'leaflet',
            component: () => import('./views/Leaflet.vue')
        },
        {
            path: '/agent',
            name: 'agent',
            component: () => import('./views/Agent.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./views/Admin.vue')
        },
        {
            path: '/adminNews',
            name: 'adminNews',
            component: () => import('./views/AdminNews.vue')
        },
        {
            path: '/adminNewsAdd',
            name: 'adminNewsAdd',
            component: () => import('./views/AdminNewsAdd.vue')
        }
    ]
})