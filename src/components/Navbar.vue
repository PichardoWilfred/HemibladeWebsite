
<template>
    <!-- desktop -->
    <header ref="navbar" class="fixed top-0 bg-white px-4 lg:px-10 flex items-center w-full font-consolas font-light border-b border-gray-3 z-50 transition-all" :class="scrolled ? 'py-2':'py-4'">
        <a v-if="scrolled" href="#home" v-smooth-scroll>
            <h3 class="cursor-pointer my-2 font-consolas font-bold uppercase text-gray-8 text-xl lg:text-3xl transition-all">
                Hemiblade software
            </h3>
        </a>
        <a v-else href="#home" v-smooth-scroll>
            <img alt="Hemiblade logo" class="cursor-pointer logo transition-all w-[120px] h-[60px]" src="../../public/img/nav-logo.png" />
        </a>
        <nav class="hidden lg:block my-1 ms-auto text-lg transition-all h-full">
            <template v-for="({ label, address, type }) in links" >
                <a v-if="type === 'page'" class="link relative cursor-pointer hover:font-bold">
                    {{ label }}
                </a>
                <a v-else :href="address" v-smooth-scroll class="link relative cursor-pointer hover:font-bold mr-8">
                    {{ label }}
                </a>
            </template>
        </nav>
        <!-- mobile menu -->
        <button class="mobile-menu lg:hidden relative ms-auto" @click="toggle_mobile_menu()">
            <img :src="mobile_menu_img" alt="menu" class="w-[32px]"/>
        </button>
    </header>
    <!-- mobile -->
    
    <transition name="fade" mode="out-in">
        <div v-if="show_mobile_menu" class="absolute h-screen w-screen top-0 left-0">
            <div class="fixed bg-[#09090954] h-full top-0 left-0 w-full z-40" @click="toggle_mobile_menu()"></div>
            <nav class="fixed h-full bg-white right-0 z-50 flex flex-col font-consolas border-t border-gray-3" :style="{ top: nav_position }">
                <template v-for="({ label, address, type }) in links" >
                    <a v-if="type === 'page'" class="mobile-link link relative w-full px-6 py-2 cursor-pointer hover:font-bold">
                        {{ label }}
                    </a>
                    <a v-else @click="debounceToggle(address)" class="mobile-link link relative w-full px-6 py-2 cursor-pointer hover:font-bold mr-8 border-b border-gray-3">
                        {{ label }}
                    </a>
                </template>
            </nav>
        </div>
    </transition>



</template>
<style scoped>
    button.mobile-menu::after {
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
        bottom: 0;
        left: 0;
        background-color: #F3BE19;
        width: 0%;
        height: 2px;
        transition: all 0.15s ease-in-out;
    }
    @media (max-width: 1024px) {
        a.link::after { bottom: -2px;}
    }
    a.link:hover::after {
        width: 100%;
    }
    a.mobile-link:last-child:hover::after {
        width: 0%;
    }
</style>

<script setup>
import menu_svg from '../../public/img/mobile-menu.svg';
import { RouterLink } from 'vue-router';
import { ref, inject, onMounted, onBeforeUnmount, nextTick } from 'vue';

// mobile menu
let show_mobile_menu = ref(false);
const smoothScroll = inject('smoothScroll');

let nav_position = ref('');

const toggle_mobile_menu = () => { 
    show_mobile_menu.value = !show_mobile_menu.value;
    document.body.style.overflow = show_mobile_menu.value ? 'hidden': 'scroll'; // disable the scrolling of the whole body when the mobolie menu is opened
}
const debounceToggle = (address) => {
    listener.nav = setTimeout(() => {
        const section = document.querySelector(address);
        smoothScroll({ scrollTo: section });
        toggle_mobile_menu();
    }, 400) 
}

const mobile_menu_img = menu_svg;

//timeouts
const listener = { scroll: 0, nav: 0 }

//scroll logic
const getScrollPercentage = (el) => {
    var p = el.parentNode;
    return (el.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;
};
let scrolled = ref( getScrollPercentage(document.body) > 3.5);

onMounted(() => {
    listener.scroll = document.addEventListener("scroll", async () => {
        scrolled.value = getScrollPercentage(document.body) > 3.5;
        nav_position.value = navbar.value.clientHeight + 'px';
        await nextTick(() => {
            nav_position.value = navbar.value.clientHeight + 'px';
        })
    });
})

onBeforeUnmount(() => {
    removeEventListener(listener.scroll);
    clearTimeout(listener.nav)
});

const emit = defineEmits(['setHeight'])
const navbar = ref(null);
const marginTop = ref('');
onMounted(() => {
    marginTop.value = (navbar.value.clientHeight - 30)+'px';
    nav_position.value = navbar.value.clientHeight + 'px';
    emit('setHeight', marginTop.value);
})

// navbar links
const links = ref([
    { address: '#home', label: 'Home' }, 
    { address: '#products', label: 'Products' },
    { address: '#media', label: 'Media' },
    { address: '#about', label: 'About' },
    { address: '#contact', label: 'Contact' },
    { address: '/privacy', label: 'Privacy Policy', type: 'page' }
]);

</script>

