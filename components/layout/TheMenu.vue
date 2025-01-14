<script setup lang="ts">
import {MENU_DATA} from "~/components/layout/menu.data";
</script>

<template>
  <div>
    <nuxt-link v-for="item in MENU_DATA" :key="item.url" :to="item.url" class="flex items-center text-white py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2.5">
        <Icon :name="item.icon" class="mr-3"/>
        <span>{{ item.name }}</span>
    </nuxt-link>
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>