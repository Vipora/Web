<template>
    <div id="app">
        <side-panel></side-panel>
    </div>
</template>

<script>
    import style from './assets/style.css'
    import SidePanel from './components/SidePanel'

    export default {
        name: 'app',
        components: { SidePanel },
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
