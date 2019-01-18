<template>
    <div>
        <input
            :disabled="false"
            :value="value"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
            :type="type"
            class="bg-darker px-4 py-4 no-outline border-l-4 border-primary text-white w-full outline-none"
        >
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: ''
            }
        }
    }
</script>
