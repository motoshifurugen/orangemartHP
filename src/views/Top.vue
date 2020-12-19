<template>
    <div class="top">
        <swiper :options="swiperOption">
            <swiper-slide><img src="../assets/images/slider1.jpg" alt="スライダー1"></swiper-slide>
            <swiper-slide><img src="../assets/images/slider2.jpg" alt="スライダー2"></swiper-slide>
            <swiper-slide><img src="../assets/images/slider3.jpg" alt="スライダー3"></swiper-slide>
            <swiper-slide><img src="../assets/images/slider4.jpg" alt="スライダー4"></swiper-slide>
        </swiper>
        <router-link to="/leaflet"><Leaflet></Leaflet></router-link>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Leaflet from '../views/Leaflet.vue'

import 'swiper/css/swiper.css'

export default {
    components: {
        Swiper,
        SwiperSlide,
        Leaflet
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            swiperOption: {
                speed: 1000,//スライドの切り替わりスピード
                spaceBetween: 20,//各スライドの余白
                centeredSlides: true,//スライダーを真ん中に
                loop: true, //無限ループ
                autoplay: { //スライドの自動切り替え
                    delay: 5000,//スライドの自動切り替えの秒数
                    disableOnInteraction: false//何らかのアクション後の自動切り替えを再開
                }
            }
        }
    }
}
</script>

<style scoped>
.swiper-container {
    height: 300px;
    width: 100%;
}
.swiper-slide {
    width:auto;
    height:auto;
}
.swiper-container img {
    width:100%;
    height:auto;
}
</style>