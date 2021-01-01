<template>
    <div>
        <v-container>
            <h1>企業情報</h1>
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
            <v-row class="center">
                <v-col cols="12" sm="12" md="4" lg="4">
                    <v-btn to="#" x-large color="light-blue accent-4" block>オレンジマート</v-btn>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <v-btn to="#" x-large color="light-blue accent-4" block>割烹料理</v-btn>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <v-btn to="#" x-large color="light-blue accent-4" block>ウォーターサーバー</v-btn>
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
            data: '東京都豊島区雑司ヶ谷3-12-2',
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
            data: '平成18年6月2日',
          },
          {
            name: '主任',
            data: '秋間広海',
          },
        ],
      }
    },
  }
</script>
