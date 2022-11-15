<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const defaultLayout = "profile";

const { currentRoute } = useRouter();

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout` /// A || B => If A can be converted to true , returns A
                                                                      //            else return B
);
</script>

<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>
