<template>
    <div
        class="loading-spinner"
        :class="['border-' + border, 'border-' + color, 'h-' + scale, 'w-' + scale]"
    ></div>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                default: 'white'
            },
            scale: {
                type: Number,
                default: 12
            },
            border: {
                type: Number,
                default: 2
            }
        }
    }
</script>
