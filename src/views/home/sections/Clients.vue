<template>
    <section class="px-6 lg:px-12 pt-12">
        <div class="flex flex-wrap justify-around">
            <img v-for="{src, class_, alt} in images" :src="src" :class="class_" :alt="alt" class="mb-12 flex-shrink-0 object-contain">
        </div>

    </section>
</template>
<script setup>
    import require from '@/libs/require.js';
    import { reactive } from 'vue';
    const images = reactive([
        {
            src: require('../assets/clients/Coopbueno.png'),
            class_: 'w-[360px]',
            alt: 'Coopbueno'
        },
        {
            src: require('../assets/clients/Cooperativa San José.png'),
            class_: 'w-[200px]',
            alt: 'Cooperativa San José'
        },
        {
            src: require('../assets/clients/CZFS.png'),
            class_: 'w-[310px]',
            alt: 'CZFS'
        }
    ])
</script>
<style scoped>
</style>