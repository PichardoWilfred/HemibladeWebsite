<template>
    <div class="relative flex flex-col pt-6 pb-16 border-b border-b-gray-2 min-h-[280px]">
        <h2 class="font-consolas text-gray-4 text-base mx-auto">SUPPORTED MANUFACTURES</h2>
        <section class="bg-white flex relative overflow-hidden justify-center max-lg:flex-wrap h-[800px] lg:h-[380px] xl:h-[320px]">

            <div class="flex relative flex-wrap justify-center bg-white px-8 lg:px-10" :style="physical_slide">
                <img :src="slide.current.img" :alt="slide.current.alt" 
                :class="slide.current.class_" 
                class="manufactures">
                <p v-html="slide.current.text" class="description-text"></p>
            </div>

            <div class="absolute flex bg-white w-[300%] h-full px-8 lg:px-10 " :style="visual_slide">
                <div v-for="{class_, text, alt, img} in slide" class="flex flex-wrap justify-center h-full w-full">
                    <img :src="img" :alt="alt" class="manufactures">
                    <p v-html="text" class="description-text"></p>
                </div>
            </div>
        </section>
        <!-- debuggin purposes -->
        <div class="flex justify-between" v-show="showTest">
            <button @click.prevent="move('backward')" class="rounded bg-yellow-3 w-max px-8 py-2 text-white font-bold">
                Backward
            </button>
            <button @click.prevent="move('forward')" class="rounded bg-blue-3 w-max px-8 py-2 text-white font-bold">
                Forward
            </button>
        </div>
        <button @click="() => {showTest = !showTest}"
        class="absolute flex items-center justify-center top-0 left-0 w-[40px] h-[40px] rounded-full text-white bg-yellow-3 p-4">O</button>

    </div>

