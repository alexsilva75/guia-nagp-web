<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="card">
    <h5 class="card-header">{{ title }}</h5>
    <div class="card-body">
      <!-- <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
      <RouterLink to="/post" class="btn btn-primary">Acessar</RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
