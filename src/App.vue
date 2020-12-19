<template>
  <v-app>
      <v-navigation-drawer app v-model="sideMenu">
          <v-container>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title grey--text text--darken-2">
                        オレンジマート
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list nav>
                <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name">
                    <v-list-item-icon>
                        <v-icon>{{ nav_list.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-container>
      </v-navigation-drawer>
    <v-app-bar color="yellow darken-3" dark app>
        <v-toolbar-title>オレンジマート</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="sideMenu=!sideMenu"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
        <router-view />
    </v-main>
    <v-footer color="yellow darken-3" dark app clipped>
        株式会社 大倉
    </v-footer>
  </v-app>
</template>

<script>
export default {
    data(){
        return{
            sideMenu: null,
            nav_lists:[
                {name: '今週のチラシ',icon: 'mdi-cart-variant'},
                {name: 'お知らせ',icon: 'mdi-email'},
                {name: '店舗情報・営業時間',icon: 'mdi-store'},
                {name: 'アルバイト採用',icon: 'mdi-account'},
            ]
        }
    }
};
</script>
