<template>
    <div>
        <div>
            <h4>お知らせ追加</h4>
            <div>
                <input v-model="title" type="text" name="title" placeholder="タイトル">
                <textarea v-model="body" class="form-control" rows="4" placeholder="内容"></textarea>
                <button v-on:click="postNews">投稿</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                title:'',
                body:''
            }
        },
        methods: {
            postNews(){
                var article = {
                    'title': this.title,
                    'body': this.body
                }
                axios.post('http://xs199209.xsrv.jp/api/letters', article).then(() => this.$router.push('/admin'));
            }
        }
    }
</script>