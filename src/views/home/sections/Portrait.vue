<script setup>
import portrait_img from '../../../../public/img/portrait/portrait_logo.png'
</script>

<template>
    <section class="relative">
        <div fetchpriority="high" class="bg-section h-[60vh] min-[670px]:h-[94vh] bg-blue-1" :style="{backgroundImage: `url(${portrait_img})`}"></div>
        <div class=" flex h-full w-full absolute top-0 items-center justify-center flex-col z-20 px-3 lg:px-6">
            <h2 class="font-consolas text-default font-bold text-center text-[4vw] min-[720px]:text-2xl min-[670px]:mt-32">
                NOW IT ALL MAKES PERFECT SENSE®
            </h2>
            <h1 class="font-barlow font-semibold min-[720px]:max-w-[830px] text-[5.3vw] min-[865px]:text-[48px] min-[720px]:leading-[60px] text-center text-blue-4 my-[4vw] min-[720px]:my-16">
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
    background-size: cover;
    filter: blur(2px);
    -webkit-filter: blur(2px);
    
}
.bg-section::after {
    top: 0;
    z-index: 1;
    content: '';
    background-color: rgba(255, 255, 255, 0.521);
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>