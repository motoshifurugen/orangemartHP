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
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>勤務曜日・時間</v-list-item-title>
                    </v-list-item>
                    <v-list-group
                        :value="true"
                        prepend-icon="mdi-account-circle"
                    >
                        <template v-slot:activator>
                            <v-list-item-title>勤務曜日・時間</v-list-item-title>
                        </template>
                        <v-list-group
                            :value="true"
                            no-action
                            sub-group
                        >
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>Admin</v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <v-list-item
                                v-for="([title, icon], i) in admins"
                                :key="i"
                                link
                            >
                                <v-list-item-title v-text="title"></v-list-item-title>
                                    <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-group>
                        <v-list-group
                            no-action
                            sub-group
                        >
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>Actions</v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <v-list-item
                                v-for="([title, icon], i) in cruds"
                                :key="i"
                                link
                            >
                                <v-list-item-title v-text="title"></v-list-item-title>
                                <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-group>
                    </v-list-group>
                </v-list>
            </v-card>
            <h3>仕事内容</h3>
            <h3>勤務曜日・時間</h3>
            <h3>資格</h3>
            <h3>待遇</h3>
            <h3>立地情報</h3>
            <h2>応募情報</h2>
            <h3>応募方法</h3>
            <h3>応募後のプロセス</h3>
            <h3>代表問い合わせ先</h3>
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