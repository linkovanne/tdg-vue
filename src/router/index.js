import {createRouter, createWebHistory} from 'vue-router'
import IndexView from "@/views/IndexView";

const routes = [
    {
        path: '/',
        name: 'index',
        component: IndexView
    },
    {
        path: '/contacts',
        name: 'contacts',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ContactsView.vue')
    },
    {
        path: '/service/:item',
        name: 'service',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ServiceView.vue')
    },
    {
        path: '/service/:item/gallery',
        name: 'serviceGallery',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ServiceGalleryView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
