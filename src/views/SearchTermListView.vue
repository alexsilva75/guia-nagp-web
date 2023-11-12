<template>
  <div class="pt-4">
    <nav aria-label="Page navigation example ">
      <ul class="pagination pagination-sm">
        <!-- <li class="page-item"><a class="page-link" href="#">Anterior</a></li> -->
        <li class="page-item" v-bind:key="letter" v-for="letter in letters">
          <a class="page-link" href="#">{{ letter }}</a>
        </li>

        <!-- <li class="page-item"><a class="page-link" href="#">Próximo</a></li> -->
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
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
