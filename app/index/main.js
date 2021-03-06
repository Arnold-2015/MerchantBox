import Vue from 'Vue'
import loading from '../components/loading.vue'
import nb from '../components/navbar.vue'
import sb from '../components/sidebar.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from '../routers/router'
import store from '../vuex/store.js'
import VeeValidate from 'vee-validate'
import Alert from '../modules/alert.js'
require('../assets/reset.scss')
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.use(Alert);
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
		// api:'http://test.6dbox.cn:8008',
		// api:'http://192.168.7.12:8080',
		api:'http://xf.6dbox.cn:8008',	
		avarta:localStorage.getItem('avarta'),
		role:localStorage.getItem('role'),
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
		},
		changeavartaandrole(){
			this.avarta=localStorage.getItem('avarta')
			this.role=localStorage.getItem('role')
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
    if(response.data.statusCode==200) {return response}
    	else if(response.data.errorCode.code==3000){
    		app.$alert(false,'您的账户已在其它设备登录');
    		 timer = setTimeout(() => {
                this.$router.push({
                    name: 'login'
                });
                    }, 1000);
    	}else if(response.data.statusCode!=200&&response.data.errorCode.code!=3000){
             app.$alert(false,response.data.errorCode.message);
    	}

  })
})