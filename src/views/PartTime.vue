<template>
    <div class="part-time">
        <v-container>
            <v-breadcrumbs :items="items" class="breadcrumb"></v-breadcrumbs>
            <h2>アルバイト募集中</h2>
                <v-row>
                    <v-col cols="12" sm="12" md="2" lg="2"></v-col>
                    <v-col cols="12" sm="12" md="3" lg="3" class="image-parent">
                        <v-img class="image-child" src="../assets/images/part-time.png"></v-img>
                    </v-col>
                    <v-col cols="12" sm="12" md="1" lg="1"></v-col>
                    <v-col cols="12" sm="12" md="6" lg="6" class="image-parent">
                        <v-list disabled class="point">
                            <v-list-item
                                v-for="(charm, i) in charms"
                                :key="i"
                            >
                                <v-list-item-icon>
                                    <v-icon v-text="charm.icon"></v-icon>
                                </v-list-item-icon>
                                <!-- <v-list-item-content class="charm"> -->
                                    <v-list-item-title v-text="charm.text" class="charm-item"></v-list-item-title>
                                <!-- </v-list-item-content> -->
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            <h3>募集情報</h3>
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
                            平日：午前9:00 ~ 午後21:00の間<br />※ 週2日・2時間/1日 から勤務可能
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
                            時給：1000円 ~ <br />夜間手当：あり
                        </v-list-item>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="true"
                        prepend-icon="mdi-store"
                    >
                        <template v-slot:activator>
                            <v-list-item-title>立地情報</v-list-item-title>
                        </template>
                        <v-list-item>
                            オレンジマートオオクラ<br />住所：東京都豊島区雑司が谷3-12-2<br />アクセス：JR池袋駅から徒歩10分
                        </v-list-item>
                    </v-list-group>
                </v-list>
            </v-card>
            <h3>応募情報</h3>
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
                            代表お問い合わせ先に電話でご連絡ください。
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
                            電話で面接日を決定し店舗で面接をします。<br />面接後１週間以内に可否の連絡をします。
                        </v-list-item>
                    </v-list-group>
                </v-list>
                <v-list>
                    <v-list-group
                        :value="true"
                        prepend-icon="mdi-phone"
                    >
                        <template v-slot:activator>
                            <v-list-item-title>代表お問い合わせ先</v-list-item-title>
                        </template>
                        <v-list-item>
                            <v-list-item-title>TEL：03-3983-7912</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list>
            </v-card>
            <!-- <v-btn to="#" x-large color="blue accent-4" block class="white--text">申し込みフォーム</v-btn> -->
        </v-container>
    </div>
</template>

<style scoped>
.v-list-item {
    min-height: 1em;
}
.point .v-list-item {
    padding: 0;
}
.indent{
    text-indent: 1em;
}
.v-application--is-ltr .v-list-item__icon:first-child {
    margin: 0.5em;
}
.v-card {
    margin-bottom: 1em;
}
h2 {
    text-align: center;
}
h3 {
    margin: 0.5em 0;
}
/* .charm {
    word-break: normal;
    overflow: scroll;
    padding: 0.1em 0;
} */
.charm-item {
    word-break: normal;
}
.image-parent {
    display: flex;
    align-items: center;
}
</style>

<script>
export default {
    data: () => ({
        charms: [
            { text: '未経験でも大歓迎！', icon: 'mdi-check-circle' },
            { text: 'シフト制だからスキマ時間に最適！', icon: 'mdi-check-circle' },
            { text: '福利厚生もばっちり！', icon: 'mdi-check-circle' },
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
        items: [
            {
                text: "トップ",
                disabled: false,
                href: '/orange/',
            },
            {
                text: "アルバイト募集情報",
                disabled: true,
                href: '/orange/part-time',
            },
        ]
    }),
}
</script>