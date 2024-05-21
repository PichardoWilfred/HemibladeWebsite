<script setup>
import portrait_img from '/img/portrait/portrait_logo.png';
import cloudImg from '../../../components/cloud-img.vue';
</script>

<template>
    <section class="relative lg:h-[840px]">
        <cloud-img class="bg-section object-cover h-full" img="v1716138337/portrait_logo_w5ad4b.png" />
        <!-- <div class="bg-section bg-white h-full" :style="{ backgroundImage: `url(https://res.cloudinary.com/drmvnxe4l/image/upload/v1716138337/portrait_logo_w5ad4b.png)` }" /> -->
        <div class="flex flex-col h-full w-full absolute top-0 items-center z-30 lg:px-6">
            <h2 class="font-consolas max-sm:mx-3 px-6 py-2 rounded-lg text-default font-bold text-center 
            text-2xl mt-[9rem] lg:mt-[9rem]">
                NOW IT ALL MAKES PERFECT SENSE®
            </h2>
            <p class="font-barlow max-lg:px-3 lg:px-4 lg:py-2 rounded-lg font-semibold max-w-[572px] lg:max-w-[900px] 
            text-[5.3vw] sm:text-[30px] lg:text-[48px] 
            lg:leading-[60px] text-center text-blue-4
            mt-[7.5rem] lg:mt-[20rem]">
                CONNECT THE DOTS BETWEEN SECURITY SYSTEMS
                THAT WERE UNRELATED… UNTIL NOW.
            </p>
            <div class="max-lg:bg-[#FFFFFF] max-lg:p-4 pt-0 mt-[1.5rem] w-full flex justify-center">
                <p class="font-consolas text-default text-center 
                    text-base lg:text-xl max-w-[663px] lg:max-w-[800px]">
                    We develop event-driven integration software tools that add the
                    intelligence and communication needed to coordinate independent 
                    systems to operate as a team to enrich your situational awareness.
                </p>
            </div>
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
@media (max-width: 1025px) and (orientation: landscape), (max-width: 1025px){
    section {
        height: 530px;
    }
    .bg-section {
        background-position: center 50px;
        background-size: 1000px;
    }
}
@media (max-width: 550px) {
    section {
        min-height: 600px;
    }
    .bg-section {
        background-size: 1100px;
    }
}

</style>