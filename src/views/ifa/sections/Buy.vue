<template>
    <section class="overflow-hidden flex flex-col items-center relative min-h-[800px] bg-gray-5">
        <div class="blue-bubble absolute w-[110%] h-[25%] md:h-[40%] lg:h-[80%] top-0 translate-y-[-30%] md:translate-y-[-60%] rounded-b-[100%] " />
        <p class="max-w-[90%] lg:max-w-[1000px] text-center relative z-10
            font-consolas text-white md:leading-[28px] lg:leading-[36px] text-[16px] md:text-[20px] xl:text-[30px] 
            pt-8 xl:pt-16">
            The best solution for security panel supervision and instant video alarm confirmation is offered in two versions and <br class="max-xl:hidden"/> a trouble-free subscription mode for your convenience.
        </p>
        <!-- card-container flex flex-wrap max-lg:px-7 z-10 -->
        <div class="flex max-[835px]:flex-col relative z-10 max-w-[90%] lg:min-w-[980px] mt-6 lg:mt-10 first:justify-end">
            <div v-for="({name, price, color, class_, description, list}, index) of cards" :key="index" 
            class="flex flex-col min-[835px]:mr-28 last:mr-0 items-center" :class="class_">
                <div class="card flex flex-col p-[2px] bg-white rounded-lg mb-16 w-[320px]">
                    <div class="h-[30px]"> <!-- badge -->
                        <h3 class="font-consolas text-white font-bold text-xl rounded-lg text-center" :style="{ backgroundColor: color }">
                            IFA {{ name }}
                        </h3>
                    </div>
                    <div class="flex items-start content-start justify-center font-consolas py-6" :style="{ color }">
                        <p class="text-[35px] leading-[35px] mt-5">$</p>
                        <p class="text-[120px] leading-[90px]">{{ price }}</p>
                    </div>
                    <h4 class="font-consolas mb-4 font-bold text-gray-4 text-center">
                        PER DEVICE PER MONTH
                    </h4>
                </div>
                <div class="font-consolas text-white mb-16 min-[835px]:mr-28 last:mr-0">
                    <h5 class="font-bold px-5" :style="{backgroundColor: color}">
                        IFA {{ name }}
                    </h5>
                    <p class="px-5 text-[15px] lg:text-base">
                        {{ description }}
                    </p>
                    <ul class="pl-8">
                        <li v-for="(item, index_) of list" :key="index_" 
                        class="before:mr-2 before:content-['>'] before:text-[#56C1FF] flex flex-shrink-0 text-[15px] lg:text-base mb-3 lg:mb-[1px]">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
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
            'Arming assistant.',
            'Alarm history.',
            'Auto video download from related alarms.',
            'Multiple reports from panels and VMS.',
            'Manual video download.',
            'Optimized to display alarms on 4k monitors.',
            'Users privileges.',
            'Sessions administration.',
            'Users audit reports.',
            'Alarms notifications thru E-Mail and Telegram.',
            'More.',
        ],
        class_: 'min-[835px]:items-start',
    }
    ];
</script>
<style scoped>
    .blue-bubble {
        /* bg-gradient-to-b from-[#56C1FF] to-[#0076BA] */
        background: linear-gradient(180deg, #56C1FF 0%, #0076BA 110%);
    }
    @media (min-width: 768px) {
        .blue-bubble {
            /* bg-gradient-to-b from-[#56C1FF] to-[#0076BA] */
            background: linear-gradient(180deg, #56C1FF 50%, #0076BA 110%);
        }
    }
</style>