// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Login = resolve => {
    require.ensure(['../view/login.vue'], () => {
        resolve(require('../view/login.vue'));
    },'login');
};
const router = [{
    path: '/',
    name: 'login',
    component: Login
}
, {
    path: '/index',
    name: 'index',
    component(resolve) {
        require.ensure(['../view/index.vue'], () => {
            resolve(require('../view/index.vue'));
        },'index');
    }
},{
    path: '/confirming',
    name: 'confirming',
    component(resolve) {
        require.ensure(['../view/confirming.vue'], () => {
            resolve(require('../view/confirming.vue'));
        },'confirming');
    }
},{
    path: '/recruiting',
    name: 'recruiting',
    component(resolve) {
        require.ensure(['../view/recruiting.vue'], () => {
            resolve(require('../view/recruiting.vue'));
        },'recruiting');
    }
},{
    path: '/performing',
    name: 'performing',
    component(resolve) {
        require.ensure(['../view/performing.vue'], () => {
            resolve(require('../view/performing.vue'));
        },'performing');
    }
},{
    path: '/partnerdetail',
    name: 'partnerdetail',
    component(resolve) {
        require.ensure(['../view/partnerdetail.vue'], () => {
            resolve(require('../view/partnerdetail.vue'));
        },'partnerdetail');
    }
},{
    path: '/profitdetail',
    name: 'profitdetail',
    component(resolve) {
        require.ensure(['../view/profitdetail.vue'], () => {
            resolve(require('../view/profitdetail.vue'));
        },'profitdetail');
    }
},{
    path: '/creprofirst',
    name: 'creprofirst',
    component(resolve) {
        require.ensure(['../view/creprofirst.vue'], () => {
            resolve(require('../view/creprofirst.vue'));
        },'creprofirst');
    }
},{
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '*',
    component: Login
}
];

export default router;