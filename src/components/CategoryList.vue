<script setup lang="ts">
import CategoryListItem from './CategoryListItem.vue'
const props = defineProps<{ categories: [] }>()
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <CategoryListItem
        v-bind:key="(category as any).id"
        v-for="category in categories"
        :category="category"
      />
    </div>
  </div>
</template>
<style scoped>
.container-fluid {
  padding: 0 64px;
}
</style>
