import Vue from 'vue';
import App from './App.vue';
import './hotcss.js';
import '../style/reset.scss';
import router from './router/index.js';
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App></App>'
})