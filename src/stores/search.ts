import { ref } from 'vue'
import { defineStore } from 'pinia'
import options from '@/options'

export const useSearchStore = defineStore('search', () => {
  const results = ref([])
  //const doubleCount = computed(() => count.value * 2)
  async function performSearch(term: string) {
    const response = await fetch(options.baseURL + 'api/v1/search?search=' + term)

    const responseData = await response.json()

    if (Array.isArray(responseData)) {
      results.value = responseData as any
    } else {
      results.value = []
    }
  }

  return { results, performSearch }
})
