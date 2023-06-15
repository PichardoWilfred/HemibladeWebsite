<template>
    <div class="flex flex-col pt-6 pb-16 border-b border-b-gray-3 min-h-[530px]">
        <h2 class="font-consolas text-gray-7 text-base mx-auto mb-14">SUPPORTED MANUFACTURES</h2>
        <section class="flex justify-center max-lg:flex-wrap px-8 lg:px-10 ">
            <img :src="manufactures.img" :alt="manufactures.alt" 
            :class="manufactures.class_" 
            class="object-contain max-lg:mb-10 lg:ml-[6.1vw] lg:mr-[8vw]">
            <p v-html="manufactures.text" class="font-consolas text-lg max-w-[1080px]"></p>
        </section>
        <div class="flex justify-between">
            <button @click.prevent="move('backward')" class="rounded bg-yellow-3 w-max px-8 py-2 text-white font-bold">
                Backward
            </button>
            <button @click.prevent="move('forward')" class="rounded bg-blue-3 w-max px-8 py-2 text-white font-bold">
                Forward
            </button>
        </div>
    </div>
</template>
<script setup>
    import DMP from '/img/supported_manufactures/DMP.png'
    import NX from '/img/supported_manufactures/NX.png';
    import DSC from '/img/supported_manufactures/DSC.png'

    import { ref, reactive, computed, watch } from 'vue';
    
    // const current = ref(0);
    const index = reactive({
        last: 2,
        current: 0,
        next: 1
    }) 
    let last_current = 'initial';
    // watch(current, (curr, last) => {
    //     last_current = ref(last);
    // })
    const move = (direction) => {
        const directions = {
            forward: () => {
                index.current = (index.current) >= (supported_manufactures.length - 1) ? 0 : (index.current + 1)
            },
            backward: () => {
                index.current = (index.current - 1) < 0 ? (supported_manufactures.length - 1) : (index.current - 1);
            }
        }
        directions[direction]();
    }
    const supported_manufactures = reactive([
            {
                text: 'DMP is a family-owned independent manufacturer of intrusion, fire, access control and cellular alarm solutions. <br /><br /> DMP products are designed, engineered and manufactured in America with U.S. <br /> and global components. Our factory, call center, engineering and distribution are all located in Springfield, Missouri, right where the business began more  than 45 years ago.<br /><br /> <a href="https://www.dmp.com/" class="underline">https://www.dmp.com/</a>',
                img: DMP,
                class_: 'max-w-[320px]',
                alt: 'DMP'
            },
            {
                text: 'Network Optix began as an idea born of necessity – there simply had to be a better way to discover, view, and manage IP cameras. <br/ ><br/ > Nx Witness VMS is a lightning fast, easy to use, cross-platform IP video management system (VMS) / video surveillance software designed to discover, view, record, and manage IP video cameras so you can monitor, analyze and react to critical events in real time. <br/ ><br/ > <a href="https://www.networkoptix.com/" class="underline">https://www.networkoptix.com/</a>',
                img: NX,
                class_: 'max-w-[320px]',
                alt: 'Network Optix'
            },
            {
                text: 'DSC (Digital Security Controls) is a world leader in electronic security. <br/ ><br/ >Since the company’s genesis, the experts at DSC have been leading the way. From our revolutionary control panels, to our industry-leading IP alarm monitoring products and now to our sleek, contemporary self-contained wireless panels, DSC has always been front and center in the security space. <br/ ><br/ > <a href="https://www.dsc.com/" class="underline">https://www.dsc.com/</a>',
                img: DSC,
                class_: 'max-w-[320px]',
                alt: 'DMP'
            },
    ]);
    const manufactures = computed(() => supported_manufactures[index.current])
    // const last_manufactures = computed(() => supported_manufactures[last_current])
    
</script>