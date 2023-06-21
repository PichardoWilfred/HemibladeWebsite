<script setup>
  import Agents from "./sections/Agents.vue";
  import Portrait from "./sections/Portrait.vue";
  import HIP from "./sections/HIP.vue";
  import NewProducts from "./sections/NewProducts.vue";
  import SupportedManufactures from './sections/SupportedManufactures.vue';
  import Clients from "./sections/Clients.vue";
  import About from "./sections/About.vue";
  import Remarks from "./sections/Remarks.vue";
  import Footer_ from "./sections/footer/Footer_.vue";
</script>

<template>
  <main>
    <Portrait id="home"/>
    <Agents />
    <HIP id="media"/>
    <!-- <NewProducts /> -->
    <SupportedManufactures />
    <Clients />
    <!-- <Remarks /> -->
    <About id="about"/>
    <Footer_ id="contact"/>
  </main>
</template>
