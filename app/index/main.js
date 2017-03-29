import Vue from 'Vue'
import loading from '../components/loading.vue'
import nb from '../components/navbar.vue'
import sb from '../components/sidebar.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from '../routers/router'
import store from '../vuex/store.js'
require('../assets/reset.scss')
Vue.use(VueRouter);
Vue.use(VueResource);

// 实例化VueRouter
const router = new VueRouter({
    mode: 'history',
    routes
});
var app = new Vue({
	el: '#app',
	data: {
		showLoading: false
	},
	components: {
		loading,nb,sb
	},
	router,
	store
});
Vue.http.interceptors.push((request, next) => {
	app.showLoading= true;
	next((response) => {
		app.showLoading  = false;
		return response
	});
});