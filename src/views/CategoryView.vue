<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useSearchStore } from '@/stores/search'
import { useCategoryStore } from '@/stores/category'
import SearchByCategoryResultItem from '@/components/SearchByCategoryResultItem.vue'

const props = defineProps<{ categoryId: string }>()

const searchStore = useSearchStore()
const categoryStore = useCategoryStore()

const title = ref()
onMounted(async () => {
  await searchStore.fetchByCategory(+props.categoryId)
  const category = categoryStore.categories.find(
    (item) => (item as any).id === +props.categoryId
  ) as any

  title.value = category.name
  console.log('Selected Category: ', props.categoryId)
})
</script>

<template>
  <main>
    <div class="container-fluid">
      <h2 class="mt-4">{{ title }}</h2>
      <SearchByCategoryResultItem
        :id="(result as any).id"
        :title="(result as any).title.rendered"
        :description="(result as any).excerpt.rendered"
        v-bind:key="(result as any).id"
        v-for="result in searchStore.resultsByCategory"
      />
    </div>
  </main>
</template>
