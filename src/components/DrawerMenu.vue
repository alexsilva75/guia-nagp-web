<template>
  <div
    class="offcanvas offcanvas-start text-light"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Guia NAGP</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-light">An item</li>
        <li class="list-group-item text-light">A second item</li>
        <li class="list-group-item text-light">A third item</li>
        <li class="list-group-item text-light">A fourth item</li>
        <li class="list-group-item text-light">And a fifth one</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.offcanvas.showing,
.offcanvas.show:not(.hiding) {
  transform: none;
  background-color: #3e9a2d;
}

.list-group {
  --bs-list-group-bg: none;
}
</style>
