<template>
    <section class="flex flex-col px-7 sm:px-20 pt-10 lg:pt-20 pb-[7rem] lg:pl-32">
        
        <h1 class="font-consolas font-bold text-gray-8 text-3xl lg:text-4xl mb-4 uppercase">Downloads</h1>
        <div class="flex flex-wrap justify-between">
            <div>
                <h2 class="download-title">BROCHURES</h2>
                <ul>
                    <li v-for="({ title, download }, index) in brochures" :key="index" class="download-item">
                        <a :href="download" class="cursor-pointer hover:underline" download>
                            {{ title }}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="xl:mx-10">
                <h2 class="download-title">SOFTWARE</h2>
                <ul>
                    <li v-for="({ title, software, hint }, index) in softwares" :key="index" class="download-item">
                        <a :href="software" class="cursor-pointer hover:underline" :title="hint" target="_blank" download>
                            {{ title }}
                        </a>
                    </li>
                </ul>
            </div>
            
            <div>
                <h2 class="download-title">DOCUMENTATION</h2>
                <ul>
                    <li v-for="({ title, download }, index) in documentation" :key="index" class="download-item">
                        <a :href="download"  class="cursor-pointer hover:underline" download >
                            {{ title }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Downloads',
    data() {
        return {
            brochures: [
                {
                    title: 'Take control of your security (EN)',
                    download: 'files/[IFA] Brochure - Take control of your security (EN).pdf',
                },
                {
                    title: 'Tome control de su seguridad (SP)',
                    download: 'files/[IFA] Brochure - Tome control de su seguridad (SP)DR.pdf',
                },
                {   
                    title: 'Supervise your panels (EN)',
                    download: 'files/[IFA] Brochure - Supervise your panels (EN).pdf',
                },
                {
                    title: 'Supervise sus paneles (SP)',
                    download: 'files/[IFA] Brochure - Supervise sus paneles (SP) DR.pdf',
                },
            ],
            softwares: [
                {
                    title: 'IFA 2024-R1 Installer',
                    software: 'installers/ifa/IFA2024R1_v1_14_1.exe',
                    hint: 'IFA 2024-R1 version 1.14.1'
                },
                {
                    title: 'IFA Installation Guide',
                    software: 'guide/ifa/IFA Installation Guide.pdf',
                },
                {
                    title: 'IFA Setup Guide',
                    software: 'guide/ifa/IFA Setup Guide 2023-R1.pdf',
                }
            ],
            documentation: [
                {
                    title: 'Control Panel Integration',
                    download: 'tables/IFA Panel integration comparison B1.0.3.pdf',
                },
                {
                    title: 'VMS Integration',
                    download: 'tables/IFA VMS integration comparison B1.0.3.pdf',
                },
                {
                    title: 'IFA Versions Comparison',
                    download: 'files/IFA versions functionality comparison B1.0.3.0.pdf',
                },
                {
                    title: 'Telegram Integration Guide',
                    download: 'guide/messengers/Telegram Integration Guide.pdf',
                },
                {
                    title: 'Slack Integration Guide',
                    download: 'guide/messengers/Slack Integration Guide.pdf',
                }
            ]
        }
    },
}
</script>
<style scoped>
    .download-title {
        @apply font-consolas font-bold text-gray-8 text-xl lg:text-2xl mt-6 mb-5 lg:mb-1;
    }
    .download-item {
        @apply text-gray-8 text-[15px] lg:text-xl lg:max-w-[100%] max-lg:mb-3;
    }
</style>