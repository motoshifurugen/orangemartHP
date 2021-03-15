import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TestPage from './components/Pages/TestPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld
        },
        {
            path: '/test',
            name: 'test',
            component: TestPage
        },
        {
            path: '/top',
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
            path: '/adminTest',
            name: 'adminTest',
            component: () => import('./views/AdminTest.vue')
        }
    ]
})