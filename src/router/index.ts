import { createRouter, createWebHistory } from 'vue-router'
import VCanvas from '../views/VCavnas.vue'
const routes = [
    {
        path: '/',
        name: 'VCanvas',
        component: VCanvas,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
