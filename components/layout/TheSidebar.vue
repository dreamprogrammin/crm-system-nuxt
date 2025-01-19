<script setup lang="ts">
</script>

<template>
  <aside class="px-5 py-8 h-full relative w-full h-full bg-sidebar">
    <nuxt-link to="/" class="mb-10 block">
        <NuxtPicture src="logo.svg" width="120px" class="mx-auto"/>
    </nuxt-link> 
    <button class="absolute top-2 right-3 text-white transition-colors hover:text-primary">
      <Icon name="line-md:logout" size="20"/>
    </button>
    <LayoutTheMenu />
  </aside>
</template>

<style scoped>
/* Ваши стили */
</style>