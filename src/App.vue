<script setup>
import { ref } from "vue"
import { RouterView } from 'vue-router';
import Navbar from "./components/Navbar.vue";
let marginTop = ref('');
</script>

<template>
  <Navbar @set-height="(payload) => { marginTop = payload }" />
  <RouterView :style="{ marginTop }"/>
  <Footer_ id="contact"/>
</template>

<style scoped>
</style>
