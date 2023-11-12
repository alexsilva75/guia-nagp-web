<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'

import DrawerMenu from './components/DrawerMenu.vue'

import { useAuthStore } from './stores/auth'
import { onMounted } from 'vue'

const authStore = useAuthStore()
onMounted(() => {
  authStore.tryLoadAuthData()
})
</script>

<template>
  <TheNavbar />
  <RouterView />
  <DrawerMenu />
</template>

<style scoped></style>
