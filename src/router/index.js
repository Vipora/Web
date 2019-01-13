import Vue from 'vue'
import Router from 'vue-router'
import SidePanel from '@/components/SidePanel'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes:[
        { path: '/', component: Home, name:'home'},
        { path: '/dashboard/test', component: SidePanel, name:'whatever'},
    ]
})