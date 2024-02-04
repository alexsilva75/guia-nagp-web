<script setup lang="ts">
defineProps<{ term: any }>()
</script>
<template>
  <div class="card w-100 mb-2">
    <div class="card-body">
      <h5 class="card-title">Termo pesquisado: {{ term.search_term }}</h5>
      <p class="card-text">Palara-chave associada: {{ term.key_word }}</p>
      <button
        type="button"
        href="#"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#searchTermModal"
        @click="$emit('editTerm', term)"
      >
        Editar
      </button>
    </div>
  </div>
</template>
