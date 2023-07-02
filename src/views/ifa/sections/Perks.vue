<template>
    <div class="flex flex-wrap justify-center px-7 sm:px-20 pt-14 lg:pt-24 pb-10 lg:pb-20">
        <router-link to="/ifa/highlights" tag="div" v-for="(card, index) of cards" :key="index" 
        class="perk border-2 border-gray-3 hover:border-white w-full lg:w-[260px] overflow-auto mb-7 sm:ml-7 cursor-pointer transition-all">
            <div class="flex justify-center border-b-2 border-gray-3 py-4">
                <component :is="card.icon" />
            </div>
            <div class="flex flex-col mx-4 mb-6">
                <h1 class="font-barlow font-bold text-default text-[22px] mb-3 mt-5">
                    {{ card.title }}
                </h1>
                <p class="font-nunito text-gray-8 font-bold leading-tight text-[19px]">
                    {{ card.text }}
                </p>
            </div>
        </router-link>
    </div>
</template>
<script>
import interface_ from "../../../components/icons/perks/interface.vue";
import arrows from "../../../components/icons/perks/arrows.vue";
import clock from "../../../components/icons/perks/clock.vue";
import camera from "../../../components/icons/perks/camera.vue";
import sound from "../../../components/icons/perks/sound.vue";
import records from "../../../components/icons/perks/records.vue";

export default {
    name: 'Perks',
    data() {
        return {
            commonPath: `./assets/perks/`,
            cards: [
                {
                    icon: interface_, 
                    title: 'One Simple interface for all', 
                    text: 'A single clear, easy-to-read interface to learn for all your devices. No more individual programs for each device for you to deal with.'
                },
                { 
                    icon: arrows, 
                    title: 'Your place, your rules', 
                    text: 'Configure rules to define who or which members of your team will receive what kind of notifications and by which method.'
                },
                { 
                    icon: clock, 
                    title: 'Dashboard that talks to you', 
                    text: 'All relevant information of all your systems on a single window. The IFA dashboard displays all critical events that require your attention.'
                },
                { 
                    icon: sound,
                    title: 'Activation while disarm', 
                    text: `IFA receives in real time all panel events even if the panel is not armed. Real-time Events allow you to track sensor's activations for many purposes including investigation of incidents.`
                }, 
                { 
                    icon: records,
                    title: 'Consolidates logs records', 
                    text: `All your devices log in a single place with a friendly interface for report generation and data export. Your live just got easier.`
                },
                { 
                    icon: camera, 
                    title: 'Visual arming assistant', 
                    text: `Arm, disarm, and silence local or remote sirens from your desktop with all the control and precision you need and visual assistance.`
                },
            ]
        }
    },
}
</script>
<style scoped>
    .perk:hover ::v-deep(svg) {
        transform: rotateY(360deg);
    }   
    .perk:hover {
        box-shadow: rgba(0, 0, 0, 0.219) 0px 3px 8px !important;
        transform: scale(1.03);

    }
    .perk ::v-deep(svg path), .perk ::v-deep(svg) {
        transition: all 1200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .perk:hover ::v-deep(svg path) {
        fill: var(--yellow-3) !important;
    }
</style>