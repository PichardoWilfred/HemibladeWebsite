<script setup>
  import Agents from "./sections/Agents.vue";
  import Portrait from "./sections/Portrait.vue";
  import HIP from "./sections/HIP.vue";
  import NewProducts from "./sections/NewProducts.vue";
  import SupportedManufactures from './sections/SupportedManufactures.vue';
  import Clients from "./sections/Clients.vue";
  import About from "./sections/About.vue";
</script>

<template>
  <main>
    <Portrait />
    <Agents />
    <HIP />
    <NewProducts />
    <SupportedManufactures />
    <Clients />
    <About />
  </main>
</template>
