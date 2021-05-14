<template>
    <div class="content">
        <h1>チラシ登録</h1>
        <v-file-input accept="image/*" label="File input" type="file" @change="fileSelected"></v-file-input>
        <v-btn color="orange" @click="upload();">
            アップロード
        </v-btn>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                fileinfo: ''
            };
      },
      methods: {
          fileSelected(file) {
            console.log(file);
            this.fileInfo = file;
          },
          upload: function() {
            const formData = new FormData()
            formData.append('file',this.fileInfo)
            axios.post('http://cocoahearts.xsrv.jp/api/upload', formData).then(response =>{
                console.log(response)
            });
        },
      },
    }
</script>

<style>
.content{
    margin:5em;
}
</style>