<script>
export default {};

</script>
<script setup>
import HeadBarVue from "../component/HeadBar.vue";
</script>
<template>
  <div
    class="w-full bg-fixed"
    :style="{
      'background-image': 'url(background.jpg)',
    }"
  >
    <header>
      <HeadBarVue />
    </header>
    <main>
      <div
        class="container mx-auto bg-black 2xl:w-[1140px] mt-[30px] p-[30px] pb-[30px]"
      >
        <!-- Here every page content -->
        <slot />
      </div>
    </main>
    <footer>
      <div class="pb-[40px]"></div>
    </footer>
  </div>
</template>
