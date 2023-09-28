<template>
    <section class="max-lg:px-7 mb-20 lg:mb-36 py-10">
        <h1 class="text-center font-consolas text-2xl text-gray-3 mb-16">
            [IFA] IS COMPATIBLE WITH THE FOLLOWING SYSTEMS:
        </h1>
        <div class="images-container">
            <img src="/img/ifa/compatibility/DMP.png" class="image first-img" />
            <img src="/img/ifa/compatibility/neo.png" class="image second-img" />
            <img src="/img/ifa/compatibility/Milestone.png" class="image third-img" />
            <img src="/img/ifa/compatibility/NX.png" class="image fourth-img" />
            <img src="/img/ifa/compatibility/DW.png" class="image fifth-img" />
            <img src="/img/ifa/compatibility/Hanwha.png" class="image sixth-img" />
            <img src="/img/ifa/compatibility/dahua.png" class="image seventh-img" />
            <img src="/img/ifa/compatibility/Hikvision.png" class="image eigth-img" />
        </div>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

// images
import DMP from "/img/ifa/compatibility/DMP.png";
import Dahua from "/img/ifa/compatibility/dahua.png";
import Milestone from "/img/ifa/compatibility/Milestone.png";
import NX from "/img/ifa/compatibility/nx.png";
import DW from "/img/ifa/compatibility/DW.png";
import Hanwha from "/img/ifa/compatibility/Hanwha.png";
import Neo from "/img/ifa/compatibility/neo.png";
import Hikvision from "/img/ifa/compatibility/Hikvision.png";

export default {
    name: 'Compatibility',
    components: { Swiper, SwiperSlide },
    data() {
        return {
            images: [
                { src: DMP, img_class: '',},
                { src: Dahua, img_class: '',},
                { src: Milestone, img_class: '',},
                { src: NX, img_class: '',},
                { src: DW, img_class: '',},
                { src: Hanwha, img_class: '',},
                { src: Hikvision, img_class: ''},
                { src: Neo, img_class: ''},
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
<style scoped>
section {
    background-position: top center;
    background-size: 100% 100%;
    background-image: url('/img/ifa/compatibility/section-bg.png')
}
.image {
    @apply max-lg:mb-10 flex border border-gray-4 rounded-md w-[330px];
}

.images-container {
    display: flex;
    flex-direction: column;
}
@media (min-width: 992px) {
    .images-container {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: auto;
        grid-template-rows: 22vh 21vh 20vh;
        column-gap: 35px;
        grid-template-areas:
        ". first-img second-img ."
        "third-img fourth-img fifth-img sixth-img"
        ". seventh-img eigth-img .";
    }
}
.first-img, .second-img {
    align-self: start;
}
.first-img {
    grid-area: first-img;
}
.second-img {
    grid-area: second-img;
}
.third-img {
    grid-area: third-img;
}
.fourth-img {
    grid-area: fourth-img;
}
.fifth-img {
    grid-area: fifth-img;
}
.sixth-img {
    grid-area: sixth-img;
}
.seventh-img {
    grid-area: seventh-img;
}
.eigth-img {
    grid-area: eigth-img;
}
</style>