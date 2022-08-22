import { createRouter, createWebHistory } from 'vue-router'
import VCanvas from '../views/VCavnas.vue'
import VIntro from '../views/VIntro.vue'
import VHome from '../views/VHome.vue'
const routes = [
    //{
    //    path: '/',
    //    name: 'VCanvas',
    //    component: VCanvas,
    //},
    {
        path: '/',
        name: 'Home',
        component: VHome,
    },
    {
        path: '/intro',
        name: 'Intro',
        component: VIntro, 
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
