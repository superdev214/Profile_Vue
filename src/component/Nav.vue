<script>
export default {};

import { ref } from "vue";
</script>
<script setup>
const nav_item = ref(
  "before:content-[''] before:bg-green-500 before:absolute before:bottom-[-2px] left-[0px] before:w-0 before:invisible before:transition-all before:delay-150 before:ease-in-out before:delay-0 before:h-[2px] text-white/[.8] font-[Poppins,sans-serif] text-[16px]  hover:text-white hover:before:visible hover:before:w-[30px]"
);
</script>

<template>
  <nav class="relative">
    <router-link
      to="/"
      :class="nav_item"
      class="cursor-pointer"
    >
      Home
    </router-link>
    <router-link to="/About" class="ml-[30px] cursor-pointer" :class="nav_item"> About </router-link>
    <router-link to="/Resume" class="ml-[30px] cursor-pointer" :class="nav_item"> Resume </router-link>
    <router-link to="/Services" class="ml-[30px] cursor-pointer" :class="nav_item"> Services </router-link>
    <router-link to="/Portfolio" class="ml-[30px] cursor-pointer" :class="nav_item"> Portfolio </router-link>
    <router-link to="/Contact" class="ml-[30px] cursor-pointer" :class="nav_item"> Contact </router-link>
  </nav>
</template>
