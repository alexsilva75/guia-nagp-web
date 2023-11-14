import { ref } from 'vue'
import { defineStore } from 'pinia'
import options from '@/options'

export const useSearchStore = defineStore('search', () => {
  const results = ref([])
  const isLoadingSearch = ref(false)
  //const doubleCount = computed(() => count.value * 2)
  async function performSearch(term: string) {
    isLoadingSearch.value = true
    const response = await fetch(options.baseURL + 'api/v1/search?search=' + term)

    const responseData = await response.json()

    if (Array.isArray(responseData)) {
      results.value = responseData as any
    } else {
      results.value = []
    }

    console.log('Results: ', results.value)
    isLoadingSearch.value = false
  }

  return { results, performSearch, isLoadingSearch }
})
