<template>
    <div class="admin">
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <div class="text">
                        <h2>お知らせ一覧</h2>
                    </div>
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
                    <div class="center">
                        <v-btn to="/adminNews" class="orange--text">お知らせ追加・編集ページへ</v-btn>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <div class="center">
                        <h2>{{ leaflet["updated_at"] | moment }}更新のチラシ</h2>
                        <img v-bind:src="leaflet.file_path" alr="チラシ">
                        <Upload></Upload>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
import Upload from '../components/Upload'
import moment from 'moment';

export default {
    components: {
        Upload,
    },
    data () {
        return {
            info: null,
            leaflet: '',
        }
    },
    mounted () {
        axios
            .get('http://xs199209.xsrv.jp/api/letters')
            .then(response => (this.info = response.data.slice().reverse()))
        axios
            .get('http://xs199209.xsrv.jp/api/upload')
            .then(response => (this.leaflet = response.data))
    },
    filters: {
        moment(date) {
            return moment(date).format('YYYY/MM/DD');
        },
    }
}
</script>