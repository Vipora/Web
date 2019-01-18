<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import style from './assets/style.css'
    export default {
        name: 'app'
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700');

    /* CSS reset height and width to 100% */
    html, body, #app {
        height: 100%;
        width: 100%;
        font-family: 'Montserrat', sans-serif;
        font-weight: medium;
    }
    /* OBS transparency */
    body {
        background-color: rgba(0, 0, 0, 0);
        margin: 0px auto;
        overflow: hidden;
    }
</style>
