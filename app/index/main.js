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
    // mode: 'history',
    routes
});
var app = new Vue({
	el: '#app',
	data: {
		showLoading: false,
		api:'http://192.168.7.12:8080',
		menuTag:localStorage.getItem('menuTag')
	},
	components: {
		loading,nb,sb
	},
	methods:{
		changeTag(){
             this.menuTag=localStorage.getItem('menuTag')
		}
	},
	router,
	store
});
// 拦截器
Vue.http.interceptors.push((request, next) => {
  const merchantId=localStorage.getItem('merchantId')
  const token=localStorage.getItem('token')
  request.headers.set('merchantId', merchantId)
  request.headers.set('token',token)
  // console.log(request.headers)
  next(response => {
    return response
  })
})