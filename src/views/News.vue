<template>
    <div class="news">
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
    </div>
</template>

<style scoped>
.news {
    width: 100%;
}
.news p {
    font-size: 1.5em !important;
}
.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
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
        }
    },
    mounted () {
        axios
            .get('http://cocoahearts.xsrv.jp/api/letters')
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