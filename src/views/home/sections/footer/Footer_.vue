<template>
    <footer class="flex flex-col bg-gray-9 text-white py-6 lg:pt-12 px-7 sm:px-12">
        <div class="flex flex-wrap justify-between">
            <FooterForm />
            <div class="flex flex-col">
                <div class="flex flex-col">
                    <h4 class="font-medium  text-white text-[16px] lg:text-2xl mb-2">Get in Touch via Email</h4>
                    <a class="flex text-[#b3b3b3] font-regular text-[16px] lg:text-lg hover:text-yellow transition-all cursor-pointer"  href = "mailto: info@hemiblade.com">
                        <img src="/img/footer/email.svg" class="w-8 mr-3" alt="" srcset="">
                        info@hemiblade.com
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import FooterForm from "./FooterForm.vue";
export default {
    name: "Footer",
    components: { FooterForm },
    data() {
        return {
            sections: [
                { title: 'Home', section: "#portrait", offset: -300 },
                { title: '[ IFA ]', section: "#showcase", offset: -180 },
                { title: 'Highlights', section: "#highlight", offset: -260 },
                { title: 'Perks', section: "#perks", offset: -255 },
            ],
        }
    },
}
</script>
<style scoped>
    .middle-link:after {
        transform: translateX(15px);
    }
    .middle-link:before {
        transform: translateX(-15px);
    }
    .middle-link:after {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        margin-top: 10px;
        background-color: var(--gray-2);
    }
</style>