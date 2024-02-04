<script setup lang="ts">
defineProps<{
  title: string
  description: string
  id: number
}>()
</script>
<template>
  <div class="col-12">
    <div class="card mb-4">
      <h5 class="card-header">{{ title }}</h5>
      <div class="card-body">
        <p v-html="description" class="card-text"></p>
        <RouterLink :to="{ name: 'category-post', params: { postId: id } }" class="btn btn-primary"
          >Acessar</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
