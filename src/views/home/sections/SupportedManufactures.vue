<template>
    <section class="flex flex-wrap justify-around px-8 lg:px-10 py-16">
        <img :src="img" :alt="alt" :class="class_" class="object-contain max-lg:mb-10">
        <p v-html="text" class="font-consolas font-bold text-lg max-w-[780px]"></p>
    </section>
</template>
<script setup>
    import require from '@/libs/require.js';

    const supported_manufactures = [
        {
            text: 'DMP is a family-owned independent manufacturer of intrusion, fire, access control and cellular alarm solutions. <br /><br /> DMP products are designed, engineered and manufactured in America with U.S. <br /> and global components. Our factory, call center, engineering and distribution are all located in Springfield, Missouri, right where the business began more  than 45 years ago.<br /><br /> <a href="https://www.dmp.com/" class="underline">https://www.dmp.com/</a>',
            img: require('../assets/supported_manufactures/Hikvision.png'),
            class_: 'w-[320px]',
            alt: 'DMP'
        },
        {
            text: 'Network Optix began as an idea born of necessity – there simply had to be a better way to discover, view, and manage IP cameras. <br/ ><br/ > Nx Witness VMS is a lightning fast, easy to use, cross-platform IP video management system (VMS) / video surveillance software designed to discover, view, record, and manage IP video cameras so you can monitor, analyze and react to critical events in real time. <br/ ><br/ > https://www.networkoptix.com/',
            img: require('../assets/supported_manufactures/NX.png'),
            class_: 'w-[320px]',
            alt: 'Network Optix'
        }
    ];
    const {text, img, class_, alt} = supported_manufactures[1];
</script>