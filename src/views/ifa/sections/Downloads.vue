<template>
    <section class="flex flex-col px-7 sm:px-20 pt-10 lg:pt-20 pb-[5.5rem] lg:pl-32">
        
        <h1 class="font-consolas font-bold text-gray-8 text-3xl lg:text-4xl mb-4 uppercase">Downloads</h1>
        <div class="flex flex-wrap justify-between">

            <div>
                <h2 class="download-title">BROCHURES</h2>
                <ul>
                    <li v-for="({ title, download }, index) in downloads" :key="index" class="text-gray-8 text-[15px] lg:text-2xl lg:max-w-[100%] max-lg:mb-3 mb-1">
                        <a :href="download" class="cursor-pointer hover:underline" download>
                            {{ title }}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="xl:mx-10">
                <h2 class="download-title">SOFTWARE</h2>
                <ul>
                    <li v-for="({ title, software }, index) in softwares" :key="index" class="text-gray-8 text-[15px] lg:text-2xl lg:max-w-[100%] max-lg:mb-3">
                        <a :href="software" class="cursor-pointer hover:underline" download>
                            {{ title }}
                        </a>
                    </li>
                </ul>
            </div>
            
            <div>
                <h2 class="download-title">DOCUMENTATION</h2>
                <ul>
                    <li v-for="({ title, download }, index) in integration_features" :key="index" class="text-gray-8 text-[15px] lg:text-2xl lg:max-w-[100%] max-lg:mb-3">
                        <a :href="download" class="cursor-pointer hover:underline" download>
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
            downloads: [
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
                    title: 'IFA 2023-R1 Installer B1.0.3.3',
                    software: 'https://drive.google.com/file/d/1RYyrBaMjXnGZR3FDeLjEHUICfpGUGIOK/view?usp=sharing',
                },
                {
                    title: 'IFA Release Notes',
                    software: '',
                },
            ],
            integration_features: [
                {
                    title: 'Control Panel Integration B1.0.3.3',
                    download: 'tables/IFA Panel integration comparison B1.0.3.pdf',
                },
                {
                    title: 'VMS Integration B1.0.3.3',
                    download: 'tables/IFA VMS integration comparison B1.0.3.pdf',
                },
                {
                    title: 'IFA Telegram Integration Guide',
                    download: 'guide/IFA Telegram Guide.pdf',
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
</style>