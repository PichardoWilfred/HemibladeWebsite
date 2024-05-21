<template>
    <section class="bg-[#f1f1f1]">
        <div class="mb-20 flex flex-col lg:flex-row max-lg:items-center justify-center pt-24 max-lg:space-y-12" id="title-section">
            <cloud-img img="v1716168029/IFA-logo_bttcs1.png" class="w-[265px] h-[137px] lg:ml-[90px]" alt="IFA" />
            <div class="flex flex-col max-lg:items-start max-lg:text-justify text-gray-8 font-consolas px-6 lg:pl-12 lg:w-[680px]">
                <h2 class="max-lg:text-start max-lg:mb-2 text-10 font-bold text-[22px] lgtext-[27px] leading-none">HEMIBLADE</h2>
                <span v-if="show.title" class="flex flex-col md:flex-row font-semibold text-[22px] lg:text-[42px] max-lg:leading-[1.2] max-lg:mb-5">
                    <span class="me-4">[<h1 class="inline-flex">IFA</h1>]</span> INTRUSION FIRE AGENT
                </span>
                <p v-show="show.description" class="description text-xl max-w-[630px] leading-[1.45rem] transition-all">
                    The best product for integrating your alarm panel and VMS
                    for INSTANT video confirmation of alarms.
                </p>
            </div>
        </div>
        <div class="lg:hidden min-h-[292px]">
            <transition name="fade-delayed" mode="out-in">
                <div class="mobile-image-description lg:hidden min-h-[282px] min-w-[372px] px-6 mb-10" :key="selected_image">
                    <h3 class="font-consolas font-bold text-2xl mb-2"> {{ info[selected_image].title }} </h3>
                    <p class="font-courier font-medium text-gray-8 text-[1.3rem] leading-[30px] tracking-[-1px] z-20"> {{ info[selected_image].description }}</p>
                </div>
            </transition>
        </div>

        <div class="relative unselectable max-lg:min-h-[200px] flex items-center justify-between sm:px-10 z-[1] pb-20">
            <div class="arrow arrow-left">
                <arrow-square v-bind="arrow('left')" @click="select_image('previous')"/>
            </div>

            <div class="gallery-container flex flex-col items-center max-lg:justify-between justify-center min-h-[210px] lg:min-w-[75vw] lg:min-h-[70vh]">
                <div v-bind="mouse_interaction"
                class="lg:min-h-[70vh]"
                @mouseenter.self.passive="() => { focus_gallery(true) }" 
                @mouseover.self.passive="() => { focus_gallery(true) }" 
                @mouseleave.self.passive="() => { focus_gallery(false) }"> <!-- Gallery -->
                    <transition name="fade" mode="out-in">
                        <cloud-img 
                        class="relative z-20 object-contain max-h-[82vh] lg:min-h-[774px]"
                        :img="images[selected_image].src"
                        :key="selected_image"
                        :class="[show_description ? 'show': 'hide']" />
                    </transition>
                    <transition name="fade" mode="out-in">
                        <div 
                        class="hint max-lg:hidden h-[32px]"
                        :style="hint_styles"
                        :key="show_description">
                            <h3 v-if="!show_description" 
                            class="max-lg:hidden scale-[0.8] translate-y-[-15px] absolute z-40 font-consolas font-bold text-gray-8 text-[12px] mb-2 ml-4"> 
                                TO PAUSE THE GALLERY CYCLE PLACE THE MOUSE OVER ANY OF THE IMAGES
                            </h3>
                            <h3 v-if="!show_description" class="max-lg:hidden font-consolas font-bold text-gray-8 text-center text-2xl mb-2"> 
                                {{ info[selected_image].title }} 
                            </h3>
                        </div>
                    </transition>
                    <transition name="fade-delayed" mode="out-in">
                        <div v-show="show_description" 
                        :style="desktop_image_description"
                        class="desktop-image-description max-lg:hidden top-[50%] lg:absolute w-[35%] min-w-[400px] right-0">
                            <h3 class="font-consolas font-bold text-2xl mb-2"> {{ info[selected_image].title }} </h3>
                            <p class="font-courier font-medium text-gray-8 text-[1.3rem] leading-[30px] tracking-[-1px] z-20"> {{ info[selected_image].description }}</p>
                        </div>
                    </transition>
                </div>
                <div class="flex items-center mt-2 lg:mt-4"> <!-- Bullets list-->
                    <div class="bullet" v-for="(_, index) in images" :key="index" @click="select_image(index)" :class="{ active: selected_image === index }"></div>
                </div>
            </div>

            <div class="arrow arrow-right">
                <arrow-square v-bind="arrow('right')" @click="select_image('next')"/>
            </div>
        </div>
    </section>
