
<template>
    <!-- desktop -->
    <header ref="navbar" class="fixed top-0 bg-white px-4 lg:px-10 flex items-center w-full font-consolas font-light border-b border-gray-3 z-50 transition-all" :class="scrolled ? 'py-2':'py-4'">
        <h3 v-if="scrolled" class="cursor-pointer my-2 font-consolas font-bold uppercase text-gray-8 text-xl lg:text-3xl transition-all">
            Hemiblade software
        </h3>
        <img v-else alt="Hemiblade logo" class="cursor-pointer logo transition-all w-[150px] h-[80px]" src="@/assets/nav-logo.png" />
        <nav class="hidden lg:block my-1 ms-auto text-lg transition-all h-full">
            <template v-for="({ label, address, type }) in links" >
                <a v-if="type === 'page'" class="relative cursor-pointer hover:font-bold">
                    {{ label }}
                </a>
                <RouterLink v-else :to="address" class="relative cursor-pointer hover:font-bold mr-8">
                    {{ label }}
                </RouterLink>
            </template>
        </nav>
        <!-- mobile menu -->
        <button class="mobile-menu lg:hidden relative ms-auto" @click="toggle_mobile_menu()">
            <img :src="mobile_menu_img" alt="menu" class="w-[32px]"/>
        </button>
    </header>
    <!-- mobile -->
    <div v-if="show_mobile_menu" class="fixed bg-[#09090954] h-screen w-screen top-0 left-0 z-40" @click="toggle_mobile_menu()"></div>

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
    a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #F3BE19;
        width: 0%;
        height: 2px;
        transition: all 0.15s ease-in-out;
        
    }
    a:hover::after {
        width: 100%;
    }
</style>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import require from '@/libs/require.js';

//timeouts
const listener = { scroll: 0 }

//scroll logic
const getScrollPercentage = (el) => {
    var p = el.parentNode;
    return (el.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;
};
let scrolled = ref( getScrollPercentage(document.body) > 3.5);

onMounted(() => {
    listener.scroll = document.addEventListener("scroll", () => {
        scrolled.value = getScrollPercentage(document.body) > 3.5;
    });
})

onBeforeUnmount(() => {
    removeEventListener(listener.scroll)
});

const emit = defineEmits(['setHeight'])
const navbar = ref(null);
onMounted(() => {
    emit('setHeight', (navbar.value.clientHeight - 30)+'px');
})

// links
const links = ref([
    { address: '/', label: 'Home' }, 
    { address: '/', label: 'Products' },
    { address: '/', label: 'Media' },
    { address: '/', label: 'About' },
    { address: '/', label: 'Contact' },
    { address: '/privacy', label: 'Privacy Policy', type: 'page' }
]);

let show_mobile_menu = ref(false);
const toggle_mobile_menu = () => {
    show_mobile_menu.value = !show_mobile_menu.value;
    const disableScroll = () => {
        // Get the current page scroll position in the vertical direction
        window.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Get the current page scroll position in the horizontal direction
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
    const enableScroll = () => {
        window.onscroll = function(){};
    }
    show_mobile_menu.value ? disableScroll(): enableScroll(); 
}
const mobile_menu_img = require('../assets/mobile-menu.svg')
</script>

