<template>
  <v-app>
      <v-navigation-drawer app v-model="side_menu">
          <v-container>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title grey--text text--darken-2">
                        <router-link class="simple-link menu-top" to="/"><b>オレンジマート</b></router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list nav>
                <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name" :to="nav_list.link">
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
    <v-app-bar class="yellow darken-3" dark app>
        <v-toolbar-title>オレンジマート</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="side_menu=!side_menu"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
        <router-view />
    </v-main>
    <v-footer class="yellow darken-3" padless>
        <v-row align="center" justify="space-around" no-gutters>
            <v-btn v-for="list in footer_lists" :key="list.name" :to="list.link" class="yellow darken-3" color="white" text>
                {{ list.name }}
            </v-btn>
            <v-col class="yellow darken-3 py-4 text-center white--text" cols="12" >
                {{ new Date().getFullYear() }} — <strong>株式会社大倉企画</strong>
            </v-col>
        </v-row>
    </v-footer>
  </v-app>
</template>

<style>
#app .simple-link {
    text-decoration: none;
}
#app .col-sm-12 {
    padding: 10px !important;
}
.menu-top {
    color:orange !important;
}
</style>

<script>
export default {
    data(){
        return{
            side_menu: null,
            nav_lists:[
                {
                    name: '今週のチラシ',
                    icon: 'mdi-cart-variant',
                    link: '/leaflet'
                },
                {
                    name: 'お知らせ',
                    icon: 'mdi-email',
                    link: '/news'
                },
                {
                    name: '店舗情報・営業時間',
                    icon: 'mdi-store',
                    link: '/about'
                },
                {
                    name: 'アルバイト',
                    icon: 'mdi-account',
                    link: '/part-time'},
            ],
            footer_lists: [
                {
                    name: 'トップ',
                    link: '/',
                },
                {
                    name: '会社情報',
                    link: '/agent',
                },
                {
                    name: 'アルバイト',
                    link: '/part-time',
                },
                // {
                //     name: '管理',
                //     link: '/admin',
                // },
            ],
        }
    }
};
</script>
