<script setup>
import portrait_img from '/img/portrait/portrait_logo.png'
</script>

<template>
    <section class="relative h-[60vh] min-[670px]:h-[70vh]">
        <div class="bg-section bg-blue-1 h-full" :style="{backgroundImage: `url(${portrait_img})`}"></div>
        <!-- [58.98%] -->
        <div class="gradient-to-white absolute w-full h-full z-20 bottom-0 left-0" />
        <!-- <div class="absolute bg-gradient-to-b from-white to-[#FFFFFF99] w-full h-full z-20 top-0 left-0" /> -->
        <div class=" flex h-full w-full absolute top-0 items-center flex-col z-30 px-3 lg:px-6">
            <h2 class="font-consolas px-6 py-2 rounded-lg text-default font-bold text-center 
            text-[4vw] min-[720px]:text-2xl min-[720px]:mt-[10rem] min-[720px]:mb-[3.5rem]">
                NOW IT ALL MAKES PERFECT SENSE®
            </h2>
            <h1 class="font-barlow px-4 py-2 rounded-lg bg-[#325A86AD] border
            border-gray-4 font-semibold min-[720px]:max-w-[830px] text-[5.3vw] 
            min-[865px]:text-[48px] min-[720px]:leading-[60px] text-center text-white my-[4vw] min-[720px]:mb-[6.5rem] min-[720px]:mt-0">
                CONNECT THE DOTS BETWEEN SECURITY SYSTEMS
                THAT WERE UNRELATED… UNTIL NOW.
            </h1>
            <!-- py-2 px-4 bg-[#FFFFFFD9]  -->
            <p class="font-consolas text-center text-bold text-white text-sm min-[720px]:text-xl max-w-[800px]">
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
    background-position: center 5%;
    background-size: 100%;
}
.gradient-to-white {
    background-color: #325A8660;
    /* background: linear-gradient(0deg, #FFFFFF 11.29%, #FFFFFF00 100.98%); */
}
</style>