<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'

import DrawerMenu from './components/DrawerMenu.vue'

import { useAuthStore } from './stores/auth'
import { useCategoryStore } from './stores/category'
import { onMounted } from 'vue'

const authStore = useAuthStore()
const categoryStore = useCategoryStore()

onMounted(() => {
  authStore.tryLoadAuthData()
  categoryStore.loadCategories()
})
</script>

<template>
  <TheNavbar />
  <RouterView />
  <DrawerMenu />
</template>

<style scoped></style>
