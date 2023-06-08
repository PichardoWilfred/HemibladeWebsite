
<template>
    <header class="sticky top-0 bg-white px-10 flex items-center w-full font-consolas font-light border-b border-gray-3 transition-all" :class="scrolled ? 'py-2':'py-4'">
        
        <h3 v-if="scrolled" class="cursor-pointer my-2 font-consolas font-bold uppercase text-gray-8 text-3xl transition-all">
            Hemiblade software
        </h3>
        <img v-else alt="Hemiblade logo" class="cursor-pointer logo transition-all" src="@/assets/nav-logo.png" width="150" height="80" />
        
    
        <nav class="my-1 ms-auto text-lg transition-all h-full">

            <template v-for="({ label, address, type }) in links" >
                <a v-if="type === 'page'" class="relative cursor-pointer hover:font-bold">
                    {{ label }}
                </a>
                <RouterLink v-else :to="address" class="relative cursor-pointer hover:font-bold mr-8">
                    {{ label }}
                </RouterLink>
            </template>

        </nav>
    </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

//timeouts
const timeout = { scroll: 0 }

//scroll logic
const getScrollPercentage = (el) => {
    var p = el.parentNode;
    return (el.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;
};
let scrolled = ref( getScrollPercentage(document.body) > 0.2);

onMounted(() => {
    document.addEventListener("scroll", () => {
        clearTimeout(timeout.scroll)
        timeout.scroll = setTimeout(() => {
            scrolled.value = getScrollPercentage(document.body) > 0.2;
        }, 150);
    })
})

onBeforeUnmount(() => {
    clearTimeout(timeout.scroll)
});

const links = ref([
    { address: '/', label: 'Home' }, 
    { address: '/', label: 'Products' },
    { address: '/', label: 'Media' },
    { address: '/', label: 'About' },
    { address: '/', label: 'Contact' },
    { address: '/privacy', label: 'Privacy Policy', type: 'page' }
]);

</script>
<style scoped>

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