</template>
<script >
import CloudImg from '../../../components/cloud-img.vue';
import ArrowSquare from '../../../components/svg/arrow-square.vue';

export default {
    name: "Gallery",
    components: { ArrowSquare,CloudImg },
    data() {
        return {            
            show: {
                title: false,
                description: false
            },
            focused_gallery: true,
            selected_image: 0,
            images: [
                {
                    src: 'v1716168175/IFA_Carrusel.001_qh50c4.png',
                    show: true
                },
                {
                    src: 'v1716168177/IFA_Carrusel.002_yresgi.png',
                    show: false
                },
                {
                    src: 'v1716168177/IFA_Carrusel.003_aunlqw.png',
                    show: false
                },
                {
                    src: 'v1716168178/IFA_Carrusel.004_dez0vj.png',
                    show: false
                },
                {
                    src: 'v1716168180/IFA_Carrusel.005_jkydjh.png',
                    show: false
                },
                {
                    src: 'v1716168181/IFA_Carrusel.006_hbpauh.png',
                    show: false
                },
                {
                    src: 'v1716168182/IFA_Carrusel.007_rtbdie.png',
                    show: false
                },
                {
                    src: 'v1716168184/IFA_Carrusel.008_zp3mz8.png',
                    show: false
                },
                {
                    src: 'v1716168185/IFA_Carrusel.009_iizg8k.png',
                    show: false
                },
                {
                    src: 'v1716168186/IFA_Carrusel.010_tj3rhy.png',
                    show: false
                },
                {
                    src: 'v1716168188/IFA_Carrusel.011_jx7q9i.png',
                    show: false
                },
                {
                    src: 'v1716168190/IFA_Carrusel.012_adqmo8.png',
                    show: false
                },
                {
                    src: 'v1716168190/IFA_Carrusel.013_uyhbiv.png',
                    show: false
                },
                {
                    src: 'v1716168191/IFA_Carrusel.014_midygz.png',
                    show: false
                },
                {
                    src: 'v1716168193/IFA_Carrusel.015_jr2nlz.png',
                    show: false
                },
            ],
            flexible: {
                distance: 1,
                scale: 1
            },
            desktop_image_description: {
                transform: `translateY(-50%)`,
            },
            info: [
                {
                    title: 'SYSTEM\'S HEALTH DASHBOARD',
                    description: 'The one-stop to get your installation performance data. Most active panels, critical events, events count and analysis, and live incoming messages from alarm panels.'
                },
                {
                    title: 'VISOR DASHBOARD FOR REAL TIME SUPERVISION',
                    description: 'Get panel and arming status. Zones activation and alarms counter. Live and recorded video from related events and a whole lot more we won’t cover here. Virtual presence at its best.'
                },
                {
                    title: 'NETWORK MESSAGES LISTENER',
                    description: 'All received messages from all panels at the same time in the same place. Sound like a lot? Maybe it is but is AWESOME!'
                },
                {
                    title: 'MILESTONE VMS INTEGRATION',
                    description: 'Milestone VMS configuration data, servers, and camera info in a single window. Instant camera preview for integration confirmation.'
                },
                {
                    title: 'HANWHA WAVE VMS INTEGRATION',
                    description: 'Milestone VMS configuration data, servers, and camera info in a single window. Instant camera preview for integration confirmation.'
                },
                {
                    title: 'NETWORK OPTIX NX WITNESS VMS INTEGRATION',
                    description: 'Milestone VMS configuration data, servers, and camera info in a single window. Instant camera preview for integration confirmation.'
                },
                {
                    title: 'VMS CAMERA INTEGRATION PREVIEW',
                    description: 'See the live camera video stream preview for your integrated VMS with details of the camera model and status.'
                },
                {
                    title: 'DMP XR SERIES PANEL INTEGRATION',
                    description: 'DMP XR Series alarm panel configuration. Once connected IFA receives the panel config which is displayed on the sidebar.'
                },
                {
                    title: 'DSC NEO PANEL INTEGRATION',
                    description: 'DSC Neo alarm panel configuration. Once connected IFA receives the panel config which is displayed on the sidebar.'
                },
                {
                    title: 'VMS INTEGRATION RULES ENGINE',
                    description: 'Create rules to define what messages and when they will be sent to your selected VMS.'
                },
                {
                    title: 'MEDIA BROWSER FOR DOWNLOADED VIDEOS',
                    description: 'Manually downloaded and automatic alarm downloaded videos are stored on the IFA server. Use the built-in browser to see and download all your media on demand.'
                },
                {
                    title: 'INCIDENTS HISTORY RESEARCH',
                    description: 'IFA takes records of all events and related videos so you don’t have to. Forensic research is truly a walk in the park.'
                },
                {
                    title: 'RECIPIENTS CONFIGURATION OPTION',
                    description: 'Various options for you to adjust IFA’s performance to your specific needs.'
                },
                {
                    title: 'SYSTEM CONFIGURATION OPTIONS',
                    description: 'Options galore for systems supervision. We went the extra mile offering configuration options to wow your experience. Enjoy!'
                },
                {
                    title: 'CARD DEFAULTS',
                    description: 'Eye candy anyone? Yummy!'
                },
            ],
            mouse_interaction: {
                class: 'image-gallery',
                id: 'image-gallery',
            },
            timeout: {
                presentation: 0,
                autoplay: 0,
                resize: 0
            },
            first_time: true,
            flip_duration: {
                first: 2500,
                rest: 1500
            },
            observer: null,
            title_observer: null,
        };
    },
    methods: {
        getImage(name) {
            return `/img/ifa/carousel/${name}.png`;
        },
        arrow(direction) {
            const class_ = direction;
            return { height: this.onMobile ? '30px':'50px', width: this.onMobile ? '30px':'50px', class: class_ , stroke_width: '0.1'}
        },
        select_image(instruction) {
            const type = typeof instruction;
            const actions = {
                string: () => { //when we specify a direction for the
                    let direction = instruction === 'previous' ? -1: 1;
                    let selected_image = this.selected_image + direction;

                    if (this.selected_image === 0 && instruction === 'previous') { //when we reach the first one and plan on going firther backwards we will jump to the last one.
                        selected_image = this.images.length - 1;
                    }
                    if (this.selected_image === (this.images.length - 1) && instruction === 'next') { //when we reach the last one and plan on going firther we will jump into the first one.
                        selected_image = 0;
                    }
                    this.selected_image = selected_image;
                },
                number: () => {
                    this.selected_image = instruction;
                }
            }
            actions[type]();
        },
        onElementObserved(entries) {
            entries.forEach(({ target, isIntersecting, intersectionRatio}) => {
                if (!isIntersecting || this.selected_image !== 0) return;
                this.enable_show(0, 'first', true);
            });
        },
        onTitleObserved(entries) {
            entries.forEach(({ target, isIntersecting, intersectionRatio}) => {
                if (isIntersecting) {
                    this.show.title = true;
                    setTimeout(() => {
                        this.show.description = true;
                    }, 500)
                }
            });
        },
        enable_show(img = this.selected_image, duration, isFirst = false) {
            if (isFirst && this.first_time) {

                this.timeout.first_image = setTimeout(() => {
                    this.images[0].show = false;
                    this.focused_gallery = false;
                    this.first_time = false
                }, 4500);
                
                this.timeout.first_image = setTimeout(() => {
                    this.images[0].show = true;
                }, 4000);

            }else {
                this.images[img].show = true;  // first one on watcher
            }
        },
        focus_gallery(value) {
            this.focused_gallery = value;
        },
    },
    computed: {
        show_description() {
            return this.images[this.selected_image].show && this.focused_gallery;
        },
        hint_styles(){
            const xl = window.matchMedia("(max-width: 1649px)").matches;
            return {
                transform: `translateY(${xl ? -20 : -40}px)`
            }
        },
        onMobile() {
            return window.matchMedia("(max-width: 576px)").matches;
        }
    },
    watch: {
        selected_image: {
            handler(new_value, old_value) {
                const isFirst = new_value === 0;
                this.enable_show(new_value, isFirst ? 'first':'rest', isFirst);
            }
        },
        focused_gallery(new_) {
            clearInterval(this.timeout.autoplay);
            this.timeout.autoplay = setInterval(() => {
                if (!new_ && !this.first_time && !this.onMobile) this.select_image('next');
            }, 4500)
        }
    },
    mounted() {
        this.title_observer = new IntersectionObserver(this.onTitleObserved, { threshold: 0.75 });
        this.observer = new IntersectionObserver(this.onElementObserved, { threshold: 0.75 });
        const showcase = document.querySelector('#image-gallery');
        const title_section = document.querySelector('#title-section')
        this.observer.observe(showcase);
        this.title_observer.observe(title_section);
        this.timeout.resize = window.addEventListener("resize", () => {
            const apply = window.matchMedia("(min-width: 1030px) and (max-width: 1150px)").matches
            if (!apply) return;

            let scale = ((window.innerWidth - 1000) * 0.01) > 1 ? 0.9: ((window.innerWidth - 1000) * 0.01);
            let translateY = -50;
            this.desktop_image_description = {transform: `translateY(${translateY}%) scale(${scale})`}
        })
    },
    beforeDestroy() {
        clearTimeout(this.timeout.presentation);
        clearTimeout(this.timeout.first_image);
        clearInterval(this.timeout.autoplay);
        document.removeEventListener(this.timeout.resize)
        this.observer.disconnect();
        this.title_observer.disconnect();
    },
}
</script>
<style scoped>
    .image-gallery {
        perspective: 2000px;
        transform-style: preserve-3d;
        @apply relative items-center h-full;
    }
    .image-gallery img {
        transition: all .35s cubic-bezier(0.4, 0, 0.2, 1);
    }
    @media (min-width: 1025px) {
        .image-gallery img.show {
            transform-origin: 0% 50%;
            transform: rotateY(52deg) scale(1.1);
        }
    }

    .fade-delayed-enter-active, .fade-delayed-leave-active {
        transition: all .15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .fade-delayed-enter-active {
        transition-delay: 150ms;
    }
    .fade-delayed-enter-from, .fade-delayed-leave-to {
        opacity: 0;
    }
    .bullet {
        @apply cursor-pointer rounded-full border border-yellow-3 w-[10px] h-[10px] space-x-2 mr-2 last:mr-0 transition-all;
    }
    .bullet.active {
        @apply bg-yellow-3;
    }
    .arrow {
        @apply relative z-10 cursor-pointer flex items-center;
    }
    .arrow:hover ::v-deep(svg rect) {
        fill: var(--gray-5);
        stroke: var(--gray-5);
    }
    .arrow ::v-deep(svg rect) {
        @apply transition-all;
        fill: var(--gray-3);
        stroke: var(--gray-3);
    }

    .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>