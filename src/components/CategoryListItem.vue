<script setup lang="ts">
import { onMounted } from 'vue'
const props = defineProps<{ category: any }>()

onMounted(() => {
  //console.log('Category: ', props.category)
})
</script>
<template>
  <div class="col-sm-6 mb-4 d-flex">
    <div class="card col">
      <div class="card-body position-relative pb-5">
        <h5 class="card-title">{{ category?.name }}</h5>
        <p class="card-text">
          {{ category?.description }}
        </p>
        <RouterLink
          :to="{ name: 'category', params: { categoryId: category?.id } }"
          class="btn btn-primary position-absolute btn-action"
          >Acessar</RouterLink
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-action {
  bottom: 12px;
  left: 12px;
}
</style>
