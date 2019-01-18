import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(Router)

export default new Router({
    routes:[
        { path: '/', component: Home, name:'home'},
        { path: '/login', component: Login, name:'login' },
        { path: '/signup', component: Register, name:'signup'},
        { path: '/dashboard/test', component: Dashboard, name:'dashboard'},
    ]
})
