
<template>
    <!-- desktop -->
    <header ref="navbar" class="fixed top-0 bg-white w-full font-consolas font-light border-b border-gray-3 z-50">
        <transition name="grow" mode="out-in" appear>
            <div v-show="!scrolled && website.section === 'ifa'" class="relative h-6 bg-yellow-3 w-full border-b border-gray-5 z-[60]" />
        </transition>
        
        <div class="flex items-center w-full px-4 lg:px-10  transition-all" :class="scrolled ? 'py-2':'py-4'">
            <a @click="goHome">
                <h3 v-if="scrolled" class="cursor-pointer lg:my-2 font-consolas font-bold uppercase text-gray-8 text-xl lg:text-3xl transition-all">
                    Hemiblade software
                </h3>
                <img v-else alt="Hemiblade logo" class="cursor-pointer logo transition-all w-[100px] lg:w-[150px]" src="/img/nav-logo.png" />
            </a>
            <nav class="hidden lg:block my-1 ms-auto text-lg transition-all h-full">
                <a v-for="({ label, address, type }) in website.routes" :key="address" @click.prevent="scroll(address, type)"
                :class="website.section === 'ifa' ? 'yellow':'blue'"
                class="link relative cursor-pointer hover:font-bold mr-8 last:mr-0">
                    {{ label }} 
                </a>
            </nav>
            <!-- mobile menu button-->
            <button v-if="website.section !== 'none'" class="mobile-menu lg:hidden relative ms-auto" @click="toggle_mobile_menu()">
                <img :src="menu_svg" alt="menu" class="w-[32px]"/>
            </button>
        </div>
    </header>
    <!-- mobile -->
    <transition name="fade">
        <div v-if="show_mobile_menu" class="absolute h-screen w-screen top-0 left-0">
            <div class="fixed bg-[#09090954] h-full top-0 left-0 w-full z-40" @click="toggle_mobile_menu()" /> <!-- mask-->
            <nav class="mobile fixed h-full bg-white right-0 z-50 flex flex-col font-consolas border-t border-gray-3">
                <a v-for="({ label, address, type }) in website.routes" :key="address" @click.prevent="debounceToggle(address, type)" 
                :class="website.section === 'ifa' ? 'yellow':'blue'" class="link relative w-full px-6 py-2 cursor-pointer hover:font-bold mr-8 border-b border-gray-3">
                    {{ label }}
                </a>
            </nav>
        </div>
    </transition>



</template>
<style scoped>
    button.mobile-menu::after { /* circular shadow when clicked */
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        border-radius: 100vmax;
        width: 100%;
        height: 100%;
        transform: scale(1.45);
        transition: all 80ms ease-in-out;
    }
    button.mobile-menu:is(:active, :hover)::after {
        background-color: #09090917;
    }
    a.link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0%;
        height: 2px;
        transition: all 0.15s ease-in-out;
    }
    
    a.link.blue::after { background-color: var(--blue-3); }
    a.link.yellow::after { background-color: var(--yellow-3); }
    @media (max-width: 1024px) {
        a.link::after { bottom: -2px;}
    }
    a.link:hover::after {
        width: 100%;
    }
    .grow-enter-from, .grow-leave-to {
        max-height: 0;
    }
    .grow-enter-to, .grow-leave-from {
        max-height: 30px;
    }
    .grow-enter-active, .grow-leave-active {
        transition-duration: .1s;
    }

</style>

<script setup>
import menu_svg from '/img/mobile-menu.svg';
import { useRouter, useRoute } from 'vue-router';
import { ref, inject, onMounted, onBeforeUnmount, reactive, nextTick, watch } from 'vue';

// mobile menu
const show_mobile_menu = ref(false);
const navbar = ref(null);
let navbar_height = ref(null);

const router = useRouter();
const route = useRoute();

const smoothScroll = inject('smoothScroll');
// to set the distance between the p[ortrait and the top of the page
const emit = defineEmits(['setHeight']);

const section_adresses = {
    home: [
        { address: '#home', label: 'Home' }, 
        { address: '#products', label: 'Products' },
        { address: '#media', label: 'Media' },
        { address: '#about', label: 'About' },
        { address: '#contact', label: 'Contact' },
        
        { address: '/privacy-policy', label: 'Privacy Policy', type: 'page' },
    ],
    ifa: [
        { address:'#home', label: 'Home' },
        { address:'#gallery', label: 'Gallery' },
        { address:'#highlight', label: 'Highlights' },
        { address:'#comparison', label: 'Integrations' },
        { address: '#buy', label: 'Buy' },
        { address:'#downloads', label: 'Download' },
        { address:'#contact', label: 'Contact' },
    ],
    none: [
        { address: '', label: '' }
    ]
}

let website = reactive({
    routes: section_adresses['home'],
    section: 'home'
});
watch(
    () => route.path,
    async () => {
        let website_section;

        if (['/'].includes(route.path)) {
            website_section = 'home';
        }else if (['/ifa/highlights','/ifa'].includes(route.path)) {
            website_section = 'ifa';
        }else {
            website_section = 'none';
        }
        website.routes = section_adresses[website_section];
        website.section = website_section;
    },
);

const toggle_mobile_menu = async () => {
    show_mobile_menu.value = !show_mobile_menu.value;
    document.body.style.overflow = show_mobile_menu.value ? 'hidden': 'scroll'; // disable the scrolling of the whole body when the mobile menu is opened
    await nextTick(() => {
        const nav = document.querySelector('nav.mobile');
        navbar_height.value = navbar.value.clientHeight;
        nav.style.top = navbar_height.value+'px';
    })
}

const scroll = async (address, type = 'scroll') => {
    if (type === 'page') {
        await router.push(address);
        return;
    }
    if (route.path === '/ifa/highlights') {
        await router.push('/ifa')
    }
    // else if ( window.matchMedia('(max-width: 1025px)').matches ){ }
    const scrollTo = document.querySelector(address);
    smoothScroll({ scrollTo, offset: navbar_height.value * -1 });
}
const goHome = async () => {
    if (website.section !== 'home') await router.push('/');
    const scrollTo = document.querySelector('#home');
    smoothScroll({ scrollTo, offset: navbar_height.value * -1 });
}

const debounceToggle = (address, type) => {
    listener.nav = setTimeout(() => {
        scroll(address, type);
        toggle_mobile_menu();
    }, 400) 
}

//timeouts
const listener = { scroll: 0, nav: 0 }

//scroll logic
const getScrollPercentage = (el) => {
    var p = el.parentNode;
    return (el.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;
};
let scrolled = ref( getScrollPercentage(document.body) > 3.5);

onMounted(() => {
    navbar_height.value = navbar.value.clientHeight; //for getting the accurate offset of the scroll
    listener.scroll = document.addEventListener("scroll", () => {
        navbar_height.value = navbar.value.clientHeight;
        scrolled.value = getScrollPercentage(document.body) > 3.5;
        // console.log("scroll...");
        // console.log(navbar_height.value);
        
        // emit('setHeight', (navbar.value.clientHeight) + 'px');
    });
    // console.log(navbar.value.clientHeight);
    emit('setHeight', (navbar.value.clientHeight) + 'px');
});

onBeforeUnmount(() => {
    removeEventListener(listener.scroll);
    clearTimeout(listener.nav);
});

</script>

