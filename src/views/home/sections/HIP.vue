<template>
    <section class="relative text-black font-consolas px-7 lg:px-12 pt-24" :style="{backgroundImage: `url(${bg_code})`}">
        <div class="w-full relative z-20 max-w-[1450px]">
            <h3 class="max-lg:mb-4 mb-3 text-[16px] lg:text-2xl font-bold">HEMIBLADE INTEGRATION PLATFORM (HIP)</h3>
            <p class="mb-4 text-[15px] lg:text-lg">
                The HEMIBLADE Integration Platform, HIP for short, is our proprietary
                framework that provides the functionality and control needed to
                develop our software tools.
            </p>
            <p class="mb-4 text-[15px] lg:text-lg">
                HIP takes control of login sessions, Network filters, access to databases, user administration, access to devices,
                listeners, parsers, rules engines, notification rules, engines, dispatchers, API communications with 3rd party products and much more techie stuff.
            </p>
            <p class="text-[15px] lg:text-lg">
                It took 3+ years of development to get HIP feature set ready to develop IFA. HIP continues to evolve and mature. <br /><br />
                
                Stay tuned. A BIG evolution arrives in 2024 and it will be free for all active users.
            </p>
            
        </div>
        <div class="flex max-lg:flex-col max-lg:items-center relative items-start flex-wrap justify-center mt-20 z-20">
            <cloud-img v-for="(img,i) in images" :alt="img.alt" :key="i" 
            :class="img.class" :img="img.src" 
            class="mx-6 mb-8 lg:mb-[70px] lg:mx-8" />
        </div>
    </section>
</template>
<script setup>
    import cloudImg from "../../../components/cloud-img.vue";

    const bg_code = 'https://res.cloudinary.com/drmvnxe4l/image/upload/v1716162393/background_1_xzt7xz.jpg';

    const images = [
    {
        src: 'v1716162393/C__chcgur.png',
        alt: 'C#',
        class: 'w-[120px] lg:w-[90px]',
    },  
    {
        src: 'v1716162396/DotNetCore_gdj8up.png',
        alt: 'DotNet',
        class: 'w-[120px] lg:w-[102px]',
    }, 
    {
        src: 'v1716162399/MSDotNet_oulu3o.png',
        alt: 'MSDotnet',
        class: 'w-[120px] lg:w-[102px]',
    },
    {
        src: 'v1716162398/JS_c07kgv.jpg',
        alt: 'JS',
        class: 'w-[120px] lg:w-[102px]',
    },
    {
        src: 'v1716162397/HTML_ntus6l.png',
        alt: 'HTML',
        class: 'w-[100px] lg:w-[78px]',
    }, 
    {
        src: 'v1716162396/CSS_k3ju4o.png',
        alt: 'CSS',
        class: 'w-[120px] lg:w-[90px]',
    },
    {
        src: 'v1716162393/Bootstrap_wtwrfw.png',
        alt: 'Bootstrap',
        class: 'w-[120px] lg:w-[120px]',
    },
    {
        src: 'v1716162393/Blazor_fh6ifs.png',
        alt: 'Blazor',
        class: 'w-[120px] lg:w-[113px]',
    }, 
    ];
</script>
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