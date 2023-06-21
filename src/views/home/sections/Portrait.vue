<script setup>
import portrait_img from '/img/portrait/portrait_logo.png'
</script>

<template>
    <section class="relative h-[60vh] min-[670px]:h-[94vh]">
        <div class="bg-section bg-blue-1 h-full" :style="{backgroundImage: `url(${portrait_img})`}"></div>
        <!-- [58.98%] -->
        <div class="gradient-to-white absolute w-full h-full z-20 bottom-0 left-0" />
        <!-- <div class="absolute bg-gradient-to-b from-white to-[#FFFFFF99] w-full h-full z-20 top-0 left-0" /> -->
        <div class=" flex h-full w-full absolute top-0 items-center justify-center flex-col z-30 px-3 lg:px-6">
            <h2 class="font-consolas px-6 py-2 rounded-lg bg-white border border-gray-2 text-default font-bold text-center text-[4vw] min-[720px]:text-2xl min-[670px]:mt-32">
                NOW IT ALL MAKES PERFECT SENSE®
            </h2>
            <h1 class="font-barlow px-2 py-2 rounded-lg bg-blue-4 border border-gray-4 font-semibold min-[720px]:max-w-[830px] text-[5.3vw] min-[865px]:text-[48px] min-[720px]:leading-[60px] text-center text-white my-[4vw] min-[720px]:my-16">
                CONNECT THE DOTS BETWEEN SECURITY SYSTEMS
                THAT WERE UNRELATED… UNTIL NOW.
            </h1>
            <p class="font-open-sans text-center text-default font-semibold text-sm min-[720px]:text-xl max-w-[800px]">
                We develop event-driven integration software tools that add intelligence and
                communication needed to coordinate independent systems to operate
                coordinately to enrich your situational awareness.
            </p>
        </div>
    </section>
</template>

<style scoped>
.bg-section {
    z-index: 2;
    background-position: center;
    background-size: 160%;
}
.gradient-to-white {
    background: linear-gradient(0deg, #FFFFFF 11.29%, #FFFFFF00 100.98%);
}
</style>