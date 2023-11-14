<script setup lang="ts">
import { onMounted } from 'vue'
const props = defineProps<{ category: any }>()

onMounted(() => {
  console.log('Category: ', props.category)
})
</script>
<template>
  <div class="col-sm-6 mb-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ category?.name }}</h5>
        <!-- <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p> -->
        <a href="#" class="btn btn-primary">Acessar</a>
      </div>
    </div>
  </div>
</template>
