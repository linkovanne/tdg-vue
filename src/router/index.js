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
        path: '/service/:id',
        name: 'service',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ServiceView.vue')
    },
    {
        path: '/service/:id/gallery',
        name: 'serviceGallery',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ServiceGalleryView.vue')
    },
    {
        path: '/service/:id/form',
        name: 'contactForm',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ContactFormView.vue')
    },
    {
        path: '/project/:id',
        name: 'project',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ProjectView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
