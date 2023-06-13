<template>
    <div class="flex flex-col pt-6 pb-16 border-b border-b-gray-3">
        <h2 class="font-consolas text-gray-7 text-base mx-auto mb-14">SUPPORTED MANUFACTURES</h2>
        <section class="flex flex-wrap px-8 lg:px-10 ">
            <img :src="img" :alt="alt" :class="class_" class="object-contain max-lg:mb-10 ml-[8rem] mr-[10rem]">
            <p v-html="text" class="font-consolas text-lg max-w-[1080px]"></p>
        </section>
    </div>
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
            text: 'Network Optix began as an idea born of necessity – there simply had to be a better way to discover, view, and manage IP cameras. <br/ ><br/ > Nx Witness VMS is a lightning fast, easy to use, cross-platform IP video management system (VMS) / video surveillance software designed to discover, view, record, and manage IP video cameras so you can monitor, analyze and react to critical events in real time. <br/ ><br/ > <a href="https://www.networkoptix.com/" class="underline">https://www.networkoptix.com/</a>',
            img: require('../assets/supported_manufactures/NX.png'),
            class_: 'w-[320px]',
            alt: 'Network Optix'
        }
    ];
    const {text, img, class_, alt} = supported_manufactures[1];
</script>