</template>
<script setup>
    import DMP from '/img/supported_manufactures/DMP.png'
    import NX from '/img/supported_manufactures/NX.png';
    import DSC from '/img/supported_manufactures/DSC.png'
    import DW from '/img/supported_manufactures/DW.png'
    import Milestone from '/img/supported_manufactures/Milestone.png'
    import Hanwha from '/img/supported_manufactures/Hanwha.png'
    import Dahua from '/img/supported_manufactures/Dahua.png'
    import Hikvision from '/img/supported_manufactures/Hikvision.png'
    import Suprema from '/img/supported_manufactures/SUPREMA.png'

    import { reactive, computed, onBeforeUnmount, ref } from 'vue';
    const showTest = ref(false);
    
    const slide_timeout = 0;
    const slide_duration = 1200;
    const index = reactive({
        last: 0,
        current: 1,
        next: 2
    })
    const physical_slide = reactive({
        'z-index': 2
    })
    const visual_slide = reactive({
        // opacity: '0.5',
        transition: `transform ${slide_duration}ms cubic-bezier(0.075, 0.82, 0.165, 1)`, //cubic-bezier(0.075, 0.82, 0.165, 1)
        transform: '',
        'z-index': 1
    });

    const move = (direction) => {
        const total = supported_manufactures.length - 1;
        const set_index = {
            forward: () => {
                index.current = index.current >= total ? 0 : (index.current + 1);
            },
            backward: () => {
                index.current = (index.current - 1) < 0 ? total : (index.current - 1);
            }
        }
        const slide_to = {
            forward: () => {
                visual_slide.transform = 'translateX(-32.85%)';
            },
            backward: () => {
                visual_slide.transform = 'translateX(32.85%)';
            }
        }
        physical_slide['z-index'] = 1
        visual_slide['z-index'] = 2;

        slide_to[direction]();
        slide_timeout = setTimeout(() => {

            physical_slide['z-index'] = 2;
            visual_slide['z-index'] = 1;

            visual_slide.transform = '';
            set_index[direction]();
            index.next = index.current === total ? 0 : (index.current + 1);
            index.last = index.current === 0 ? total : (index.current - 1);
        }, slide_duration)
    }
    
    onBeforeUnmount(() => {
        clearTimeout(slide_timeout);
        clearInterval(slide_interval)
    })

    const supported_manufactures = reactive([
            {
                text: 'DMP is a family-owned independent manufacturer of intrusion, fire, access control and cellular alarm solutions. <br /><br /> DMP products are designed, engineered and manufactured in America with U.S. <br /> and global components. Our factory, call center, engineering and distribution are all located in Springfield, Missouri, right where the business began more  than 45 years ago.<br /><br /> <a target="_blank" href="https://www.dmp.com/" class="underline">https://www.dmp.com/</a>',
                img: DMP,
                class_: '',
                alt: 'DMP'
            },
            {
                text: 'DSC (Digital Security Controls) is a world leader in electronic security. <br/ ><br />Since the company’s genesis, the experts at DSC have been leading the way. From our revolutionary control panels, to our industry-leading IP alarm monitoring products and now to our sleek, contemporary self-contained wireless panels, DSC has always been front and center in the security space. <br/ ><br/ > <a target="_blank" href="https://www.dsc.com/" class="underline">https://www.dsc.com/</a>',
                img: DSC,
                class_: '',
                alt: 'DSC'
            },
            {
                text: 'Milestone Systems is a leading provider of open-platform video management software. <br/ ><br /> Based on an open platform, our video management software enables integration with the industry’s widest choice of cameras and best-in-class business solutions. <br/ ><br/ > <a target="_blank" href="https://www.milestonesys.com/" class="underline">https://www.milestonesys.com/</a>',
                img: Milestone,
                class_: 'w-[100px]',
                alt: 'Milestone'
            },
            {
                text: 'Network Optix began as an idea born of necessity – there simply had to be a better way to discover, view, and manage IP cameras. <br/ ><br /> Nx Witness VMS is a lightning fast, easy to use, cross-platform IP video management system (VMS) / video surveillance software designed to discover, view, record, and manage IP video cameras so you can monitor, analyze and react to critical events in real time. <br/ ><br/ > <a target="_blank" href="https://www.networkoptix.com/" class="underline">https://www.networkoptix.com/</a>',
                img: NX,
                class_: '',
                alt: 'Network Optix'
            },
            {
                text: 'Digital Watchdog® (DW®) empowers our customers as the industry-leading single source of value-driven complete solutions for all video surveillance applications (HD over Coax® / hybrid / IP enterprise), focusing on ease of use and ROI. <br/ ><br /> DW® products offer technologically-advanced features including multi-sensor HD cameras at real-time 30fps, Star-Light™ super low light technology, WDR, Smart DNR™ and Smart IR™. <br/ ><br/ > <a target="_blank" href="https://digital-watchdog.com/" class="underline">https://digital-watchdog.com/</a>',
                img: DW,
                class_: '',
                alt: 'DW'
            },
            {
                text: 'Hanwha Vision has taken its 30 years of technological prowess to build a renowned global security company. <br/ ><br /> Established in 1977, Hanwha Vision’s advanced optical design, manufacturing, and image-processing technology have made it a global leader in video surveillance. <br/ ><br/ > <a target="_blank" href="https://www.hanwhavision.com/en/" class="underline">https://www.hanwhavision.com/en/</a>',
                img: Hanwha,
                class_: '',
                alt: 'Hanwha Vision'
            },
            {
                text: 'Dahua Technology Co Ltd (Dahua) is a supplier of monitoring products. <br/ ><br /> It offers security products including access control, advanced video surveillance systems and remote image monitoring products. The company`s products portfolio includes cameras, storage products, transfer products, display and control, and intelligent building products and among others. <br/ ><br/ > <a target="_blank" href="https://us.dahuasecurity.com/" class="underline">https://us.dahuasecurity.com/</a>',
                img: Dahua,
                class_: '',
                alt: 'Dahua'
            },
            {
                text: 'Hikvision is committed to serving various industries through its cutting-edge technologies of machine perception, artificial intelligence, and big data, leading the future of AIoT. <br/ ><br /> Hikvision provides a broad range of physical security products, covering video security, access control, and alarm systems. intelligence. <br/ ><br/ > <a target="_blank" href="https://www.hikvision.com/en/" class="underline">https://www.hikvision.com/en/</a>',
                img: Hikvision,
                class_: '',
                alt: 'Hikvision'
            },
            {
                text: 'Suprema is a leading global provider of access control, time & attendance and biometrics solutions. <br/ ><br /> Suprema is named the world’s top 50 security manufacturers and has a worldwide sales network in over 140 countries with no.1 market share in biometric access control in EMEA region. <br/ ><br/ > <a target="_blank" href="https://supremainc.com/" class="underline">https://supremainc.com/</a>',
                img: Suprema,
                class_: '',
                alt: 'Suprema'
            },
    ]);

    const slide = reactive({
        last: computed(() => supported_manufactures[index.last]),
        current: computed(() => supported_manufactures[index.current]),
        next: computed(() => supported_manufactures[index.next])
    })

</script>

<style scoped>
img.manufactures {
    @apply object-contain w-[300px] lg:w-[380px] max-lg:mb-10 lg:ml-[6.1vw] lg:mr-[8vw];
}
p.description-text {
    @apply flex flex-col justify-center font-consolas text-lg max-w-[880px];
}
</style>