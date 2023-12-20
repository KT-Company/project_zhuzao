<script setup>
import { onMounted } from "vue";
import autofit from "autofit.js";
onMounted(() => {
  autofit.init(
    {
      dw: 4573,
      dh: 2179,
      el: "#app-main",
      resize: true,
    },
    false
  );
});
</script>

<template>
  <div id="app-main">
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app-main {
  height: 100%;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
}
:global(#app) {
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}
</style>
