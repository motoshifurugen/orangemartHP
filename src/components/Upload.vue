<template>
    <div class="upload">
        <h2>チラシ登録</h2>
        <v-file-input accept="image/*" label="File input" type="file" @change="fileSelected"></v-file-input>
        <v-btn color="orange white--text" @click="upload();" v-show="showUploadButton">
            <b>アップロード</b>
        </v-btn>
    </div>
</template>

<style scoped>
.upload {
    margin-top: 4em;
}
</style>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                fileinfo: '',
                showUploadButton: false
            };
      },
      methods: {
          fileSelected(file) {
            this.fileInfo = file;
            if (file) this.showUploadButton = true;
          },
          upload: function() {
            const formData = new FormData()
            formData.append('file',this.fileInfo)
            axios.post('https://xs199209.xsrv.jp/api/upload', formData).then(response =>{
                if(response.data.file_path) this.$router.go({path: this.$router.currentRoute.path, force: true});
            });
        },
      },
    }
</script>