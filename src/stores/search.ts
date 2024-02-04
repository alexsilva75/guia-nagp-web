import { useAuthStore } from './auth'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import options from '@/options'
import axios from 'axios'

export const useSearchStore = defineStore('search', () => {
  const results = ref([])
  const resultsByCategory = ref([])
  const isLoadingSearch = ref(false)
  const termResults = ref([])
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

  async function fetchByCategory(id: number) {
    isLoadingSearch.value = true
    const response = await fetch(options.baseURL + 'api/v1/by-category/' + id)

    const responseData = await response.json()

    if (Array.isArray(responseData)) {
      resultsByCategory.value = responseData as any
    } else {
      resultsByCategory.value = []
    }

    console.log('Results: ', resultsByCategory.value)
    isLoadingSearch.value = false
  }

  async function fetchTermByFirstLetter(letter: string) {
    isLoadingSearch.value = true
    const response = await fetch(options.baseURL + 'api/v1/term?letter=' + letter)

    const responseData = await response.json()

    if (Array.isArray(responseData)) {
      termResults.value = responseData as any
    } else {
      termResults.value = []
    }

    console.log('Results: ', termResults.value)
    isLoadingSearch.value = false
  }

  async function updateTermKeyWord(id: number, keyWord: string) {
    const authStore = useAuthStore()
    const response = await axios.put(
      options.baseURL + 'api/v1/term/' + id,
      { key_word: keyWord },
      {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      }
    )

    console.log('Update Term Response: ', response)
  }
  return {
    results,
    resultsByCategory,
    fetchByCategory,
    performSearch,
    isLoadingSearch,
    termResults,
    fetchTermByFirstLetter,
    updateTermKeyWord
  }
})
