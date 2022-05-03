<template>
    <div class="top">
        <v-container>
            <v-row class="center">
                <v-col cols="4" xs="4" sm="4" md="4" lg="4">
                    <v-btn
                        color="red"
                        elevation="0"
                        outlined
                        block
                        to="/leaflet"
                    >チラシ</v-btn>
                </v-col>
                <v-col cols="4" xs="4" sm="4" md="4" lg="4">
                    <v-btn
                        color="primary"
                        elevation="0"
                        outlined
                        block
                        to="/about"
                        class="font-weight-black"
                    >店舗情報</v-btn>
                </v-col>
                <v-col cols="4" xs="4" sm="4" md="4" lg="4">
                    <v-btn
                        color="teal"
                        elevation="0"
                        outlined
                        block
                        to="/part-time"
                        class="font-weight-black"
                    >採用情報</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="8" lg="8">
                    <swiper :options="swiperOption">
                        <swiper-slide><img src="../assets/images/slider1.png" alt="スライダー1"></swiper-slide>
                        <swiper-slide><img src="../assets/images/slider2.png" alt="スライダー2"></swiper-slide>
                        <swiper-slide><img src="../assets/images/slider3.png" alt="スライダー3"></swiper-slide>
                        <swiper-slide><img src="../assets/images/slider4.png" alt="スライダー4"></swiper-slide>
                    </swiper>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <router-link to="/leaflet" target="_blank">
                        <v-img src="../assets/images/leaflet-bannar.png"></v-img>
                    </router-link>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                    <div class="text">
                        <h2>お知らせ</h2>
                    </div>
                    <v-container id="scroll-target" class="overflow-y-auto news-box">
                        <v-list disabled>
                            <v-list-item-group>
                                <v-list-item v-for="news in info" :key="news.id">
                                    <v-list-item-icon>
                                        {{ news["created_at"] | moment }}
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        {{ news["title"] }}
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
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
                    <v-btn
                        color="primary"
                        elevation="0"
                        outlined
                        block
                        x-large
                        to="/about"
                        class="font-weight-black"
                    >店舗情報・営業時間</v-btn>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-btn
                        color="teal"
                        elevation="0"
                        outlined
                        block
                        x-large
                        to="/part-time"
                        class="font-weight-black"
                    >アルバイト・パート採用情報</v-btn>
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
        height: 150px;
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
import 'swiper/css/swiper.css'
import axios from 'axios';
import moment from 'moment';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            swiperOption: {
                speed: 1000,//スライドの切り替わりスピード
                spaceBetween: 20,//各スライドの余白
                slidesPerView: 1.5, // 左右の画像のはみ出し
                centeredSlides: true,//スライダーを真ん中に
                loop: true, //無限ループ
                autoplay: { //スライドの自動切り替え
                    delay: 5000,//スライドの自動切り替えの秒数
                    disableOnInteraction: false//何らかのアクション後の自動切り替えを再開
                }
            },
            items: [
                { text: 'Real-Time', icon: 'mdi-clock' },
                { text: 'Audience', icon: 'mdi-account' },
                { text: 'Conversions', icon: 'mdi-flag' },
            ],
            info: null,
        }
    },
    mounted () {
        axios
            .get('https://xs199209.xsrv.jp/api/letters')
            .then(response => (
                this.info = response.data.reverse().slice(0,3)
            ));
        const title = "トップ | オレンジマート"
        const description = "オレンジマートオークラは、鮮度がいい魚や食材を販売している池袋のスーパーです。"
        document.title = title
        document.querySelector("meta[property='og:title']").setAttribute('content', title)
        document.querySelector("meta[name='description']").setAttribute('content', description)
        document.querySelector("meta[property='og:description']").setAttribute('content', description)
    },
    filters: {
        moment(date) {
            return moment(date).format('YYYY/MM/DD');
        },
    }
}
</script>