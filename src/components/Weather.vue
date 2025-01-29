<template>
 <!-- {{  wheatherStore.temperatura }} -->
    
 <h3>La Temperatura actual es: {{  wheatherStore.temperatura }} ° </h3>  
</template>

<script setup>
import { useWeather } from '@/composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/wheatherStore';

const wheatherStore = useWeatherStore();

onMounted( () => {
    useWeather();
});
</script>

<style scoped>

</style>