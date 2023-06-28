<template>
    <main class="pt-20">
        <Portrait id="home" />
        <Gallery  id="gallery" />
        <Highlights id="highlight" />
        <Perks />
        <Compatibility />
    </main>
</template>
<script setup>
import Portrait from "./sections/Portrait.vue";
import Gallery from "./sections/Gallery.vue";
import Highlights from "./sections/Highlights.vue";
import Compatibility from "./sections/Compatibility.vue";
import Perks from "./sections/Perks.vue";
</script>