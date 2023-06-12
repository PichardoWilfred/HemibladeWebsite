<template>
    <section class="text-black font-consolas px-4 lg:px-12 py-12">
        <h3 class="text-xl font-bold">HEMIBLADE INTEGRATION PLATFORM (HIP)</h3>
        <p class="mb-4">
            The HEMIBLADE Integration Platform, HIP for short, is our proprietary
            framework that provides the functionality and control needed to
            develop our software tools.
        </p>
        <p class="mb-4">
            HIP takes control of login sessions, Network filters, access to databases, user administration, access to devices,
            listeners, parsers, rules engines, notification rules, engines, dispatchers, API communications with 3rd party products and much more techie stuff.
        </p>
        <p class="mb-10">
            It took 3+ years of development to get HIP feature set ready to develop IFA. HIP continues to evolve and mature.
            The next “Big Thing” will come early 2024.
        </p>
        <div class="flex items-start flex-wrap max-lg:justify-around">
            <img v-for="img in images" :src="img.src" :alt="img.alt" :key="i" :class="img.class" class="mx-2 lg:mx-8 mb-10"/>
        </div>
    </section>
</template>

<script setup>
    import Blazor from "@/assets/HIP/Blazor.png";
    import Bootstrap from "@/assets/HIP/Bootstrap.png";
    import C_ from "@/assets/HIP/C_.png";
    import CSS from "@/assets/HIP/CSS.png";
    import DotNet from "@/assets/HIP/DotNetCore.png";
    import HTML from "@/assets/HIP/HTML.png";
    import JS from "@/assets/HIP/JS.jpg";
    import MSDotnet from "@/assets/HIP/MSDotNet.png";

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