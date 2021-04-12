<template>
    <div>
        <v-container>
            <h1>店舗情報</h1><br>
            <h2>オレンジマートオオクラ</h2>
            <h3>営業時間：00:00 ~ 00:00</h3>
            <h3>休業日：曜日</h3>
            <h3>場所：東京都豊島区・・・</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.1540530788084!2d139.71048001486682!3d35.722429635319585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6a663269fd%3A0xf66b35fb6d5cb499!2z44Kq44Os44Oz44K444Oe44O844OI44Kq44O844Kv44Op!5e0!3m2!1sja!2sjp!4v1609493390273!5m2!1sja!2sjp" width="1000" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <v-row class="center">
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-btn to="/leaflet" x-large color="light-blue accent-4" block>今週のチラシ</v-btn>
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
</style>

<script>
import Agent from './Agent'

export default {
    components: {
        Agent,
    },
}
</script>