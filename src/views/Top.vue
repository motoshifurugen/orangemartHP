<template>
    <div class="top">
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="8" lg="8">
                    <swiper :options="swiperOption">
                        <swiper-slide><img src="../assets/images/slider1.jpg" alt="スライダー1"></swiper-slide>
                        <swiper-slide><img src="../assets/images/slider2.jpg" alt="スライダー2"></swiper-slide>
                        <swiper-slide><img src="../assets/images/slider3.jpg" alt="スライダー3"></swiper-slide>
                        <swiper-slide><img src="../assets/images/slider4.jpg" alt="スライダー4"></swiper-slide>
                    </swiper>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <router-link class="simple-link" to="/leaflet"><Leaflet></Leaflet></router-link>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                <News></News>
                <div class="center">
                    <v-btn to="/news">お知らせ一覧へ</v-btn>
                </div>
                </v-col>
            </v-row>
            <div class="text">
                <h2>「鮮魚が美味しい！オレンジマート」</h2>
            </div>
            <v-row class="center">
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-btn to="/about">店舗情報・営業時間</v-btn>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-btn to="/part-time">アルバイト・パート採用情報</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.top .center{
    text-align: center;
}
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
.top .text {
    text-align: center;
}
</style>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Leaflet from './Leaflet.vue'
import News from './News'

import 'swiper/css/swiper.css'

export default {
    components: {
        Swiper,
        SwiperSlide,
        Leaflet,
        News
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