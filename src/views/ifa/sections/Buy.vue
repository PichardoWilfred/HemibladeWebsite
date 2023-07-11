<template>
    <section class="overflow-hidden flex flex-col items-center relative min-h-[780px] bg-gray-8 pb-8 px-7 lg:px-32">
        <div class="blue-bubble absolute w-[110%] h-[25%] md:h-[40%] lg:h-[68%] top-0 translate-y-[-30%] md:translate-y-[-60%] rounded-b-[100%] " />
        <p class="sm:max-w-[678px] xl:max-w-[1000px] text-center relative z-10 font-italic
            font-consolas text-white md:leading-[28px] xl:leading-[36px] text-[18px] md:text-[20px] xl:text-[30px] 
            pt-8 xl:pt-15">
            <i>
                The best solution for security panel supervision and instant video alarm confirmation is offered in two versions and <br class="max-sm:hidden"/> a trouble-free subscription mode for your convenience.
            </i>
        </p>
        <div class="flex max-[835px]:flex-col justify-center z-10 my-6 first:justify-end">
            <div v-for="({name, price, color, class_, list_class, description, list}, index) of cards" :key="index" 
            class="flex flex-col min-[835px]:mr-28 last:mr-0 items-center" :class="class_">
                <div class="card flex flex-col p-[2px] bg-white rounded-lg mb-10 w-[285px]">
                    <div class="h-[30px]"> <!-- badge -->
                        <h3 class="font-consolas text-white font-bold text-xl rounded-lg text-center" :style="{ backgroundColor: color }">
                            IFA {{ name }}
                        </h3>
                    </div>
                    <div class="flex items-start content-start justify-center font-consolas pt-1 pb-0" :style="{ color }">
                        <p class="text-[35px] leading-[35px] mt-5">$</p>
                        <p class="text-[90px] leading-[80px]">{{ price }}</p>
                    </div>
                    <h4 class="font-consolas mt-1 mb-2 font-bold text-gray-4 text-center">
                        PER DEVICE PER MONTH
                    </h4>
                </div>
                <div class="font-consolas text-white first:max-lg:mb-16 min-[835px]:mr-28 last:mr-0">
                    <h5 class="font-bold px-5" :style="{backgroundColor: color}">
                        IFA {{ name }}
                    </h5>
                    <p class="px-5 text-[15px] lg:text-base">
                        {{ description }}
                    </p>
                    <ul class="pl-8">
                        <li v-for="(item, index_) of list" :key="index_"
                        :class="list_class"
                        class="before:mr-1 before:content-['>']
                        flex flex-shrink-0 text-[15px] leading-[20px] lg:text-[16px] mb-3 lg:mb-0">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap w-full content-center justify-between items-center">
            <div class="flex flex-col self-start max-lg:mb-6 sm:max-w-[800px]">
                <img src="/img/ifa/buy/flag_dr.png" class="w-[90px] mb-2" alt="DOMINICAN REPUBLIC"/>
                <h3 class="font-consolas text-[15px] leading-[15px] lg:text-[13px] text-white">
                    CLIENTS LOCATED IN DOMINICAN REPUBLIC CAN TAKE ADVANTAGE OF IFA LAUNCH PROMOTION <br /> TO GET THE STANDARD VERSION AT A 50% DISCOUNT DURING 2023.
                </h3>
                <h4 class="font-consolas text-[15px] leading-[20px] lg:text-[13px] mt-2 text-gray-5">
                    PRICES IN NORTH AMERICAN DOLLARS
                </h4>
            </div>
            
            <a href="tables/IFA VMS integration comparison B1.0.3.pdf" download
            class="learn-more-btn group flex flex-shrink-0 items-center justify-center font-bold font-consolas hover:text-default text-gray-8 bg-gray-3 hover:bg-yellow-3 active:bg-yellow px-4 py-4 lg:py-1 w-full lg:w-max transition-all cursor-pointer">
                <span class="flex break-normal text-lg font-medium">DOWNLOAD COMPARISON CHARTS</span>
                <download-icon width="22px" height="22px" class="ml-2" />
            </a>
        </div>
    </section>
</template>
<script setup>
import downloadIcon from '../../../components/icons/download-icon.vue';
const cards = [
    {
        name: 'FORWARD',
        price: 10,
        color: '#F3BE19',
        description: 'Forward panel messages to VMS for post-processing.',
        list: [
            'Alarm panel integration.',
            'Panels live message monitoring.',
            'VMS integration.' ,       
            'IFA System Dashboard.',
            'Panels messages log.'
        ],
        class_: 'min-[835px]:items-end',
        list_class: 'before-yellow'
    },
    {
        name: 'STANDARD',
        price: 30,
        color: '#1da5f5',
        description: 'All IFA Forward functionality plus the following.',
        list: [
            'VISOR Dashboards.',
            'Live and recorded video from related alarms.',
            'RTE Events.',
            'Panel live zone monitoring.',
            'Panel remote control (Arm, disarm, more).',
            'Visual arming assistant.',
            'Alarm history.',
            'Auto video backup from related alarms.',
            'Multiple reports from panels and VMS.',
            'Manual video download.',
            'Optimized to display alarms on 4k monitors.',
            'Users privileges.',
            'Sessions administration.',
            'Users audit reports.',
            'Alarms notifications thru E-Mail and Telegram.',
            'Incidents research.',
            'More.',
        ],
        class_: 'min-[835px]:items-start',
        list_class: 'before-blue'
    } 
];
</script>
<style scoped>
section {
    background-image: url('/img/ifa/buy/buy-background.png');
    background-repeat: no-repeat;
    background-size: 100vw 100%;
}
@media (max-width: 1025px) {
    section {
        background-size: 2500px 2500px;
        background-position: center;
    }
}
/* bg-gradient-to-b from-[#56C1FF] to-[#0076BA] */
.blue-bubble {
    background: linear-gradient(180deg, #56C1FF 0%, #0076BA 110%);
}
@media (min-width: 768px) {
    .blue-bubble {
        background: linear-gradient(180deg, #56C1FF 50%, #0076BA 110%);
    }
}
.before-yellow::before {
    color: #F3BE19;
}
.before-blue::before {
    color: #56C1FF;
}
</style>