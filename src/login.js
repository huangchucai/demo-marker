/**
 * Created by Z7 on 2017/11/9.
 */

import App from './components/login/login.vue';

const Vue = window.Vue || {};
Vue.config.devtools = true;
new Vue(Vue.util.extend({ el: '#root' }), App);
