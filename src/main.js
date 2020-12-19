import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import vuetify from './plugins/vuetify';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    VueAwesomeSwiper,
    render: h => h(App)
}).$mount('#app')
