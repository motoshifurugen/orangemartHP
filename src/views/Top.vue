<template>
    <div class="top">
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="8" lg="8">
                    <swiper :options="swiperOption">
                        <swiper-slide><img src="../assets/images/slider1.jpeg" alt="スライダー1"></swiper-slide>
                        <swiper-slide><img src="../assets/images/slider2.jpeg" alt="スライダー2"></swiper-slide>
                        <swiper-slide><img src="../assets/images/slider3.jpeg" alt="スライダー3"></swiper-slide>
                        <swiper-slide><img src="../assets/images/slider4.jpeg" alt="スライダー4"></swiper-slide>
                    </swiper>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <router-link class="simple-link" to="/leaflet" style="text-decoration:none"><Leaflet></Leaflet></router-link>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                    <div class="text">
                        <h2>お知らせ</h2>
                    </div>
                    <v-container id="scroll-target" style="max-height: 200px" class="overflow-y-auto news-box">
                        <News></News>
                    </v-container>
                <div class="right">
                    <v-btn to="/news" class="news-btn"><v-icon>mdi-email</v-icon>お知らせ一覧へ</v-btn>
                </div>
                </v-col>
            </v-row>
            <div class="text text-p">
                <p>オレンジマートでは、一緒に働いてくれる仲間を随時募集中です！</p>
            </div>
            <v-row class="center">
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-btn to="/about" x-large color="light-blue accent-4" block class="white--text"><b>店舗情報・営業時間</b></v-btn>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-btn to="/part-time" x-large color="green accent-4" block class="white--text"><b>アルバイト・パート採用情報</b></v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.top .center{
    text-align: center;
}
.right {
    text-align: right;
}
.swiper-container {
    height: 300px;
    width: 100%;
}
@media screen and (max-width: 480px) {
    /* 480px以下に適用されるCSS（スマホ用） */
    .swiper-container {
        height: 240px;
        width: 100%;
    }
}
.swiper-slide {
    width: auto;
    height: auto;
}
.swiper-container img {
    width:100%;
    height:auto;
}
.top .text{
    text-align: center;
}
.text-p {
    margin: 1em 0;
}
.news-box {
    width: 98%;
    border: solid 3px orange;
    border-radius: 0.5rem;
    padding: 0.1em;
}
.news-btn {
    background-color: orange !important;
    color: white;
    padding:0;
    margin-right: 0.5em;
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