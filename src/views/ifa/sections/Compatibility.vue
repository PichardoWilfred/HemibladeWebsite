<template>
    <section class="flex flex-col space-y-4 items-center max-lg:px-7 mb-20 lg:mb-36">
        <div class="flex flex-wrap sm:mb-[0.3rem]">
            <h1 class="flex max-sm:flex-col font-consolas font-bold text-gray-8 text-lg">
                [IFA] IS COMPATIBLE WITH THE FOLLOWING SYSTEMS:
            </h1>
        </div>
        <div class="flex flex-wrap items-center justify-center pt-10 sm:pt-4 px-12 bg-gray-1 rounded-md w-full lg:max-w-[96%]">
            <img v-for="img in images" :class="img.img_class" class="first:ml-0 sm:ml-11 mb-8 sm:mb-4" :src="img.src">
        </div>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

// images
import DMP from "/img/ifa/compatibility/DMP.png";
import DSC from "/img/ifa/compatibility/DSC.png";
import Milestone from "/img/ifa/compatibility/Milestone.png";
import NX from "/img/ifa/compatibility/NX.png";
import DW from "/img/ifa/compatibility/DW.png";
import Hanwha from "/img/ifa/compatibility/Hanwha.png";
import Hikvision from "/img/ifa/compatibility/Hikvision.png";
import BW from "/img/ifa/compatibility/B&W.png";

export default {
    name: 'Compatibility',
    components: { Swiper, SwiperSlide },
    data() {
        return {
            images: [
                { src: DMP, img_class: 'h-[45px] lg:h-[35px]',},
                { src: DSC, img_class: 'h-[30px] lg:h-[28px]',},
                { src: Milestone, img_class: 'h-[40px]',},
                { src: NX, img_class: 'h-[43px]',},
                { src: DW, img_class: 'h-[33px]',},
                { src: Hanwha, img_class: 'h-[68px]',},
                { src: BW, img_class: 'h-[53px]',},
                { src: Hikvision, img_class: 'h-[23px]'},
            ]
        }
    },
    methods: {
        getImage(name) {
            return new URL(`${name}`, import.meta.url);
        },
    }
}
</script>
<style scoped></style>