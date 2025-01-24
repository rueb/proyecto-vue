import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
/*     {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    */
    {
      path: '/contador',
      name: 'contador',     
      component: () => import('../modules/contador/components/Contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaDeTareas',     
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue'),
    }, 
    {
      path: '/registrar',
      name: 'registrar',     
      component: () => import('../modules/registro/views/RegistrarView.vue'),
    }, 
    //https://www.youtube.com/watch?v=TeCLj-bax54&list=PLg-z1C9R1jutezByZ3WmH8NE_JqYBsDOA&index=6
  ],
})

export default router
