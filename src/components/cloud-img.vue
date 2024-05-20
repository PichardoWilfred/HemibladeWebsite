<template>
    <AdvancedImage class="bg-section object-cover h-full" :cldImg="img_" />
</template>
<script setup>
    import { AdvancedImage } from '@cloudinary/vue';
    import { Cloudinary } from '@cloudinary/url-gen';

    const { img } = defineProps(['img']);
    const cld = new Cloudinary({
        cloud: {
            cloudName: "drmvnxe4l"
        }
    });

    const img_ = cld.image(img);
    img_.format("webp");
</script>