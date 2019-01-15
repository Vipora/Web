import Vue from 'vue'
import Router from 'vue-router'
import SidePanel from '@/components/SidePanel'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
    routes:[
        { path: '/', component: Home, name:'home'},
        { path: '/login', component: Login, name:'login' },
        { path: '/signup', component: Register, name:'signup'},
        { path: '/dashboard/test', component: SidePanel, name:'whatever'},
    ]
})