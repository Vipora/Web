<template>
    <div class="bg-darker h-full">
        <div class="absolute pin-y pin-x flex items-center justify-center">
            <card class="w-full md:w-1/2 xl:w-1/3 xxl:w-1/4">
                <div class="font-boldd text-xl mb-4">Login</div>
                <div class="text-basic mb-6">Please enter your credentials to log in.</div>
                <form-input
                    v-model="credentials.email"
                    type="email"
                    placeholder="Email address"
                />
                <form-input
                    v-model="credentials.password"
                    type="password"
                    class="mt-4"
                    placeholder="Password"
                />
                <form-button @click.native="login" class="mt-4">Login</form-button>
            </card>
        </div>
    </div>
</template>

<script>
    import Card from '@/components/Card'
    import FormInput from '@/components/FormInput'
    import FormButton from '@/components/FormButton'
    import axios from 'axios'

    export default {
        name: 'login',
        components: { Card, FormInput, FormButton },
        data: () => ({
            'credentials': {
                'email': '',
                'password': ''
            }
        }),
        methods: {
            login() {
                axios.post('/auth/login', this.credentials)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.warn(err)
                    })
            }
        }
    }
</script>

<style>

</style>
