<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
      <!--   <h3>Nombre: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3> -->
        <h3>Nombre : {{ registrarStore.nombre }}</h3>
        <h3>Email: {{ registrarStore.email}}</h3>
        <ul>
         <li><router-link to="/contador">Contador</router-link></li> 
         <li><router-link to="/lista-de-tareas"> Lista De Tareas</router-link></li>
         <li><router-link to="/registrar"> Registrar</router-link></li>
         <li><router-link to="/calcular"> Calcular</router-link></li>
        </ul>        
        
    </div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
// mport { ref, watch } from 'vue';

const registrarStore = useRegistrarStore();
//const nombre = ref(registrarStore.nombre.value);
//const nombre = ref('');
//const email = ref(registrarStore.email.value);
//const email = ref('');
/**watch( () => registrarStore.nombre, (newValue) => {
    nombre.value = newValue;
}),
watch( () => registrarStore.email,(newValue) => {
    email.value = newValue;
}); */
// https://www.youtube.com/watch?v=URLXLBamqBQ&list=PLg-z1C9R1jutezByZ3WmH8NE_JqYBsDOA&index=11
</script>

<style>
    .sidebar{
        width: 200px;
        background-color: #f0f0f0;
        padding: 20px;
    }
</style>