<template>
    <div class="news">
        <v-container>
            <v-breadcrumbs :items="items" class="breadcrumb"></v-breadcrumbs>
            <v-card v-for="news in info" :key="news.id">
                <v-card-text>
                    <div>{{ news["created_at"] | moment }}</div>
                    <p class="display-1 text--primary">
                        {{ news["title"] }}
                    </p>
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text--primary">
                                {{ news["body"] }}
                            </div>
                        </v-list-item-content>
                    </v-list-item>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<style scoped>
.news {
    width: 100%;
}
.news p {
    font-size: 1.25em !important;
    line-height: 1.5em;
    margin: 7px 0;
}
.v-card {
    border: 1px solid orange;
    margin: 0.5em;
}
.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}
.display-1 {
    border-bottom: 1px dotted gray;
    margin: 0;
}
.v-list-item {
    padding: 0;
    text-indent: 1em;
}
.v-list-item__content {
    padding: 0;
}
</style>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
    data(){
        return{
            reveal: false,
            info: null,
            items: [
            {
                text: "トップ",
                disabled: false,
                href: '/orange/',
            },
            {
                text: "お知らせ",
                disabled: true,
                href: '/orange/news',
            },
            ]
        }
    },
    mounted () {
        axios
            .get('https://xs199209.xsrv.jp/api/letters')
            .then(response => (
                this.info = response.data.slice().reverse()
            ));
    },
    filters: {
        moment(date) {
            return moment(date).format('YYYY/MM/DD');
        },
    }
};
</script>