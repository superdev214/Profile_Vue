<script>
export default {};
</script>
<script setup>
import NavVue from "./Nav.vue";
</script>

<template>
  <div class="bg-black">
    <div class="container flex items-center mx-auto mt-auto 2xl:w-[1140px]">
      <h1
        class="text-[36px] font-bold font-[Poppins,sans-serif] mr-auto p-[8px]"
      >
        <a href="/" class="text-white"> SongJuanJuan </a>
      </h1>
      <NavVue />
    </div>
  </div>
</template>
