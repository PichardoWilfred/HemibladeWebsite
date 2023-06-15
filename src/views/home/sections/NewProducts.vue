<template>
    <section class="font-consolas pt-8 px-4 lg:px-12 lg:pt-24 pb-12 bg-gray-1 border-y border-y-gray-3">
        <h3 class="max-lg:mb-4 text-2xl font-bold">NEW SUPPORTED PRODUCTS</h3>
        <p class="text-lg">
            On May 2023 the HEMIBLADE Integration Platform (HIP) added support for Dahua & Hikvision NVRs.<br /> 
            For details about the integration extent please read the <a href="#" class="underline">release notes</a>.
        </p>
        <div class="flex flex-wrap justify-around mt-16">
            <img :src="Dahua" class="w-[200px]" alt="">
            <img :src="Hikvision" class="w-[270px]" alt="">
        </div>
    </section>
</template>
<style scoped>
img {
    @apply filter grayscale object-contain mb-12;
}
</style>
<script setup>
import Dahua from "../../../../public/img/new_products/Dahua.png";
import Hikvision from "../../../../public/img/new_products/Hikvision.png";
</script>