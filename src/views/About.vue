<template>
    <div>
        <v-container class="about-mart">
            <v-breadcrumbs :items="items" class="breadcrumb"></v-breadcrumbs>
            <h2>店舗情報</h2>
            <v-row>
                <v-col cols="12" sm="12" md="8" lg="8">
                    <h3>オレンジマートオオクラ</h3>
                    <p>営業時間：10:00 ~ 21:00</p>
                    <p>場所：東京都豊島区雑司が谷3丁目12-1</p>
                    <p>電話番号：03-3983-7912</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.1540530788084!2d139.71048001486682!3d35.722429635319585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6a663269fd%3A0xf66b35fb6d5cb499!2z44Kq44Os44Oz44K444Oe44O844OI44Kq44O844Kv44Op!5e0!3m2!1sja!2sjp!4v1609493390273!5m2!1sja!2sjp" width="1000" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <router-link to="/leaflet" target="_blank">
                        <v-img src="../assets/images/leaflet-bannar.png" rounded></v-img>
                    </router-link>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                    <Agent></Agent>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
iframe {
    max-width: 100%;
}
@media screen and (max-width: 480px) {
    /* 480px以下に適用されるCSS（スマホ用） */
    iframe {
        max-height: 150px;
    }
}
.about-mart h2 {
    text-align:center;
    margin-bottom: 0.25em;
}
.about-mart h3 {
    color: orange;
    margin-bottom: 0.5em;
}
p {
    margin-bottom:8px;
}
</style>

<script>
import Agent from './Agent'

export default {
    components: {
        Agent,
    },
    data: () => ({
        items: [
            {
                text: "トップ",
                disabled: false,
                href: '/orange/',
            },
            {
                text: "店舗情報",
                disabled: true,
                href: '/orange/about',
            },
        ]
    })
}
</script>