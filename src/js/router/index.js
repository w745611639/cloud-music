import Vue from 'vue';
import Router from 'vue-router';
import Home from '../home/index.vue';
import HotMusic from '../hotmusic/index.vue';
import Search from '../search/index.vue';

Vue.use(Router);
export default new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/hotmusic',
        component: HotMusic
    }, {
        path: '/search',
        component: Search
    }],
    linkExactActiveClass: 'active'
})