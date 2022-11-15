<script>
export default {};
</script>
<script setup>
import HomeVue from "../pages/Home.vue";
</script>
<template>
  <div
    class="w-full bg-fixed"
    :style="{
      'background-image': 'url(background.jpg)',
    }">

    <slot />
  </div>
</template>
