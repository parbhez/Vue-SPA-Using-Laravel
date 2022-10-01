import { createRouter, createWebHistory } from 'vue-router'

const routes = [

    {
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/Home.vue')
    },

    {
        path: '/category',
        name: 'category',
        component: () =>
            import ('../components/category/TheCategory.vue')
    },


]

const allRouterPath = createRouter({
    history: createWebHistory(),
    routes,
})

export default allRouterPath