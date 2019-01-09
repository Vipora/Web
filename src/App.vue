<template>
    <div id="app">
        <div class="absolute pin-r pin-b bg-red h-64 w-64">
            asd
        </div>
    </div>
</template>

<script>
    import style from './assets/style.css'

    export default {
        name: 'app'
    }
</script>

<style>
    /* CSS reset height and width to 100% */
    html, body, #app {
        height: 100%;
        width: 100%;
    }
    /* OBS transparency */
    body {
        background-color: rgba(0, 0, 0, 0);
        margin: 0px auto;
        overflow: hidden;
    }
</style>
