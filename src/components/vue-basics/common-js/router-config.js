import Vue from 'vue';
import vueRouter from 'vue-router';

import routerA from '../routerA.vue';
import routerB from '../routerB.vue';

Vue.use(vueRouter);

const routers = [
    {   path:'/routera',
        component:routerA
    },
    {
        path:'/routerb',
        component:routerB
    }
]

const router = new vueRouter({
    routers
})

export default router
