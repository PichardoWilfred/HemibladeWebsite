<template>
    <section class="relative text-black font-consolas px-4 lg:px-12 pt-16" :style="{backgroundImage: `url(${bg_code})`}">
        <div class="w-full relative z-20 max-w-[1450px]">
            <h3 class="max-lg:mb-4 text-2xl font-bold">HEMIBLADE INTEGRATION PLATFORM (HIP)</h3>
            <p class="mb-4 text-lg">
                The HEMIBLADE Integration Platform, HIP for short, is our proprietary
                framework that provides the functionality and control needed to
                develop our software tools.
            </p>
            <p class="mb-4 text-lg">
                HIP takes control of login sessions, Network filters, access to databases, user administration, access to devices,
                listeners, parsers, rules engines, notification rules, engines, dispatchers, API communications with 3rd party products and much more techie stuff.
            </p>
            <p class="text-lg">
                It took 3+ years of development to get HIP feature set ready to develop IFA. HIP continues to evolve and mature.
                <br /> The next “Big Thing” will come early 2024. Visit us again soon!
            </p>
            <div class="flex items-start flex-wrap justify-center mt-16">
                <img v-for="img in images" :src="img.src" :alt="img.alt" :key="i" :class="img.class"
                class="mx-6 mb-8 lg:mb-16 lg:mx-8"/>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background-size: cover;
}
section::after {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.849);
}
</style>
<script setup>
    import require from "../../../libs/require";
    import bg_code from '../../../../public/img/hip/background_1.jpg'

    const images = [

    {
        src: require('../../../../public/img/hip/C_.png'),
        alt: 'C#',
        class: 'w-[120px] lg:w-[80px]',
    },  
    {
        src: require('../../../../public/img/hip/DotNetCore.png'),
        alt: 'DotNet',
        class: 'w-[120px] lg:w-[85px]',
    }, 
    {
        src: require('../../../../public/img/hip/MSDotNet.png'),
        alt: 'MSDotnet',
        class: 'w-[120px] lg:w-[80px]',
    },
    {
        src: require('../../../../public/img/hip/JS.jpg'),
        alt: 'JS',
        class: 'w-[120px] lg:w-[80px]',
    },
    {
        src: require('../../../../public/img/hip/HTML.png'),
        alt: 'HTML',
        class: 'w-[100px] lg:w-[65px]',
    }, 
    {
        src: require('../../../../public/img/hip/CSS.png'),
        alt: 'CSS',
        class: 'w-[120px] lg:w-[75px]',
    },
    {
        src: require('../../../../public/img/hip/Bootstrap.png'),
        alt: 'Bootstrap',
        class: 'w-[120px] lg:w-[85px]',
    },
    {
        src: require('../../../../public/img/hip/Blazor.png'),
        alt: 'Blazor',
        class: 'w-[120px] lg:w-[85px]',
    }, 
    ];
</script>