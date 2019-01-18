<template>
    <div class="bg-darker h-full">
        <div class="absolute pin-y pin-x flex items-center justify-center">
            <card class="w-full md:w-1/2 xl:w-1/3 xxl:w-1/4">
                <div class="font-boldd text-xl mb-4">Sign up</div>
                <div class="text-basic mb-6">Please enter your desired credentials to sign up.</div>
                <form-input
                    placeholder="Email address"
                />
                <form-input
                    class="mt-4"
                    placeholder="Full name"
                />
                <form-input
                    class="mt-4"
                    placeholder="Password"
                />
                <form-input
                    class="mt-4"
                    placeholder="Confirm Password"
                />
                <form-button class="mt-4">Sign up</form-button>
            </card>
        </div>
    </div>
</template>

<script>
    import Card from '@/components/Card'
    import FormInput from '@/components/FormInput'
    import FormButton from '@/components/FormButton'

    export default {
        name: 'register',
        components: { Card, FormInput, FormButton }
    }
</script>

<style>

</style>
