import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import options from '@/options'
export const useCategoryStore = defineStore('category', () => {
  const categories = ref([])
  //const doubleCount = computed(() => count.value * 2)

  async function loadCategories() {
    const response = await axios.get(options.baseURL + 'api/v1/categories')
    categories.value = response.data
  }

  return { categories, loadCategories }
})
