import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'inicio',
            component: () => import('./views/Inicio')
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: () => import('./views/SobreMi')
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import('./views/Contacto')
        },
        {
            path: '/post',
            name: 'post',
            component: () => import('./views/Post'),
            children: [{
                path: ':articulo',
                component: () => import('./views/Articulo')
            }]
        },
        {
            path: '*',
            component: () => import('./views/NotFound')
        }
    ]
})