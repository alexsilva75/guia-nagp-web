<script setup lang="ts">
import { onMounted } from 'vue'
const props = defineProps<{ category: any }>()

onMounted(() => {
  //console.log('Category: ', props.category)
})
</script>
<template>
  <div class="col-sm-6 col-md-4 mb-4 d-flex">
    <div class="card col ratio ratio-16x9">
      <RouterLink
        :to="{ name: 'category', params: { categoryId: category?.id } }"
        :title="category?.description"
        class="card-body flex flex-column align-content-center"
        style="text-decoration: none"
        :style="!!category?.acf?.thumbnail_url && {
          backgroundImage: `url(${category?.acf?.thumbnail_url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }"
      >
        <h5 v-if="!category?.acf?.thumbnail_url" class="card-title text-center">
          {{ category?.name }}
        </h5>
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.btn-action {
  bottom: 12px;
  left: 12px;
}
</style>
