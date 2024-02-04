<template>
  <div class="pt-4">
    <nav aria-label="Page navigation example ">
      <ul class="pagination pagination-sm">
        <!-- <li class="page-item"><a class="page-link" href="#">Anterior</a></li> -->
        <li class="page-item" v-bind:key="letter" v-for="letter in letters">
          <a class="page-link" href="#" @click="setSelectedLetter($event, letter)">{{ letter }}</a>
        </li>

        <!-- <li class="page-item"><a class="page-link" href="#">Próximo</a></li> -->
      </ul>
    </nav>

    <SearchTermItem
      v-bind:key="(term as any).id"
      :term="term"
      v-for="term in searchStore.termResults"
      @editTerm="selectTerm"
    />
  </div>

  <!-- Button trigger modal -->
  <!-- <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#searchTermModal"
  >
    Launch demo modal
  </button> -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="searchTermModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Editar Palavra-chave</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form class="row g-3">
            <div class="col-auto">
              <label for="staticEmail2">Termo pesquisado</label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail2"
                :value="selectedTerm?.search_term"
              />
            </div>
            <div class="col-auto">
              <label for="inputPassword2">Palavra-chave</label>
              <input
                type="text"
                class="form-control"
                id="keyWord"
                v-model="selectedTerm.key_word"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button id="close-button" type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Cancelar
          </button>
          <button @click="updateTermKeyWord" type="button" class="btn btn-primary">Alterar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSearchStore } from '@/stores/search'
import SearchTermItem from '@/components/SearchTermItem.vue'

const searchStore = useSearchStore()
const selectedLetter = ref('')
const selectedTerm = ref({ id: 0, search_term: '', key_word: '' })
const setSelectedLetter = (event: Event, letter: string) => {
  console.log('Event: ', event)
  selectedLetter.value = letter
}

const selectTerm = (term: any) => {
  console.log('Selected Term: ', term)
  selectedTerm.value = term
}

const updateTermKeyWord = () => {
  searchStore.updateTermKeyWord(selectedTerm.value.id, selectedTerm.value.key_word)

  const button = document.getElementById('close-button') as HTMLButtonElement

  button.click()
}

watch(selectedLetter, async (newValue, _) => {
  searchStore.fetchTermByFirstLetter(newValue)
})
const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
</script>
