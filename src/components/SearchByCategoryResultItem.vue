<script setup lang="ts">
defineProps<{
  title: string
  description: string
  id: number
}>()
</script>
<template>
  <div class="col-sm-6 col-md-4 mb-4 d-flex">
    <RouterLink
      :to="{ name: 'category-post', params: { postId: id } }"
      class="card mb-4"
      style="text-decoration: none"
    >
      <h5 class="card-header">{{ title }}</h5>
      <div class="card-body">
        <p v-html="description" class="card-text"></p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
</style>
