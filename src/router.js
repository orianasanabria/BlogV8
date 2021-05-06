import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'inicio',
            component: () => import( /* webpackChunkName: "inicio" */ './views/Inicio')
        },
        {
            path: '/home',
            name: 'home',
            redirect: '/'
        },
        {
            path: '/portada',
            name: 'portada',
            redirect: '/'
        },
        {
            path: '/inicio',
            name: 'inicio',
            redirect: '/'
        },
        {
            path: '/administrador/:type',
            name: 'administrador',
            component: () => import( /* webpackChunkName: "administrador" */ './views/Administrador'),
            props: true
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            alias: '/acerca',
            component: () => import( /* webpackChunkName: "sobremi" */ './views/SobreMi')
        },
        {
            path: '/contacto',
            name: 'contacto',
            alias: '/contactame',
            component: () => import( /* webpackChunkName: "contacto" */ './views/Contacto')
        },
        {
            path: '/post',
            name: 'post',
            component: () => import( /* webpackChunkName: "post" */ './views/Post'),
            children: [{
                path: ':articulo',
                component: () => import( /* webpackChunkName: "articulo" */ './views/Articulo')
            }]
        },
        {
            path: '*',
            component: () => import( /* webpackChunkName: "notfound" */ './views/NotFound')
        }
    ]
})