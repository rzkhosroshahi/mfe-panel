import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
];

export const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
