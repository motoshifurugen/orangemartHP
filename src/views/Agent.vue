<template>
    <div>
        <v-container class="about-agent">
            <h2>企業情報</h2>
            <v-simple-table>
                <template v-slot:default>
                    <tbody>
                        <tr
                            v-for="item in desserts"
                            :key="item.name"
                        >
                            <td>{{ item.name }}</td>
                            <td>{{ item.data }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <br>
            <!-- <v-row class="center">
                <v-col cols="0" sm="0" md="3" lg="3"></v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-btn href="http://umintyu-water.com/" target="_blank" x-large color="blue accent-4" block class="white--text"><b>ウォーターサーバー「海人ぬ宝」</b></v-btn>
                </v-col>
                <v-col cols="0" sm="0" md="3" lg="3"></v-col>
            </v-row> -->
        </v-container>
    </div>
</template>

<style scoped>
.about-agent h2 {
    text-align: center;
    margin-bottom: 0.25em;
}
</style>

<script>
export default {
    data () {
        return {
            desserts: [
            {
                name: '社名',
                data: '株式会社大倉',
            },
            {
                name: '住所',
                data: '東京都豊島区雑司が谷3-12-2',
            },
            {
                name: 'TEL',
                data: '(03)3983-7912',
            },
            {
                name: 'FAX',
                data: '(03)3983-7913',
            },
            {
                name: '設立',
                data: '昭和28年4月14日',
            },
            ],
        }
    },
}
</script>
