<script setup lang="ts">
defineProps<{
  title: string
  id: number
}>()
</script>
<template>
  <div class="card mb-4">
    <h5 class="card-header">{{ title }}</h5>
    <div class="card-body">
      <!-- <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
      <RouterLink :to="{ name: 'post', params: { postId: id } }" class="btn btn-primary"
        >Acessar</RouterLink
      >
    </div>
  </div>
</template>

<style scoped></style>
