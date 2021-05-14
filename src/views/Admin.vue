<template>
    <div class="admin">
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <div class="text">
                        <h3>お知らせ</h3>
                    </div>
                    <v-container id="scroll-target" style="max-height: 200px" class="overflow-y-auto news-box">
                        <News></News>
                    </v-container>
                    <div class="center">
                        <v-btn to="/adminNews" class="orange--text">お知らせ追加・編集ページへ</v-btn>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <Leaflet></Leaflet>
                    <div class="center">
                        <Upload></Upload>
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
import Upload from '../components/Upload'

export default {
    components: {
        Leaflet,
        News,
        Upload
    },
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios
            .get('http://cocoahearts.xsrv.jp/api/letters')
            .then(response => (this.info = response))
    }
}
</script>