<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'

import DrawerMenu from './components/DrawerMenu.vue'
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<template>
  <TheNavbar />
  <RouterView />
  <DrawerMenu />
</template>

<style scoped></style>
