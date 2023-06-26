<script setup>
import portrait_img from '/img/portrait/portrait_logo.png'
</script>

<template>
    <section class="relative lg:h-[840px]">
        <div class="bg-section bg-blue-1 h-full" 
        :style="{backgroundImage: `url(${portrait_img})`}"></div>
        <div class="flex h-full w-full absolute top-0 items-center justify-center flex-col z-30 lg:px-6">
            <h2 class="font-consolas max-sm:mx-3 px-6 py-2 rounded-lg text-default font-bold text-center 
            text-2xl mt-[6rem] lg:mt-[4rem]">
                NOW IT ALL MAKES PERFECT SENSE®
            </h2>
            <h1 class="font-barlow max-lg:px-3 lg:px-4 lg:py-2 rounded-lg font-semibold max-w-[900px] text-[30px] 
            lg:text-[48px] lg:leading-[60px] text-center text-blue-4
            mt-[2rem] lg:mt-[20rem]">
                CONNECT THE DOTS BETWEEN SECURITY SYSTEMS
                THAT WERE UNRELATED… UNTIL NOW.
            </h1>
            <p class="font-consolas max-lg:p-4 text-center text-bold text-default 
                text-base lg:text-xl max-w-[800px] mt-[1.5rem] max-sm:bg-[#FFFFFFA1]">
                We develop event-driven integration software tools that add the
                intelligence and communication needed to coordinate independent 
                systems to operate as a team to enrich your situational awareness.
            </p>
        </div>
    </section>
</template>

<style scoped>
.bg-section {
    z-index: 2;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
@media (max-width: 1025px) {
    section {
        height: 700px;
    }
    .bg-section {
        background-position: center 50px;
        background-size: 1900px;
    }
}
@media (max-width: 1025px) and (orientation: landscape){
    section {
        height: 800px;
    }
    .bg-section {
        background-position: center 50px;
        background-size: 1900px;
    }
}
</style>