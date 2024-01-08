<script setup>
import { ref } from "vue";
import { getImg } from "@/utils/assets";
const pageIndex = ref(1);
</script>

<template>
  <div
    class="w-full h-full bg-[url('@/assets/img/1.webp')] cus-bg relative pointer-events-auto"
  >
    <div
      class="w-[64px] h-[64px] bg-[url('@/assets/img/exit.webp')] cus-bg absolute top-[54px] right-[78px] cursor-pointer"
      @click="ue.interface.exit()"
    ></div>
    <div
      class="w-[1537px] h-[1749px] cus-bg absolute top-[221px] right-[72px]"
      :style="{
        backgroundImage: `url(${getImg('pageView-' + pageIndex + '.webp')})`,
      }"
    ></div>
    <div
      class="w-[63px] h-[89px] bg-[url('@/assets/img/2.webp')] cus-bg absolute bottom-[85px] right-[947px] cursor-pointer"
      @click="pageIndex = pageIndex === 1 ? 2 : --pageIndex"
    ></div>
    <div
      class="absolute bottom-[96px] right-[793px] text-[#68a4e6] text-[50px] font-black"
    >
      {{ pageIndex }}
    </div>
    <div
      class="w-[63px] h-[89px] bg-[url('@/assets/img/3.webp')] cus-bg absolute bottom-[85px] right-[599px] cursor-pointer"
      @click="pageIndex = pageIndex === 2 ? 1 : ++pageIndex"
    ></div>
  </div>
</template>

<style scoped></style>
