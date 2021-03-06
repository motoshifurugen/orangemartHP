<template>
    <div>
        <v-container>
            <h1>アルバイト募集中</h1>
            <h2>魅力</h2>
                <v-list disabled>
                    <v-list-item
                        v-for="(charm, i) in charms"
                        :key="i"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="charm.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="charm.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            <h2>募集情報</h2>
            <v-card
                class="mx-auto"
                max-width="100%"
                tile
            >
               <v-list>
                   <v-list-group
                        :value="true"
                        prepend-icon="mdi-order-bool-descending-variant"
                    >
                    <template v-slot:activator>
                            <v-list-item-title>仕事内容</v-list-item-title>
                        </template>
                        <v-list-item>
                            <v-list-item-icon></v-list-item-icon>
                            食品陳列、レジ打ち、惣菜調理など。未経験者でも大歓迎です。
                        </v-list-item>
                   </v-list-group>
               </v-list>
               <v-list>
                    <v-list-group
                        :value="true"
                        prepend-icon="mdi-calendar-month"
                    >
                        <template v-slot:activator>
                            <v-list-item-title>勤務曜日・時間</v-list-item-title>
                        </template>
                        <v-list-item>
                            <v-list-item-icon></v-list-item-icon>
                            平日：午前8:00 ~ 午後21:00の間<br />週2日・1日2時間 ~ 勤務可能
                        </v-list-item>
                    </v-list-group>
               </v-list>
               <v-list>
                    <v-list-group
                        :value="true"
                        prepend-icon="mdi-account-cash"
                    >
                        <template v-slot:activator>
                            <v-list-item-title>給料・待遇</v-list-item-title>
                        </template>
                        <v-list-item>
                            <v-list-item-icon></v-list-item-icon>
                            時給：1000円 ~ <br />夜間手当：あり<br />交通費：
                        </v-list-item>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="true"
                        prepend-icon="mdi-account-cash"
                    >
                        <template v-slot:activator>
                            <v-list-item-title>立地情報</v-list-item-title>
                        </template>
                        <v-list-item>
                            <v-list-item-icon></v-list-item-icon>
                            オレンジマートオオクラ<br />住所：<br />アクセス：
                        </v-list-item>
                    </v-list-group>
                </v-list>
            </v-card>
            <h2>応募情報</h2>
            <v-card
                class="mx-auto"
                max-width="100%"
                tile
            >
               <v-list>
                   <v-list-group
                        :value="true"
                        prepend-icon="mdi-order-bool-descending-variant"
                    >
                    <template v-slot:activator>
                            <v-list-item-title>応募方法</v-list-item-title>
                        </template>
                        <v-list-item>
                            <v-list-item-icon></v-list-item-icon>
                            応募には以下の２つの方法があります。<br />①このページ下部にある「申し込み」ボタンを押して、申し込みフォームを送信する。<br />②代表お問い合わせ先に電話で連絡する。
                        </v-list-item>
                   </v-list-group>
               </v-list>
               <v-list>
                    <v-list-group
                        :value="true"
                        prepend-icon="mdi-calendar-month"
                    >
                        <template v-slot:activator>
                            <v-list-item-title>応募後のプロセス</v-list-item-title>
                        </template>
                        <v-list-item>
                            <v-list-item-icon></v-list-item-icon>
                            申し込み後1週間以内に、代表からお電話で連絡します。<br />その際に面接日を決定してもらい、店舗で面接をします。<br />面接後１週間以内に可否の連絡をします。
                        </v-list-item>
                    </v-list-group>
               </v-list>
               <v-list>
                    <v-list-group
                        :value="true"
                        prepend-icon="mdi-account-cash"
                    >
                        <template v-slot:activator>
                            <v-list-item-title>代表お問い合わせ先</v-list-item-title>
                        </template>
                        <v-list-item>
                            <v-list-item-icon></v-list-item-icon>
                            <v-list-item-title>代表：<br />TEL：</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list>
            </v-card>
            <v-btn to="#" x-large color="green accent-4" block>申し込む</v-btn>
        </v-container>
    </div>
</template>

<script>
  export default {
    data: () => ({
      charms: [
        { text: '未経験でも安心。優しくサポートします。', icon: 'mdi-check-circle' },
        { text: 'シフト制だから、自分の働きたい分だけ働けます。', icon: 'mdi-check-circle' },
        { text: '福利厚生もばっちり。', icon: 'mdi-check-circle' },
      ],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }),
  }
</script>