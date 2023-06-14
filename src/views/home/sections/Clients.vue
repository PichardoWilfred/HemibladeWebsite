<template>
    <section class="flex flex-col px-6 lg:px-12 pt-6 pb-24 border-b border-gray-3">
        <h2 class="font-consolas text-gray-7 text-base mx-auto mb-14">CLIENTS</h2>
        <div class="flex flex-wrap justify-around">
            <img v-for="{src, class_, alt} in images" :src="src" :class="class_" :alt="alt" class="flex-shrink-0 object-contain">
        </div>

    </section>
</template>
<script setup>
    import require from '../../../libs/require.js';
    import { reactive } from 'vue';
    const images = reactive([
        {
            src: require('../../../../public/img/clients/Coopbueno.png'),
            class_: 'w-[360px]',
            alt: 'Coopbueno'
        },
        {
            src: require('../../../../public/img/clients/CSJ.png'),
            class_: 'w-[200px]',
            alt: 'Cooperativa San José'
        },
        {
            src: require('../../../../public/img/clients/CZFS.png'),
            class_: 'w-[310px]',
            alt: 'CZFS'
        }
    ])
</script>
<style scoped>
</style>