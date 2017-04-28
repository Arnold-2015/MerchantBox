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
		shownv:false,
		api:'http://test.6dbox.cn:8008',
		menuTag:localStorage.getItem('menuTag')
	},
	components: {
		loading,nb,sb
	},
	methods:{
		changeTag(){
             this.menuTag=localStorage.getItem('menuTag')
		},
		changenv(){
             this.shownv=true;
		}
	},
	router,
	store
});
// 拦截器
Vue.http.interceptors.push((request, next) => {
	app.showLoading=true;
  const merchantId=localStorage.getItem('merchantId')
  const token=localStorage.getItem('token')
  request.headers.set('merchantId', merchantId)
  request.headers.set('token',token)
  console.log(request.headers)
  next(response => {
  	app.showLoading=false;
    if(response.data.errorCode==null) {return response}
    	else if(response.data.errorCode.code==3000){
    		alert('登录信息已过期，请重新登录');
    		window.location.href='http://test.6dbox.cn'
    	}

  })
})