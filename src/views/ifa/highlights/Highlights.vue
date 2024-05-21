<template>
    <main class="highlights pt-12">
        <section v-for="(section, index) in sections" :key="index" 
        class="flex flex-col w-full bg-gradient-to-b font-courier py-12 px-6 lg:px-14 first:mt-1 border-b border-gray-3 even:bg-gray-1" 
        :class="[section.class]">
            <h2 class="text-[25px] font-bold leading-[0.9] mb-4" :class="section.name.class">
                {{  section.name.content }}
            </h2>
            <div class="flex max-xl:flex-col w-full">
                <cloud-img v-if="section.multi" :img="get_link(index)" 
                class="min-[1125px]:min-w-[57vw] min-[1125px]:w-[1050px] object-contain" 
                alt="" />
                <cloud-img v-else :img="get_image(section.gallery)" 
                class="lg:w-[1050px] object-contain " alt="" />
                <p v-html="section.description.content" class="text-[17px] leading-[1.7] mb-7 xl:ml-10 mt-4" :class="section.description.class"></p>
            </div>
        </section>
    </main>
</template>
<script>
import cloudImg from '../../../components/cloud-img.vue';
export default {
    name: 'Highlights',
    components: {cloudImg},
    data() {
        return {
            timeout: {
                selected_image: 0
            },
            sections: [
                {
                    name: {
                        content:'SUPERVISE AND CONTROL MULTIPLE ALARM PANELS FROM DIFFERENT BRANDS',
                        class: 'max-w-[700px]'
                    },
                    description: {
                        content:'IFA makes controlling and supervising your alarm panels a breeze because of the unified user interface regardless of the panel brand or model. Learn it once to use them all.',
                        class: 'max-w-[680px]'
                    },
                    // from-[#FFFFFF] to-[#F3BE19]
                    class: '',
                    multi: true,
                    gallery: ['v1716298874/IFA_1-1_retylf.png', 'IFA_1-2_wae9vg.png'],
                    selected_image: 0,
                },
                {
                    name: {
                        content:'INTEGRATE ONE OR MORE VMS WITH ACCESS TO RECORDED OR LIVE VIDEO STREAMS',
                        class: 'max-w-[750px]'
                    },
                    description: {
                        content:'VMS provides real-time and recorded video streams to confirm your alarm panel alarms or review previous alarms for forensic purposes. Choose from our growing list of supported NVR and VMS. <br/> <br/> Integration is so tight you can even ask for the VMS camera’s status and run reports.',
                        class: 'max-w-[800px]'
                    },
                    class: '',
                    multi: false,
                    gallery: 'v1716298877/IFA_2-1_rwltss.png',
                },
                {
                    name: {
                        content:'REALTIME VIDEO ALARM CONFIRMATION',
                        class: ''
                    },
                    description: {
                        content:'Once your alarm panel and VMS are integrated into IFA, relate alarm panel zones to VMS cameras and you are all set to have your alarm panel events and related video for instant alarm confirmation.',
                        class: 'max-w-[980px]'
                    },
                    // from-[#FFFFFF] to-[#1FB8E9]
                    class: '',
                    multi: false,
                    gallery: 'v1716298887/IFA_3-1_he9zqb.png',
                },
                {
                    name: {
                        content:'ALARM PANEL STATUS',
                        class: ''
                    },
                    description: {
                        content:'Get instantly informed about your alarm panel status by displaying the Visor dashboard. <br/> <br/ > Enabled, disabled, arming, armed, intrusion, fire, supervisory, and trouble status are represented by a visual card <br/ > with characteristic colors and sounds.',
                        class: ''
                    },
                    class: '',
                    multi: true,
                    gallery: [
                        'v1716298874/IFA_4-1_zw3csj.png','v1716298874/IFA_4-2_tgcfpl.png',
                        'v1716298873/IFA_4-3_zgfju6.png','v1716298874/IFA_4-4_dgmnht.png',
                        'v1716298875/IFA_4-5_xu8qlr.png','v1716298876/IFA_4-6_nkvlgr.png',
                        'v1716298877/IFA_4-7_tliupf.png'],
                    selected_image: 0,
                },
                {
                    name: {
                        content: 'NOTIFICATIONS WITH GRANULAR CONTROL',
                        class: ''
                    },
                    description: {
                        content: 'IFA sends notification messages thru E-Mail and/or Telegram for instant messaging. <br /> <br/> Both messages can include a photo from the related camera.  <br />Unlimited notification rules can be defined each with a different set of events to notify.',
                        class: ''
                    },
                    // from-[#FFFFFF] to-[#DDDDDD]
                    class: '',
                    multi: false,
                    gallery: 'v1716298876/IFA_5-1_smc9b1.png',
                },
                {
                    name: {
                        content:'SENSOR ACTIVITY SUPERVISION WHILE DISARM',
                        class: ''
                    },
                    description: {
                        content:'Yes, you hear it right. You can supervise sensor activation even when the panel is disarmed. These events are called RTE (Realtime events). <br /> <br /> RTE can be stored in your databases for a specific time period defined in IFA’s configuration options. Feel the pulse of your installations in real-time with live video for incident confirmation.',
                        class: 'max-w-[1180px]'
                    },
                    class: '',
                    multi: true,
                    gallery:  [
                        'v1716298877/IFA_6-1_fm1qb9.png','v1716298878/IFA_6-2_cukowv.png',
                        'v1716298878/IFA_6-3_qdw0c3.png','v1716298878/IFA_6-4_y4kii1.png',
                        'v1716298879/IFA_6-5_fohi1n.png','v1716298879/IFA_6-6_bn4tsd.png',
                        'v1716298880/IFA_6-7_u8pb31.png','v1716298879/IFA_6-8_flighv.png',
                        'v1716298880/IFA_6-9_cuc2as.png'
                    ],
                    selected_image: 0,
                },
                {
                    name: {
                        content:'CONSOLIDATED LOGS RECORDS',
                        class: ''
                    },
                    description: {
                        content:'Stop connecting to individual panels to retrieve operational logs. IFA keeps all your panel logs in a single place for simplified access. <br /> <br /> Generate reports, print or export records for external processing. Generate reports of single or multiple panels at once for all or specific types of events for cross-reference analysis.',
                        class: ''
                    },
                    // from-[#FFFFFF] to-[#610203]
                    class: '',
                    multi: true,
                    gallery: [
                        'v1716298880/IFA_7-1_lfjqrr.png','v1716298881/IFA_7-2_bzoozh.png',
                        'v1716298881/IFA_7-3_w00cvi.png','v1716298883/IFA_7-4_qzhzv4.png',
                        'v1716298882/IFA_7-5_hqmwli.png',
                    ],
                    selected_image: 0,
                },
                {
                    name: {
                        content:'VISUAL ARMING ASSISTANT',
                        class: ''
                    },
                    description: {
                        content:'No more blind remote panel operations. Have live video feedback of offending zones while arming your panel remotely without any additional steps to do on your end. <br /> <br /> This assistance works for individual areas or the entire panel.<br />  It just feels natural.',
                        class: ''
                    },
                    class: '',
                    multi: false,
                    gallery: 'v1716298885/IFA_8-1_g2gkpk.png',
                },
            ],
        }
    },
    methods: {
        get_image(name) {
            return name;
        },
        get_array({ length, section }){
            return [...Array(length).keys()].map((el, index) => `IFA (${section}-${(index + 1)})`);
        },
        get_link(index) {
            const gallery_index = this.sections[index].selected_image;
            return this.get_image(this.sections[index].gallery[gallery_index]);
        },
        pass_image() {
            this.sections.forEach((section, index) => {
                let updated_index = section.selected_image + 1;
                if (updated_index > section.gallery.length - 1) updated_index = 0;
                this.sections[index].selected_image = updated_index;
            });
        }
    },
    created(){
        window.scrollTo(0,0)
    },  	
    mounted() {
        this.timeout.selected_image = setInterval(() => {
            this.pass_image();
        }, 4500);
    },
    beforeDestroy() {
        clearInterval(this.timeout.selected_image)
    },
}
</script>
<style scoped></style>