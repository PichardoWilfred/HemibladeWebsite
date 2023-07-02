<script setup>
import { ref } from "vue"
import { RouterView, useRoute } from 'vue-router';
import Navbar from "./components/Navbar.vue";
import Footer_ from "./views/home/sections/footer/Footer_.vue";
let marginTop = ref('');
let route = useRoute();
</script>

<template>
  <Navbar @set-height="(payload) => { marginTop = route.path === '/ifa' || route.path === '/ifa/highlights' ? (payload+24):payload }" />
  <RouterView :style="{ marginTop }"/>
  <Footer_ id="contact"/>
</template>

<style scoped>
</style>
