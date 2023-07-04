<template>
    <section class="flex flex-col lg:flex-row py-[3.5rem] max-lg:p-6 max-lg:pt-16 lg:px-20 border-y border-gray-3 bg-[#f1f1f1]">
        <img src="/img/ifa/IFA-logo.png" class="w-[215px] h-[100px] max-lg:mb-8 xl:ml-32 lg:mr-8 max-lg:mx-auto">
        <div class="flex flex-col xl:ml-20 grow">
            <div class="flex max-lg:flex-col items-start justify-between">
                <div class="flex flex-col mr-3">
                    <h1 class="font-consolas font-bold text-xl lg:text-4xl text-gray-2 max-lg:mb-2 mb-4">
                        IFA MAIN HIGHLIGHTS
                    </h1>
                    <ul>
                        <li v-for="(text, index) in highlights" :key="index" class="font-regular before:mr-2 before:content-['-'] 
                        flex flex-shrink-0 text-[15px] lg:text-lg mb-3 lg:mb-1 text-white">
                            {{ text }}
                        </li>
                    </ul>
                </div>
                <router-link 
                to="/ifa/highlights" 
                class="learn-more-btn group flex flex-shrink-0 items-center justify-center uppercase font-bold font-consolas hover:text-default text-gray-8 bg-gray-3 hover:bg-yellow-3 active:bg-yellow-3 mt-8 lg:mt-14 px-4 py-4 lg:py-1 w-full lg:w-max transition-all">
                    <span class="flex break-normal text-lg font-medium">Learn more</span>
                    <arrow_square class="group-hover:translate-x-2 flex-shrink-0 ml-2 transition-all" :width="12" />
                </router-link>
            </div>
        </div>
    </section>
</template>
<script>
import arrow_square from '../../../components/svg/arrow-square.vue';
export default {
    name: 'Features',
    components: { arrow_square },
    data() {
        return {
            highlights: [
                'Supervises devices over a network.',
                'Push alarm panel events to VMS as alarms or bookmarks.',
                'Save alarm-related video to the IFA Server.',
                'Display panel alarms and behavior on an easy-to-read dashboard',
                'Log all alarms and sensor activation events with access to recorded VMS video.',
                'Generate many reports about panel status and events.',
                'Multiple reports about VMS and camera status.',
                'Automate problem report generation.',
                'Control panel arm-disarm with visual assistance.',
                'Use sensor activation for investigation.',
                'Create Incident report creation with hash ID.',
                'File browser for saved video files and images.',
                'Consolidated events for cross-panel reporting.',
                'Much more!'
            ]
        }
    },
}
</script>
<style scoped>
section {
    background-image: url('/img/ifa/highlights/section-bg.png');
}
</style>