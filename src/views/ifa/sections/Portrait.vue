<template>
    <section class="relative flex flex-col items-center text-center px-6 max-lg:py-6 sm:px-12 sm:pt-[108px] sm:pb-[156px]">
        <div class="relative z-30 flex flex-col items-center text-center">
            <h2 class="font-consolas font-extrabold text-center sm:text-[24px] lg:text-[1.5rem]">NOW IT ALL MAKES PERFECT SENSE®</h2>
            <h1 class="font-barlow text-center text-xl sm:text-[32px] lg:text-[44px] font-semibold text-[#0099DA] sm:leading-[42px] lg:leading-[52px] max-w-5xl pb-10 pt-5">
                TAKE YOUR SECURITY DEPARTMENT EFFICIENCY TO NEW HEIGHTS
                REAP THE BENEFITS OF INTEGRATION FOR INSTANT AND FORENSIC
                ALARM CONFIRMATION BY VIDEO
            </h1>
            <p class="max-sm:hidden font-nunito text-default text-md text-[16px] lg:text-[22px] text-center font-bold max-w-[1310px] leading-[1.6]">
                IFA handles your alarm panels and VMS as a single entity with access to their resources including the panel’s sensors activation when it is not armed. 
                Relate panel zones to VMS cameras, and create rules for event forwarding, notifications and supervision. 
                Open IFA dashboard. Be informed and create investigation reports with ease.
            </p>
        </div>
        
        <div class="absolute h-full w-full top-0 z-20">
            <div class="relative overflow-hidden bg-[#474747] h-full flex justify-center items-center">
                <div class="gray-line absolute left-0 top-[32%] lg:bottom-[32%] w-[200%]">
                    <img src="/img/ifa/portrait/line-gray.png" />
                </div>
                <div class="green-line absolute left-0 bottom-[22%] lg:bottom-[23%] w-[200%]">
                    <img src="/img/ifa/portrait/line-green.png" />
                </div>
                <div class="yellow-line absolute left-0 bottom-[18%] lg:bottom-[16%] w-[160%]">
                    <img src="/img/ifa/portrait/line-yellow.png" />
                </div>
                <div class="blue-line absolute left-0 bottom-[10%] lg:bottom-[6%] w-[130%]">
                    <img src="/img/ifa/portrait/line-blue.png" />
                </div>
                <div class="absolute bg-gradient-to-b from-white to-[#FFFFFF99] w-full h-full z-20 top-0 left-0" />
            </div>
        </div>
    </section>

</template>
<script setup>

import { onMounted } from 'vue';
onMounted(() => { window.scrollTo(0, 0) })
</script>
<style scoped>
.canvas {
    position: relative;
    display: flex;
    overflow: hidden;
    max-width: 500px;
    height: 42px;
}
.green-line {
    animation: move-green-line linear infinite 35s;
}
.gray-line {
    animation: move-gray-line linear infinite 105s;
}
.yellow-line {
    animation: move-yellow-line linear infinite 12s;
}
.blue-line {
    animation: move-blue-line linear infinite 10s;
}
@keyframes move-yellow-line {
    from {
        transform: translateX(0%);
    }to {
        transform: translateX(-6.25%);
    }
}
@keyframes move-green-line {
    from {
        transform: translateX(0%);
    }to {
        transform: translateX(-33.38%);
    }
}
@keyframes move-blue-line {
    from {
        transform: translateX(0%);
    }to {
        transform: translateX(-4.05%);
    }
}
@keyframes move-gray-line {
    from {
        transform: translateX(0%);
    }to {
        transform: translateX(-33.26%);
    }
}
</style>