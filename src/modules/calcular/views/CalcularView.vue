<template>
    <h3>Propiedades Computadas</h3>
    <input type="text"  v-model="valor">
    {{  valorCalculado }}
    <resultadoSections v-if="mostrarElemento" :resultado="valorCalculado"></resultadoSections>
    <div v-else-if="isNaN(valor)">Debe ser un numero para calcular</div>
    <div v-else>Aqui no se muestra nada</div>
</template>

<script setup>
   import { ref,computed} from 'vue';
   import resultadoSections from '../components/resultadoSections.vue';

   const valor = ref('');
   const valorCalculado = computed(() => {
        return valor.value * 3;
   });

   const mostrarElemento = computed(()=>{
        return valor.value > 10;
   });


</script>

<style scoped>

</style>