<template>
  <div class="adminNewsAdd">
    <v-data-table
      :headers="headers"
      :items="info"
      sort-by="id"
      sort-desc
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>お知らせ一覧</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="orange white--text"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                新規作成
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline orange--text"><b>{{ formTitle }}</b></span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-text-field
                        color="orange"
                        v-model="editedItem.title"
                        label="タイトル"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-textarea
                        color="orange"
                        v-model="editedItem.body"
                        label="内容"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="orange"
                  text
                  @click="close"
                >
                  キャンセル
                </v-btn>
                <v-btn
                  color="orange"
                  text
                  @click="save"
                >
                  保存する
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">このお知らせを削除します。よろしいですか？</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">キャンセル</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          リセット
        </v-btn>
      </template>
    </v-data-table>
    <v-spacer></v-spacer>
    <v-btn to="/admin" class="orange--text">管理ページへ戻る</v-btn>
  </div>
</template>

<style scoped>
.headline {
  font-size: 1em !important;
}
</style>

<script>
import axios from 'axios';
import moment from 'moment';

  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'ID', value: 'id' },
        {
          text: 'タイトル',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: '内容', sortable: false, value: 'body' },
        { text: '作成日', value: 'created_at' },
        { text: '操作', value: 'actions', sortable: false },
      ],
      info: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        body: '',
      },
      defaultItem: {
        title: '',
        body: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? '新規作成' : '更新'
      },
    },

    filters: {
        moment(date) {
            return moment(date).format('YYYY/MM/DD');
        },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        axios
            .get('http://xs199209.xsrv.jp/api/letters')
            .then(response => (this.info = response.data))
      },

      editItem (item) {
        this.editedIndex = item.id
        this.editedItem = item
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = item.id
        this.editedItem = item
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        axios.delete('http://xs199209.xsrv.jp/api/letters/'+this.editedIndex).then(() => 
            this.$router.go({path: this.$router.currentRoute.path, force: true}));
            this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          axios.put('http://xs199209.xsrv.jp/api/letters/'+this.editedIndex, {
              title: this.editedItem.title,
              body: this.editedItem.body
          }).then(() => 
            this.$router.go({path: this.$router.currentRoute.path, force: true}));
        } else {
            axios.post('http://xs199209.xsrv.jp/api/letters', this.editedItem).then(() => 
            this.$router.go({path: this.$router.currentRoute.path, force: true}));
        }
        this.close()
      },
    },
  }
</script>