<template>
    <form class="flex flex-col w-[36rem] mb-6" ref="form_ref">
        <h1 class="font-barlow-w font-semibold text-white text-2xl mb-6">CONNECT WITH US</h1>
        <div class="form-control flex flex-col mb-5">
            <input v-model="form.email.value" name="email"
            class="px-2 pb-1 mb-1 font-open-sans bg-[transparent] placeholder-gray-6 placeholder:font-bold placeholder:text-[14px] border-b border-gray-7 focus-within:outline-none focus-within:border-yellow hover:border-yellow active:border-yellow" 
            placeholder="Email" type="text">
            <small class="text-gray-5 transition-all" :class="[form.email.error ? 'visible':'invisible']">
                Por favor, ingrese un correo válido.
            </small>
        </div>
        <div class="form-control flex flex-col mb-5 lg:mb-2">
            <textarea v-model="form.message.value" name="message" placeholder="Message"
            class="h-[220px] p-2 mb-1 font-open-sans resize-none bg-[transparent] placeholder-gray-6 placeholder:font-bold placeholder:text-[14px] border border-gray-7 focus-within:outline-none focus-within:border-yellow hover:border-yellow active:border-yellow">
            </textarea>
            <small class="text-gray-5 transition-all" :class="[form.message.error ? 'visible':'invisible']">
                Por favor, describa como podemos ayudarlo.
            </small>
        </div>
        <button class="submit-message bg-white px-4 py-2 ml-auto active:bg-yellow max-lg:w-[100%]" type="submit" @click.prevent="submit" :disabled="disable_submit">
            <span class="font-consolas font-bold tracking-widest text-gray-7">
                SUBMIT
            </span>
        </button>
        <!---->
        <div v-show="show_notification" mode="out-in" class="notification flex flex-col items-start fixed z-20 pt-4 left-0 bottom-0 xl:left-[unset] xl:right-[20px] lg:bottom-[20px] lg:max-w-[370px]
        min-h-max max-lg:w-full bg-white border border-gray-4 rounded">
            <h3 class=" font-consolas text-default font-bold text-[17px] mb-4 px-3">
                Your message has been submitted succesfully! 
                <span>
                    <img class="inline w-[20px]" src="/img/contact-form/checkmark.svg" alt="check"> 
                </span>
            </h3>
            <p class="font-consolas text-gray-7 text-base px-3 mr-auto">We will be contacting you in a bit...</p>
            <button class="font-consolas text-gray-4 font-bold px-4 py-2 text-2xl my-2 ml-auto" @click.prevent="close_notification">
                ACCEPT
            </button>
        </div>
    </form>
</template>
<script>
import emailjs from '@emailjs/browser';
export default {
    name: 'FooterForm',
    data() {
        return {
            form: {
                email: { value: '', error: false },
                message: { value: '', error: false },
            },
            disable_submit: false,
            show_notification: false,
            notification_timeout: 0
        }
    },
    methods: {
        submit() {
            // checking if the email is valid
            const email = this.form.email.value;
            const valid_email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g.test(this.form.email.value);
            this.form.email.error = !valid_email;

            // checking if the message is valid
            const message = this.form.message.value;
            const valid_message = message !== '' && message !== ' ' && !/\s/g.test(message);
            
            this.form.message.error = !valid_message;
            if (valid_message && valid_email) {
                try {
                    emailjs.sendForm('service_08phh5e','template_ht69v9w', this.$refs.form_ref, 'HeQTjsXhTRoEBHO8c');
                    this.show_notification = true;
                } catch (e) {
                    console.log(e);
                } finally {
                    this.disable_submit = true
                    this.notification_timeout = setTimeout(() => {
                        if (this.show_notification) this.show_notification = false;
                    }, 5000);
                }
            };
        },
        close_notification() {
            this.show_notification = false
        }
    },
    beforeUnmount() {
        clearTimeout(this.notification_timeout);
    }
}
</script>
<style scoped>
    .notification {
        will-change: transform;
        animation: show cubic-bezier(0.4, 0, 0.2, 1) 150ms;
    }
    @keyframes show {
        from {
            transform: translateY(100px);
        } to {
            transform: translateY(0px);
        }
    }
    @media (min-width: 992px) {
        @keyframes show {
            from {
                transform: translateX(100%);
            } to {
                transform: translateX(0px);
            }
        }
    }
    button.submit-message:disabled {
        opacity: 0.5;
    } 
</style>