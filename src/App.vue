<script setup lang="ts">
import Scene from "@/views/Scene.vue";
import { onMounted } from "vue";

import autofit from "autofit.js";
onMounted(() => {
  autofit.init({
    dh: 4573,
    dw: 2179,
     el: "#app-main",
     resize:true
  })
}),
</script>

<template>
  <!--  <Scene/>-->
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
  background-color: #999;
  pointer-events: none;
}
</style>
