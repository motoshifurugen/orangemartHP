<template>
    <div class="admin">
        <v-container>
            {{ info }}
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <div class="text">
                        <h3>お知らせ</h3>
                    </div>
                    <v-container id="scroll-target" style="max-height: 200px" class="overflow-y-auto news-box">
                        <News></News>
                    </v-container>
                    <div class="center">
                        <v-btn to="/adminNews">お知らせ一覧へ</v-btn>
                        <v-btn to="/adminNewsAdd">お知らせを作成する</v-btn>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <Leaflet></Leaflet>
                    <div class="center">
                        <v-btn to="#">新しいチラシをアップロードする</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Leaflet from './Leaflet.vue'
import News from './News'
import axios from 'axios'

export default {
    components: {
        Leaflet,
        News
    },
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios
            .get('http://localhost:8000/api/letters')
            .then(response => (this.info = response))
    }
}
</script>