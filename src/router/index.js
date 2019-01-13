import Vue from 'vue'
import Router from 'vue-router'
import SidePanel from '@/components/SidePanel'

Vue.use(Router)

export default new Router({
    routes:[
        { path: '/', component: SidePanel, name:'sidepanel'}
    ]
})