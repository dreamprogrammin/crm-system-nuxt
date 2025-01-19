<script setup lang="ts">
import { ID } from 'appwrite'
import { account } from '~/lib/appwrite'

useSeoMeta({
    title : 'Login | CRM system'
})

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

const router = useRouter()
const authStore = useAuthStore()
const loaderStore = useLoaderStore()

const handleLogin = async () => {
    try {
        loaderStore.setLoading(true)
        await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
        const response = await account.get()
        console.log(response)
        if (response) {
            authStore.set({
                email: response.email,
                name: response.name,
                isAuthenticated: response.status
            })
        }
        emailRef.value = ''
        passwordRef.value = ''
        nameRef.value = ''

        await router.push('/')
        loaderStore.setLoading(false)
    } catch(error) {
        loaderStore.setLoading(false)
        console.error('Failed to login')
    } finally {
        loaderStore.setLoading(false)
        console.log('Финиш')
    }
}

const register = async () => {
    console.log('click')
    try {
        await account.create(ID.unique(), emailRef.value, passwordRef.value, nameRef.value)
        await handleLogin()
    } catch(error) {
        console.error('Failed to register')
    } finally {
       console.log('данные успешно отправлены')
    }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen w-full">
    <div class="rounded bg- w-1/4 p-5 bg-sidebar">
        <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

        <form>
            <UiInput placeholder="Email" type="email" class="mb-3" v-model="emailRef"/>
            <UiInput placeholder="Password" type="password" class="mb-3" v-model="passwordRef"/>
            <UiInput placeholder="Name" type="name" class="mb-3" v-model="nameRef"/>

            <div class="flex justify-between items-center">
                <UiButton type="button" @click="handleLogin">Login</UiButton>
                <UiButton type="button" class="hover:bg-red-500" @click="register">Register</UiButton>
            </div>
        </form>
    </div>
  </div>
</template>