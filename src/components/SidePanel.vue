<template>
    <div>
        <div class="side-panel" ref="side_panel"></div>
        <div class="small-side-panel bg-indigo-darkest" ref="small_side_panel"></div>
    </div>
</template>

<script>
    import anime from 'animejs/lib/anime.js';

    export default {
        data: () => ({
            is_open: false
        }),
        methods: {
            open() {
                console.log(this.$refs.side_panel)
                anime({
                    targets: this.$refs.side_panel,
                    right: '150px',
                    scale: 2,
                    rotate: -20,
                    duration: 1500
                })
                anime({
                    targets: this.$refs.small_side_panel,
                    right: '100px',
                    scale: 2,
                    rotate: 20,
                    duration: 1500
                })
                this.is_open = true;
            },
            close() {
                anime({
                    targets: this.$refs.side_panel,
                    right: '-150px',
                    scale: 0,
                    rotate: 0,
                    duration: 1500
                })
                anime({
                    targets: this.$refs.small_side_panel,
                    right: '-100px',
                    scale: 0,
                    rotate: 0,
                    duration: 1500
                })
                this.is_open = false
            }
        },
        mounted() {
            setInterval(() => {
                console.log('Now')
                this.is_open ? this.close() : this.open()
            }, 3000);
        }
    }
</script>

<style scoped>
    .side-panel {
        position: absolute;
        right: -150px;
        top: calc(50% - 50px);
        height: 100px;
        width: 100px;
        background-image: url('http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Khazix_3.jpg');
        background-size: 100% 100%;
        border-radius: 10px;
    }
    .small-side-panel {
        position: absolute;
        right: -150px;
        top: calc(50% - 50px + 150px);
        height: 50px;
        width: 50px;
        background-image: url('/positions/position-jungle.svg');
        background-size: 100% 100%;
        border-radius: 10px;
    }
</style>
