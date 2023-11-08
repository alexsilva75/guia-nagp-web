<template>
  <div class="overlay d-flex justify-content-center align-items-center">
    <div class="card">
      <div class="card-body">
        <TheSpinner />
      </div>
    </div>
  </div>
</template>
<style scoped>
.overlay {
  background-color: #29313277;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  /* pointer-events: none; */

  position: absolute;
  top: 0;
  right: 0;
}
</style>

<script lang="ts" setup>
import TheSpinner from "./TheSpinner.vue";
</script>
