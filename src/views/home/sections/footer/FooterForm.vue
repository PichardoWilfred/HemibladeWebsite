<template>
    <form class="flex flex-col w-[36rem] mb-6">
        <h1 class="font-barlow-w font-semibold text-white text-2xl mb-6">CONNECT WITH US</h1>
        <div class="form-control flex flex-col mb-5">
            <input v-model="form.email.value" 
            class="px-2 pb-1 mb-1 font-open-sans bg-[transparent] placeholder-gray-6 placeholder:font-bold placeholder:text-[14px] border-b border-gray-7 focus-within:outline-none focus-within:border-yellow hover:border-yellow active:border-yellow" 
            placeholder="Email" type="text">
            <small class="text-gray-5 transition-all" :class="[form.email.error ? 'visible':'invisible']">
                Por favor, ingrese un correo válido.
            </small>
        </div>
        <div class="form-control flex flex-col mb-2">
            <textarea v-model="form.message.value" placeholder="Message"
            class="h-[220px] p-2 mb-1 font-open-sans resize-none bg-[transparent] placeholder-gray-6 placeholder:font-bold placeholder:text-[14px] border border-gray-7 focus-within:outline-none focus-within:border-yellow hover:border-yellow active:border-yellow">
            </textarea>
            <small class="text-gray-5 transition-all" :class="[form.message.error ? 'visible':'invisible']">
                Por favor, describa como podemos ayudarlo.
            </small>
        </div>
        <button class="bg-white px-4 py-2 ml-auto active:bg-yellow max-lg:w-[100%]" type="submit" @click.prevent="submit">
            <span class="font-consolas font-bold tracking-widest text-gray-7">
                SUBMIT
            </span>
        </button>
    </form>
</template>
<script>
export default {
    name: 'FooterForm',
    data() {
        return {
            form: {
                email: { value: '', error: false },
                message: { value: '', error: false },
            }
        }
    },
    methods: {
        submit(){
            // checking if the email is valid
            const valid_email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g.test(this.form.email.value);
            this.form.email.error = !valid_email;

            // checking if the message is valid
            const message = this.form.message.value;
            const valid_message = message !== '' && message !== ' ' &&  !/\s/g.test(message);
            this.form.message.error = !valid_message;

            if (valid_message && valid_email) console.log('(enviando mensaje)');
        }
    },
}
</script>
<style>
    
</style>