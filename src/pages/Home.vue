<script>
export default {};
import { ref } from "vue";
import NavVue from "../component/Nav.vue";
</script>
<script setup>
import "../CSS/icofont.min.css";
const foot_a = ref(
  "bg-white/[.1] rounded-full w-[40px] h-[40px] mr-[8px] text-[16px] flex justify-center items-center text-white hover:bg-[#18d26e] hover:transition hover:ease-in-out hover:delay-100"
);
</script>
<template>
  <div class="flex items-center h-screen">
    <div
      class="container 2xl:w-[1140px] content-center ml-auto mr-auto items-center"
    >
      <h1 class="font-[Poppins,sans-serif] text-5xl font-bold text-white">
        Song JuanJuan
      </h1>
      <h2
        class="text-white/[.8] text-[24px] mt-[20px] font-[Raleway,sans-serif] mb-[35px]"
      >
        I'm a senior{{ "    " }}
        <span class="text-white pb-[6px] border-b-[2px] border-[#18d26e]">
          Full stack engineer
        </span>
      </h2>
      <!-- Navbar Place -->
      <NavVue />
      <!-- Navbar End Place  -->
      <div class="mt-[40px] flex">
        <a href="/" :class="foot_a">
          <i class="icofont-linkedin"></i>
        </a>
        <a href="/" :class="foot_a">
          <i class="icofont-twitter"></i>
        </a>
        <a href="/" :class="foot_a">
          <i class="icofont-facebook"></i>
        </a>
        <a href="/" :class="foot_a">
          <i class="icofont-github"></i>
        </a>
      </div>
    </div>
  </div>
</template>
