<template>
    <div class="header">
    <!--    <h3>La Temperatura actual es: <Weather></Weather> </h3>-->
      {{ mensajeRecibido }}  <Weather></Weather>
    </div>
</template>

<script setup>
import Weather from './Weather.vue';
import { defineProps,ref,watch } from 'vue';

const props = defineProps(['mensaje']);
const mensajeRecibido = ref(props.mensaje);
watch( ()=>props.mensaje,(newValue)=>{
    mensajeRecibido.value = newValue;
} );

// https://www.youtube.com/watch?v=ow-vkZgRohA&list=PLg-z1C9R1jutezByZ3WmH8NE_JqYBsDOA&index=10
</script>

<style scoped>
.header{
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 10px 20px;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
    background-color: #333;
    color: white;
}
h1{
    margin: 0;
}

</style>