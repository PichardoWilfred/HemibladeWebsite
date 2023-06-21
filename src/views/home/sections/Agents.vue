<script setup>
    import ifa from "/img/portrait/IFA.jpg";
    import aka from "/img/portrait/AKA.jpg";
    import { reactive } from "vue";
    const list = reactive([
        'Not a single manufacturer offers all the best products.',
        'To have the best possible system products must be bought from different manufacturers but not naturaly integrated.',
        'Useful integration it’s hard to achieve.',
        'Good integration products are expensive to acquire and complex to set up	and maintain.',
    ])
1</script>

<template>
    <section class="px-7 lg:px-12 pt-10" id="products">
        <p class="normal-text text-[15px] lg:text-xl pb-12 lg:pb-24 max-w-[1700px]">
            HEMIBLADE software tools are called Agents. These pieces of software are specialized in handling data types from specific types of devices. <br />
            IFA stands for “Intrusion Fire Agent” and is dedicated to interact with intrusion and fire panels. In the same way, AKA means Access Control Agent and is tasked to interact with access control systems.
            <br /> <br />
            Click on an Agent’s logo to learn how Hemiblade Software can enhance your security system.
        </p>
        <div class="flex justify-around flex-wrap">
            <a class="flex application" href="https://elaborate-donut-4c6c64.netlify.app/">
                <img :src="ifa" class="" alt="" srcset="">
            </a>
            <a class="flex application" href="">
                <img :src="aka" class=" aka">
            </a>
        </div>
    </section>
    
    <section class="bg-[#EEF8FE] font-consolas px-7 lg:px-12 py-24 border-y border-[#EFEFEF]">
        <h4 class="max-lg:mb-4 uppercase font-bold text-[16px] lg:text-xl">
            Years in the security industry working with products from many vendors taught us a few things.
        </h4>
        <p class="text-[15px] lg:text-lg">
            <ul class="mb-6">
                <li v-for="(item, index) of list" :key="index" class="before:mr-2 before:content-['-'] flex flex-shrink-0 text-[15px] lg:text-lg mb-3 lg:mb-1">
                    {{ item }}
                </li>
            </ul>
            <br />
            <p class="text-[15px] lg:text-lg ">
                Hemiblade software tools are easy on the budget, a breeze to set up and maintain, and very simple to use.
                <br />
                Too good to be true? Well, ask for a free demo!
            </p>
        </p>
    </section>

</template>

<style scoped>

.application {
    @apply w-full sm:max-w-[460px] lg:min-w-[490px] lg:w-[40%] max-w-[750px] flex-shrink-0 mx-5 mb-10 lg:mb-24;
}
img.application.aka {
    transform: scale(1.04) translateY(-10px);
}
ul li::before {
    /* margin-right: 10px; */
}
</style>