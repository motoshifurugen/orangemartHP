import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    // ↓本番で適用
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'top',
            component: () => import('./views/Top.vue'),
            meta: { title: 'トップ | オレンジマート', desc: 'オレンジマートオークラは、鮮度がいい魚や食材を販売している池袋のスーパーです。'}
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
            meta: { title: '店舗情報 | オレンジマート', desc: 'オレンジマートオークラは、鮮度がいい魚や食材を販売している池袋のスーパーです。'}
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('./views/News.vue'),
            meta: { title: 'お知らせ | オレンジマート', desc: 'オレンジマートオークラの最新情報をお届けします。'}
        },
        {
            path: '/part-time',
            name: 'part-time',
            component: () => import('./views/PartTime.vue'),
            meta: { title: 'アルバイト情報 | オレンジマート', desc: 'オレンジマートオークラは、一緒に働いてくれる方を募集しています。未経験者大歓迎です。'}
        },
        {
            path: '/leaflet',
            name: 'leaflet',
            component: () => import('./views/Leaflet.vue'),
            meta: { title: 'チラシ | オレンジマート', desc: 'オレンジマートオークラのお得情報が詰まったチラシを掲載します。'}
        },
        {
            path: '/agent',
            name: 'agent',
            component: () => import('./views/Agent.vue'),
            meta: { title: '企業情報 | オレンジマート', desc: 'オレンジマートオークラは、株式会社大倉が運営しています。'}
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