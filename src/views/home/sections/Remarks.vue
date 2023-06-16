<template>
    <section class="flex flex-col items-center pt-6 h-[440px] border-b border-gray-2">
        <h2 class="font-consolas text-gray-4 text-base mx-auto mb-14">HEMIBLADE REMARKS</h2>
        <transition name="fade" mode="out-in">
            <div class="flex flex-col content-start justify-center items-start font-consolas" :key="index">
                <div class="flex items-center">
                    <img :src="testimonial.img" :alt="testimonial.alt" class="rounded-full w-[200px] h-[200px] mb-4">
                    <p class="font-courier leading-[1.5] text-[22px] ml-[5rem] max-w-[800px] font-italic">
                        "{{ testimonial.remark }}"
                    </p>
                </div>
                <div class="flex flex-col items-center text-center">
                    <h1 class="font-bold text-xl text-center">
                        {{ testimonial.name }}
                    </h1>
                    <h2 class="text-center">
                        {{ testimonial.role }}
                    </h2>
                </div>
            </div>
        </transition>
        <!-- <button class="bg-blue px-4 py-2 bg-yellow-3 text-white w-max mx-auto rounded" @click="index++">Next</button> -->
    </section>
</template>

<script setup>
import carlos_mendoza from '/img/remarks/carlos_mendoza.jpg';
import ana_morales from '/img/remarks/ana_morales.jpg';
import alejandro_rodriguez from '/img/remarks/alejandro_rodriguez.jpg';
import laura_gomez from '/img/remarks/laura_gomez.jpg';
import juan_hernandez from '/img/remarks/juan_hernandez.jpg';
import maria_castillo from '/img/remarks/maria_castillo.jpg';
import luis_torres from '/img/remarks/luis_torres.jpg';
import sofia_romero from '/img/remarks/sofia_romero.jpg';

import { ref, computed, onBeforeUnmount} from 'vue';
const client_testimonials = [
{
    name: "Carlos Mendoza",
    role: "Director Administrativo",
    img: carlos_mendoza,
    alt: 'carlos_mendoza',
    remark: "Trabajar con Hemiblade ha sido una experiencia gratificante. Su enfoque experto en seguridad nos brindó tranquilidad y confianza en nuestro entorno laboral. ¡Altamente recomendado!"
},
{
    name: "Ana Morales",
    role: "Gerente de Operaciones",
    img: ana_morales,
    alt: 'ana_morales',
    remark: "Hemiblade se destaca por su profesionalismo y dedicación en el campo de la seguridad. Su equipo de expertos nos proporcionó soluciones innovadoras y efectivas. ¡Un socio valioso para nuestra empresa!"
},
{
    name: "Alejandro Rodríguez",
    role: "Jefe de Seguridad",
    img: alejandro_rodriguez,
    alt: 'alejandro_rodriguez',
    remark: "Hemiblade es sinónimo de excelencia en seguridad. Como Jefe de Seguridad, puedo afirmar que su enfoque estratégico y su compromiso con la protección de nuestros activos han superado nuestras expectativas. ¡No dudaría en recomendarlos!"
},
{
    name: "Laura Gómez",
    role: "Coordinadora de Seguridad",
    img: laura_gomez,
    alt: 'laura_gomez',
    remark: "Trabajar con Hemiblade ha sido una experiencia enriquecedora. Su coordinación y ejecución impecables de medidas de seguridad nos brindaron un entorno laboral seguro y protegido. ¡Gracias por su profesionalismo y atención al detalle!"
},
{
    name: "Juan Hernández",
    role: "Director de Seguridad Corporativa",
    img: juan_hernandez,
    alt: 'juan_hernandez',
    remark: "Hemiblade se destaca por su enfoque integral en la seguridad corporativa. Como Director de Seguridad, valoro su enfoque estratégico y su capacidad para adaptarse a nuestras necesidades. ¡Han demostrado ser un socio confiable y altamente competente!"
},
{
    name: "María Castillo",
    role: "Contadora de Seguridad",
    img: maria_castillo,
    alt: 'maria_castillo',
    remark: "Hemiblade es una empresa de seguridad excepcional. Su conocimiento en el ámbito financiero y su capacidad para administrar los recursos destinados a la seguridad nos brindaron tranquilidad y eficiencia. ¡Recomendaría sus servicios sin dudarlo!"
},
{
    name: "Luis Torres",
    role: "Director de Desarrollo de Productos",
    img: luis_torres,
    alt: 'luis_torres',
    remark: "Hemiblade ha demostrado ser líder en innovación en el campo de la seguridad. Su enfoque orientado a resultados y su capacidad para desarrollar productos de vanguardia nos han permitido alcanzar nuestros objetivos de seguridad de manera efectiva. ¡Una empresa que marca la diferencia!"
},
{
    name: "Sofía Romero",
    role: "Gerente de Proyectos de Seguridad",
    img: sofia_romero,
    alt: 'sofia_romero',
    remark: "Hemiblade ha sido un socio invaluable en nuestros proyectos de seguridad. Su enfoque meticuloso en la gestión de proyectos y su atención a los detalles han sido clave para el éxito de nuestras iniciativas."
},
];
let index_interval = 0; 
const index = ref(0);
const testimonial = computed(() => client_testimonials[index.value])

index_interval = setInterval(() => {
    index.value = index.value === (client_testimonials.length - 1) ? 0 : (index.value + 1);
}, 10000);

onBeforeUnmount(() => {
    clearInterval(index_interval);
})
</script>