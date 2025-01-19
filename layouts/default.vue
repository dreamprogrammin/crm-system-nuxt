<script setup lang="ts">
import { account } from '~/lib/appwrite';

const router = useRouter()
const loaderStore = useLoaderStore()
const auth = useAuthStore()

onMounted(async () => {
  try {
    const user = await account.get()
    if (user) auth.set(user)
  } catch {
    router.push('/login')
  } finally {
    loaderStore.setLoading(false)
  }
})
</script>

<template>
  <LayoutTheLoader v-if="loaderStore.setLoading"/>
  <section v-else :class="{grid : auth.isAuth}" style="min-height: 100vh;">
    <LayoutTheSidebar /> 
    <div>
        <slot />
    </div>
  </section>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 6fr;
}
</style>