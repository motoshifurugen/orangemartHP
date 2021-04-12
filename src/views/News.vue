<template>
    <div class="news">
        <v-card v-for="news in info.data" :key="news.id">
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
        <!-- <v-card v-for="letter in reverseNewsLetters" :key="letter.id">
            <v-card-text>
                <div>{{ letter.date }}</div>
                <p class="display-1 text--primary">
                    {{ letter.title }}
                </p>
                <v-list-item>
                <v-list-item-content>
                <div class="text--primary">
                    {{ letter.detail }}
                </div>
                </v-list-item-content>
                </v-list-item>
            </v-card-text>
        </v-card> -->
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
import axios from 'axios'
import moment from 'moment';

export default {
    data(){
        return{
            reveal: false,
            info: null,
            // news_letters:[
            //     {
            //         id: 1,
            //         date: '2020-12-01',
            //         title: '12月26日オープン！',
            //         detail: 'スーパー「オレンジマート」が12月26日からオープンします。鮮魚が美味しくいつでも安い！是非お越しください。'
            //     },
            //     {
            //         id: 2,
            //         date: '2020-12-05',
            //         title: 'アルバイトスタッフ募集',
            //         detail: 'オレンジマートでは一緒に働いてくれる仲間を随時募集しています。シフト制で週2 ~ 勤務可能です。応募は下記リンク先のフォームから受け付けております。お気軽にご連絡ください！'
            //     },
            //     {
            //         id: 3,
            //         date: '2020-12-26',
            //         title: 'オープンしました！',
            //         detail: '本日9時より、オレンジマートがオープンしました。皆様の生活に寄り添う存在に慣れるよう頑張ります。よろしくお願いいたします。'
            //     },
            //     {
            //         id: 4,
            //         date: '2020-12-27',
            //         title: 'おせちオードブル注文承り中',
            //         detail: '年の瀬ですね。新年の御食事にオレンジマートのオードブルはいかがですか？随時承っております。詳しくはスタッフまでお声かけください。'},
            // ],
        }
    },
    computed: {
        reverseNewsLetters() {
            return this.news_letters.slice().reverse();
        },
    },
    mounted () {
        axios
            .get('http://localhost:8000/api/letters')
            .then(response => (this.info = response))
    },
    filters: {
        moment(date) {
            return moment(date).format('YYYY/MM/DD');
        },
    }
};
</script>