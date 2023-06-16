<template>
    <section class="flex flex-col px-6 lg:px-12 pt-6 border-b border-gray-2">
        <h2 class="font-consolas text-gray-4 text-base mx-auto mb-14">CLIENTS</h2>
        <!-- <div class="flex flex-wrap justify-around mb-24">
            <img v-for="{src, class_, alt} in images" :src="src" :class="class_" :alt="alt" class="flex-shrink-0 object-contain">
        </div> -->
        <div class=" mb-24">
            <swiper
            :module="modules"
            
            :slides-per-view="3" :autoplay="{ delay: 0 }">
                <swiper-slide v-for="{src, class_, alt} in images" :key="alt" :style="slide_styles">
                    <img :src="src" :class="class_" :alt="alt" class="flex-shrink-0 object-contain" />
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
<script setup>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Autoplay } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/pagination';

    // import { register } from 'swiper/element/bundle';
    
    import CB from '/img/clients/Coopbueno.png';
    import CSJ from '/img/clients/CSJ.png';
    import CZFS from '/img/clients/CZFS.png';

    import { reactive } from 'vue';

    // register swiper
    // register();
    const slide_styles = {
        display: 'flex',
        justifyContent: 'center',
        height: '200px',
        alignItems: 'center'
    }
    const modules = [Autoplay]
    const images = reactive([
        {
            src: CB,
            class_: 'w-[360px]',
            alt: 'Coopbueno'
        },
        {
            src: CSJ,
            class_: 'w-[200px]',
            alt: 'Cooperativa San José'
        },
        {
            src: CZFS,
            class_: 'w-[310px]',
            alt: 'CZFS'
        }
    ])
</script>
<style scoped>
</style>