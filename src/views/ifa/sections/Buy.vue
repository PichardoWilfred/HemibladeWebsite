<template>
    <section class="overflow-hidden flex flex-col items-center relative min-h-[780px] bg-gray-8 pb-[70px] px-7 lg:px-32">
        <p class="sm:text-center relative z-10 font-italic max-w-[1600px]
            font-consolas text-white md:leading-[28px] xl:leading-[38px] text-[18px] md:text-[20px] xl:text-[33px] 
            pt-8 xl:pt-18">
            The best solution for security panel supervision and instant video alarm confirmation is offered in two versions and 
            a trouble-free subscription mode for your convenience.
        </p>
        <div class="flex w-full max-w-[1460px] max-[835px]:flex-col justify-between z-10 my-10 first:justify-end">
            <div v-for="({name, price, color, class_, list_class, description, list}, index) of cards" :key="index" 
            class="flex flex-col w-full max-w-[657px] sm:mr-20 xl:mr-36 last:mr-0 items-center" :class="class_">
                <div class="card flex flex-col p-[2px] bg-white rounded-lg mb-8 w-full max-w-[360px]">
                    <h3 class="py-1 font-consolas text-white font-bold text-2xl rounded-lg text-center" :style="{ backgroundColor: color }">
                        IFA {{ name }}
                    </h3>
                    <div class="flex items-start content-start justify-center font-consolas py-7" :style="{ color }">
                        <p class="text-[35px] leading-[35px] mt-3">$</p>
                        <p class="text-[115px] leading-[80px]">{{ price }}</p>
                    </div>
                    <h4 class="font-consolas mb-2 font-bold text-gray-4 text-center text-lg">
                        PER DEVICE PER MONTH
                    </h4>
                </div>
                <div class="relative w-full font-consolas text-xl text-white 
                first:max-lg:mb-16 min-[835px]:mr-28 last:mr-0">
                    <h5 class="font-bold pl-2 sm:pl-8" :style="{backgroundColor: color}">
                        IFA {{ name }}
                    </h5>
                    <p class="pl-2 sm:pl-8 text-lg sm:text-xl mb-6 sm:my-1">
                        {{ description }}
                    </p>
                    <ul class="pl-4 sm:pl-14">
                        <li v-for="(item, index_) of list" :key="index_"
                        :class="list_class"
                        class="before:mr-1 before:content-['>']
                        flex flex-shrink-0 leading-[24px] lg:text-[20px] mb-0">
                            {{ item }}
                        </li>
                    </ul>
                    <div v-if="index === 1" class="max-[835px]:hidden absolute flex bottom-[-70px]">
                        <a href="files/buy/IFA Versions comparison.pdf" download
                        class="learn-more-btn group flex flex-shrink-0 items-center justify-center font-bold font-consolas
                        hover:text-default text-gray-8 bg-gray-3 hover:bg-yellow-3 active:bg-yellow px-4 py-4 lg:py-1 ml-14 transition-all cursor-pointer">
                            <b class="flex break-normal text-lg font-medium">DOWNLOAD COMPARISON CHARTS</b>
                            <download-icon width="22px" height="22px" class="ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-full min-[835px]:h-[1px]">
            <div class="min-[835px]:absolute left-[0px] lg:left-[-50px] top-[-98px] flex flex-col self-start 
            lg:mb-6 md:max-w-[400px] xl:max-w-[800px]">
                <img src="/img/ifa/buy/flag_dr.png" class="w-[90px] mb-2" alt="DOMINICAN REPUBLIC"/>
                <h3 class="font-consolas text-[16px] sm:leading-[15px] lg:text-[13px] text-white">
                    CLIENTS LOCATED IN DOMINICAN REPUBLIC CAN TAKE ADVANTAGE OF IFA LAUNCH PROMOTION <br /> TO GET THE STANDARD VERSION AT A 50% DISCOUNT DURING 2023.
                </h3>
                <h4 class="font-consolas text-[16px] sm:leading-[20px] lg:text-[13px] mt-2 text-gray-5">
                    PRICES IN NORTH AMERICAN DOLLARS
                </h4>
            </div>
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
        class_: 'min-[835px]:items-end max-md:mb-10',
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
            'A whole lot more. See comparison chart.',
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
    }
@media (min-width: 992px) {
    section {
        background-size: 100% 130%;
        background-position: 0px -190px;
    }    
}
@media (max-width: 1025px) {
    section {
        background-size: 2500px 2500px;
        background-position: center;
    }
}
.before-yellow::before { color: #F3BE19; } .before-blue::before { color: #56C1FF; }

</style>