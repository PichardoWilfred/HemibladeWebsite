<template>
    <section class="relative text-black font-consolas px-4 lg:px-12 pt-12">
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
            <p class="mb-10 text-lg">
                It took 3+ years of development to get HIP feature set ready to develop IFA. HIP continues to evolve and mature.
                <br /> The next “Big Thing” will come early 2024. Visit us again soon!
            </p>
            <div class="flex items-start flex-wrap justify-center">
                <img v-for="img in images" :src="img.src" :alt="img.alt" :key="i" :class="img.class"
                class="mx-6 mb-8 lg:mx-8"/>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background-size: cover;
    background-image: url('../../../assets/hip/background_1.jpg');
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
    import Blazor from "@/assets/hip/Blazor.png";
    import Bootstrap from "@/assets/hip/Bootstrap.png";
    import C_ from "@/assets/hip/C_.png";
    import CSS from "@/assets/hip/CSS.png";
    import DotNet from "@/assets/hip/DotNetCore.png";
    import HTML from "@/assets/hip/HTML.png";
    import JS from "@/assets/hip/JS.jpg";
    import MSDotnet from "@/assets/hip/MSDotNet.png";

    const images = [

    {
        src: C_,
        alt: 'C#',
        class: 'w-[120px] lg:w-[80px]',
    },  
    {
        src: DotNet,
        alt: 'DotNet',
        class: 'w-[120px] lg:w-[85px]',
    }, 
    {
        src: MSDotnet,
        alt: 'MSDotnet',
        class: 'w-[120px] lg:w-[80px]',
    },
    {
        src: JS,
        alt: 'JS',
        class: 'w-[120px] lg:w-[80px]',
    },
    {
        src: HTML,
        alt: 'HTML',
        class: 'w-[100px] lg:w-[65px]',
    }, 
    {
        src: CSS,
        alt: 'CSS',
        class: 'w-[120px] lg:w-[75px]',
    },
    {
        src: Bootstrap,
        alt: 'Bootstrap',
        class: 'w-[120px] lg:w-[85px]',
    },
    {
        src: Blazor,
        alt: 'Blazor',
        class: 'w-[120px] lg:w-[85px]',
    }, 
    ];
</script>