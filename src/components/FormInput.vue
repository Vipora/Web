<template>
    <div>
        <input
            type="text"
            value=""
            :placeholder="placeholder"
            class="bg-darker px-4 py-4 no-outline border-l-4 border-primary text-white w-full outline-none"
        >
    </div>
</template>

<script>
    export default {
        props: ['placeholder']
    }
</script>
