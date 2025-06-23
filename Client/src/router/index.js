import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

     routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/About.vue'),
        },
     ],
})

//Dynamically Change Page Title
router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'Default Title'
})

export default router