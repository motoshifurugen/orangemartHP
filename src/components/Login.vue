<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text color="white" dark v-bind="attrs" v-on="on">
          <b>管理者ログイン</b>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline orange white--text"><b>管理者ログイン</b></v-card-title>
        <v-card-text>
          <v-form>
            <b v-if="error != ''">{{ error }}</b>
            <v-text-field
              color="orange"
              prepend-icon="mdi-account-circle"
              v-model="name"
              label="名前"
            />
            <v-text-field
              color="orange"
              prepend-icon="mdi-account-circle"
              v-model="email"
              label="メールアドレス"
            />
            <v-text-field
              color="orange"
              prepend-icon="mdi-account-circle"
              v-model="password"
              label="パスワード"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions position:relative>
          <v-spacer></v-spacer>
          <v-btn
            color="orange"
            text
            @click="
              logIn();
            "
          >
            ログイン
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      dialog: false,
      show: true,
      error: "",
    };
  },
  methods: {
    logIn: function() {
      var user = {
          'name': this.name,
          'email': this.email,
          'password': this.password
      }
      axios
        .post(
          'http://cocoahearts.xsrv.jp/api/login', user)
        .then(response => {
          console.log(response);
          if (response["data"] == 'login!') {
              this.dialog = false;
              this.$router.push('/admin');
          }
        })
        .catch(error => {
          this.error = error;
        });
    },
    handleResize: function() {
        if (window.innerWidth >= 1000) {
            this.show = true
        } else {
            this.show = false
        }
    },
  },
};
</script>
