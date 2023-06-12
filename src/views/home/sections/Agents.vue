<script setup>
    import ifa from "../../../assets/portrait/IFA.jpg";
    import aka from "../../../assets/portrait/AKA.jpg";
    // import aka_img from "";
1</script>

<template>
    <section class="px-7 lg:px-12 pt-10">
        <p class="normal-text font-semibold text-base lg:text-xl pb-12">
            HEMIBLADE software tools are called Agents. These pieces of software are specialized in handling data types from specific types of devices.
            <br /> IFA stands for “Intrusion Fire Agent” and is dedicated to interact with intrusion and fire panels. In the same way, AKA means Access Control Agent <br /> and is tasked to interact with access control systems.
            <br /> <br />
            To learn how HEMIBLADE Agents can enhance your security system just click on the Agent’s logo.
        </p>
        <div class="flex justify-around flex-wrap">
            <img :src="ifa" class="application" alt="" srcset="">
            <img :src="aka" class="application translate-x-[-4px]">
        </div>
    </section>
    
    <section class="bg-[#EEF8FE] font-consolas px-4 lg:px-12 py-12 border-y border-[#EFEFEF]">
        <h4 class="max-lg:mb-4 uppercase font-bold text-xl">
            Years in the security industry working with products from many vendors taught us a few things.
        </h4>

        <p class="text-lg">
            <ul class="mb-6">
                <li>
                    - Not a single manufacturer offers all the best products.
                </li>
                <li>
                    - To have the best possible system products must be bought from different	manufacturers but not naturaly integrated.
                </li>
                <li>
                    - Useful integration it’s hard to achieve.
                </li>
                <li>
                    - Good integration products are expensive to acquire and complex to set up	and maintain.
                </li>
            </ul>
            Hemiblade software tools are easy on the budget, a breeze to set up and maintain, and very simple to use.
            <br />
            Too good to be true? Well, ask for a free demo!
        </p>
    </section>

</template>

<style scoped>
img.aka {
    transform: translateY(-4px);
}
.application {
    @apply min-w-[360px] lg:min-w-[490px] w-[40%] max-w-[750px] flex-shrink-0 mx-5 mb-10;
}
</style>