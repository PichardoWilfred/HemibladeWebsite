<template>
    <section class="flex flex-col px-7 lg:px-12 pt-6 border-b border-gray-2">
        <h2 class="font-consolas text-gray-4 text-base mx-auto mb-5">CLIENTS</h2>
        <div class="flex max-lg:flex-col max-lg:items-center flex-wrap justify-around pt-10 mb-10">
            <cloud-img v-for="{src, class_, alt} in images" :img="src" :class="class_" :alt="alt" 
            class="object-contain mb-20 lg:mb-10" />
        </div>
    <!--<div class="swiper-container overflow-hidden">
            <div class="swiper-wrapper mb-10">
                <div v-for="(img, index) in images" :key="index" class="swiper-slide flex" :style="slide_styles">
                    <img :src="img.src" alt="" :class="img.class_" class="object-contain">
                </div>
            </div>
        </div> -->
    </section>
</template>
<script setup>
    import CloudImg from '../../../components/cloud-img.vue';

    import CB from '/img/clients/Coopbueno.png';
    import CSJ from '/img/clients/CSJ.png';
    import CZFS from '/img/clients/CZFS.png';


    import { reactive, onMounted } from 'vue';

    const images = reactive([
        {
            src: 'v1716167870/Coopbueno_tjasbf.png',
            class_: 'w-[360px]',
            alt: 'Coopbueno'
        },
        {
            src: 'v1716167871/CSJ_rwc3dc.png',
            class_: 'w-[200px] mx-16',
            alt: 'Cooperativa San José'
        },
        {
            src: 'v1716167872/CZFS_nicl0j.png',
            class_: 'w-[310px]',
            alt: 'CZFS'
        },
    ])
    const slide_styles = {
        display: 'flex',
        justifyContent: 'center',
    };
    onMounted(() => {
        new Swiper('.swiper-container', {
            // autoplay: {
            //     delay: 0,
            //     disableOnInteraction: true // Specify the autoplay delay in milliseconds
            // },
            // infinite: true,
            // loop: true,
            slidesPerView: 3,
            speed: 12500,
            breakpoints: {
                100: {
                    slidesPerView: 2,
                    spaceBetween: 80
                },
                992: {
                    slidesPerView: 3
                }
            }
        })
    });
</script>
<style>
.swiper-wrapper {
    -webkit-transition-timing-function: linear !important; 
    -o-transition-timing-function: linear !important;
    transition-timing-function: linear !important; 
}
.swiper-slide {
    height: 250px;
}
</style>