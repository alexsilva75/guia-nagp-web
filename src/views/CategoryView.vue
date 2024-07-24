<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useSearchStore } from '@/stores/search'
import { useCategoryStore } from '@/stores/category'
import SearchByCategoryResultItem from '@/components/SearchByCategoryResultItem.vue'

const props = defineProps<{ categoryId: string }>()
const subCategories = ref([])

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
  subCategories.value = searchStore.resultsByCategory.sort((item1, item2) => {
    if ((item1 as any).title.rendered < (item2 as any).title.rendered) {
      return -1
    } else if ((item1 as any).title.rendered > (item2 as any).title.rendered) {
      return 1
    }
    return 0
  })

  console.log('Sub-categories: ', subCategories.value)
})
</script>

<template>
  <main>
    <div class="container-fluid">
      <h3 class="my-4">{{ title }}</h3>

      <div class="row">
        <SearchByCategoryResultItem
          :id="(result as any).id"
          :title="(result as any).title.rendered"
          :description="(result as any).excerpt.rendered"
          v-bind:key="(result as any).id"
          v-for="result in subCategories"
        />
      </div>
    </div>
  </main>
</template>
