<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useSearchStore } from '@/stores/search'

const props = defineProps<{ postId: string }>()

const searchStore = useSearchStore()
const post = ref(null)
console.log('Post ID: ', props.postId)

onMounted(() => {
  post.value = searchStore.resultsByCategory.find(
    (item) => (item as any).id === +props.postId
  ) as any
  console.log('Post: ', post.value)
})
</script>
<template>
  <div class="mt-4 px-4">
    <h2>{{ post ? (post as any).title.rendered : '' }}</h2>
    <p class="py-2" v-html="post ? (post as any).content.rendered : ''"></p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
