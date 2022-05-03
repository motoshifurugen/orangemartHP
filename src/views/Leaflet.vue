<template>
    <div class="leaflet">
        <v-container>
            <v-breadcrumbs :items="items" class="breadcrumb"></v-breadcrumbs>
            <div class="middle">
                <h1>{{ leaflet["updated_at"] | moment }}更新のチラシ</h1>
                <img v-bind:src="leaflet.file_path" alr="チラシ">
            </div>
        </v-container>
    </div>
</template>

<style scoped>
.leaflet {
    text-align: center;
    border-radius: 0.5rem;
}
.leaflet h1{
    font-size: 1.5em;
    padding-top: 0.25em;
    color:orange;
}
.leaflet img {
    width: 80%;
    height: auto;
}
</style>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
    data() {
        return {
            leaflet: '',
            items: [
            {
                text: "トップ",
                disabled: false,
                href: '/orange/',
            },
            {
                text: "チラシ",
                disabled: true,
                href: '/orange/leaflet',
            },
            ]
        };
    },
    mounted () {
        axios
            .get('http://xs199209.xsrv.jp/api/upload')
            .then(response => (this.leaflet = response.data));
        const title = "チラシ | オレンジマート"
        const description = "オレンジマートオークラのお得情報が詰まったチラシを掲載します。"
        document.title = title
        document.querySelector("meta[property='og:title']").setAttribute('content', title)
        document.querySelector("meta[name='description']").setAttribute('content', description)
        document.querySelector("meta[property='og:description']").setAttribute('content', description)
    },
    filters: {
        moment(date) {
            return moment(date).format('M月D日');
        },
    }
}
</script>
