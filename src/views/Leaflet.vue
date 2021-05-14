<template>
    <div class="leaflet">
        <div class="middle">
            <h1>今週のチラシ</h1>
            <img v-bind:src="leaflet.file_path" alr="チラシ">
        </div>
    </div>
</template>

<style scoped>
.leaflet {
    text-align: center;
    background-color:orange;
    border-radius: 0.5rem;
}
.leaflet h1{
    font-size: 1.5em;
    padding-top: 0.25em;
    color:white;
}
.leaflet img {
    width: 80%;
    height: auto;
}
</style>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                leaflet: '',
            };
      },
      mounted () {
        axios
            .get('http://cocoahearts.xsrv.jp/api/upload')
            .then(response => (this.leaflet = response.data))
      },
    }
</script>
