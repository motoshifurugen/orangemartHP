<template>
  <div class="list">
    <div>
      <v-toolbar flat color="gray">
        <v-toolbar-title>お知らせ管理</v-toolbar-title>
        <v-divider
         class="mx-3"
         inset
         vertical
        ></v-divider>

        <!-- リスト更新ボタン
        <v-icon @click="refresh()">更新</v-icon> -->

        <v-spacer></v-spacer>

        <!-- ユーザ追加ボタン フォームは下部 -->
        <v-btn fab dark small color="dark" class="mb-2"
          @click="dialog=true"
        >
          <v-icon dark>新規作成</v-icon>
        </v-btn>
      </v-toolbar>

      <!-- データテーブル部分
        rows-per-page-text="" 1ページあたり件数テキストの非表示
        :rows-per-page-items="[]" 1ページあたり件数セレクトの非表示
       -->
      <v-data-table
         :headers="headers"
         :items="letters"
         rows-per-page-text=""
         :rows-per-page-items="[]"
         class="elevation-1"
         v-show="!deleteDialog"
      >

        <!-- テーブルボディ -->
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.id }}</td>
          <td class="text-xs-center">{{ props.item.title }}</td>
          <td class="text-xs-center">{{ props.item.body }}</td>
          <td class="text-xs-center">{{ props.item.created_date }}</td>
          <td class="text-xs-center">{{ props.item.updated_date }}</td>
          <td class="justify-center layout px-0">
            <!-- 編集ボタン -->
            <v-icon class="mr-2" @click="editLetter(props.item.id)">
              edit
            </v-icon>
            <!-- 削除ボタン -->
            <v-icon @click="openDeleteDialog(props.item.id)">
              delete
            </v-icon>
          </td>
        </template>

        <!-- データなしの時の表示 -->
        <template slot="no-data">
          お知らせがありません
        </template>

        <!-- フッターの件数表示 -->
        <!-- <template slot="pageText" slot-scope="props">
          {{ props.itemsLength }} 件中 {{ props.pageStart }} 件目 〜 {{ props.pageStop }} 件目
        </template> -->
      </v-data-table>

      <!-- 入力ダイアログのレイアウト -->
      <v-layout row justify-center>
        <v-dialog v-model="dialog" lazy persistent max-width="600px">
          <v-form  v-model="valid" lazy-validation>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      v-model="selectedLetter.title"
                      label="タイトル"
                      :counter="16"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field
                      v-model="selectedLetter.body"
                      label="本文"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="save" :disabled="!valid">保存</v-btn>
              <v-btn color="blue darken-1" flat @click="close">キャンセル</v-btn>
            </v-card-actions>
          </v-card>
          </v-form>
        </v-dialog>
      </v-layout>

      <!-- 削除確認ダイアログのレイアウト -->
      <v-layout row justify-center>
        <v-dialog
          v-model="deleteDialog"
          persistent
          max-width="290px"
        >
          <v-card-text>
          削除しますか？
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="deleteLetter">削除</v-btn>
            <v-btn color="blue darken-1" flat @click="close">キャンセル</v-btn>
          </v-card-actions>
        </v-dialog>
      </v-layout>

    </div>
 </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'list',
  data () {
    return {
      // ユーザ一覧が入る配列
      letters: [],
      // テーブルヘッダ
      headers: [
         { text: 'ID', align: 'center', value: 'id' },
         { text: 'タイトル', align: 'center', value: 'title' },
         { text: '本文', align: 'center', value: 'body' },
         { text: '作成日', align: 'center', value: 'created_date' },
         { text: '更新日', align: 'center', value: 'updated_date' }
      ],
      // 選択中のレコードの値
      selectedLetter: {
        id: -1,
        title: '',
        body: '',
        created_date: '',
        updated_date: '',
      },
      // レコードの初期値
      defaultValue: {
        id: -1,
        title: '',
        body: '',
        created_date: '',
        updated_date: '',
      },
      dialog: false, // 新規＆更新入力フォーム
      deleteDialog: false, // 削除確認ダイアログ
      valid: true, // バリデーション結果
    }
  },
  methods: {
    // ユーザ一覧
    indexLetters () {
      this.letters = [];
      axios.get("https://xs199209.xsrv.jp/api/letters")
      .then( response => {
        this.letters = response.data;
        console.log("Index : record num=" + this.letters.length);
      });
    },
    // ユーザ作成
    createLetter (letterInfo) {
      axios.post("https://xs199209.xsrv.jp/letters", letterInfo)
      .then( response => {
        console.log("Created : id=" + response.data.id);
      })
      .then( () => {
        this.indexLetters();
      });
    },
    // ユーザ編集(読み出し)
    editUser (id) {
      this.selectedLetter.id = id
      axios.get("https://xs199209.xsrv.jp/api/letter/" + id)
      .then( response => {
        this.selectedLetter = response.data;
        console.log("Edit : id=" + this.selectedLetter.id);
        this.dialog = true;
      })
    },
    // ユーザ編集(書き込み)
    updateLetter (letterInfo) {
      axios.patch("https://xs199209.xsrv.jp/api/letter/" + letterInfo.id, letterInfo)
      .then( response => {
        console.log("Updated : id=" + response.data.id);
      })
      .then( () => {
        this.indexLetters();
      });
    },
    // 削除ダイアログ
    openDeleteDialog (id) {
      this.selectedLetter.id = id;
      this.deleteDialog = true;
    },
    // ユーザ削除
    deleteLetter () {
      axios.delete("https://xs199209.xsrv.jp/api/letter/" + this.selectedLetter.id)
      .then( () => {
        this.indexLetters();
        this.close();
      });
    },
    // 一覧の最新化
    // refresh (){
    //   console.log("Refresh");
    //   this.indexLetters();
    // },
    // ダイアログの保存ボタン
    save () {
      if (this.selectedLetter.id == -1) {
        // 作成
        this.createLetter(this.selectedLetter);
      } else {
        // 更新
        this.updateLetter(this.selectedLetter);
      }
      this.close()
    },
    // ダイアログのキャンセルボタン
    close () {
      this.dialog = false
      this.deleteDialog = false
      setTimeout(() => {
        this.selectedLetter = Object.assign({}, this.defaultValue)
      }, 500)
    },
  },
  computed: {
    // ダイアログのタイトルを作成と更新で使い分ける
    formTitle () {
      return this.selectedLetter.id === -1 ? '新規お知らせ作成' : 'お知らせの編集'
    }
  },
  mounted() {
    this.indexLetters();
  }
}
</script>

<style scoped>
</style>