// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Login = resolve => {
    require.ensure(['../view/login.vue'], () => {
        resolve(require('../view/login.vue'));
    },'login');
};
const router = [{
    path: '',
    name: 'login',
    component: Login
}, {
    path: '/promanage',
    name: 'promanage',
    component(resolve) {
        require.ensure(['../view/promanage.vue'], () => {
            resolve(require('../view/promanage.vue'));
        },'promanage');
    }
},  {
    path: '/superpromanage',
    name: 'superpromanage',
    component(resolve) {
        require.ensure(['../view/superpromanage.vue'], () => {
            resolve(require('../view/superpromanage.vue'));
        },'superpromanage');
    }
},{
    path: '/merchantmanage',
    name: 'merchantmanage',
    component(resolve) {
        require.ensure(['../view/merchantmanage.vue'], () => {
            resolve(require('../view/merchantmanage.vue'));
        },'merchantmanage');
    }
}, {
    path: '/merchantdetail',
    name: 'merchantdetail',
    component(resolve) {
        require.ensure(['../view/merchantdetail.vue'], () => {
            resolve(require('../view/merchantdetail.vue'));
        },'merchantdetail');
    }
}, {
    path: '/customermanage',
    name: 'customermanage',
    component(resolve) {
        require.ensure(['../view/customermanage.vue'], () => {
            resolve(require('../view/customermanage.vue'));
        },'customermanage');
    }
}, {
    path: '/customerdetail',
    name: 'customerdetail',
    component(resolve) {
        require.ensure(['../view/customerdetail.vue'], () => {
            resolve(require('../view/customerdetail.vue'));
        },'customerdetail');
    }
},{
    path: '/ordermanage',
    name: 'ordermanage',
    component(resolve) {
        require.ensure(['../view/ordermanage.vue'], () => {
            resolve(require('../view/ordermanage.vue'));
        },'ordermanage');
    }
}, {
    path: '/compactmanage',
    name: 'compactmanage',
    component(resolve) {
        require.ensure(['../view/compactmanage.vue'], () => {
            resolve(require('../view/compactmanage.vue'));
        },'compactmanage');
    }
},{
    path: '/compactdetail',
    name: 'compactdetail',
    component(resolve) {
        require.ensure(['../view/compactdetail.vue'], () => {
            resolve(require('../view/compactdetail.vue'));
        },'compactdetail');
    }
}, {
    path: '/compactmodle',
    name: 'compactmodle',
    component(resolve) {
        require.ensure(['../view/compactmodle.vue'], () => {
            resolve(require('../view/compactmodle.vue'));
        },'compactmodle');
    }
}, {
    path: '/managerlist',
    name: 'managerlist',
    component(resolve) {
        require.ensure(['../view/managerlist.vue'], () => {
            resolve(require('../view/managerlist.vue'));
        },'managerlist');
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
    path: '/creprosecond',
    name: 'creprosecond',
    component(resolve) {
        require.ensure(['../view/creprosecond.vue'], () => {
            resolve(require('../view/creprosecond.vue'));
        },'creprosecond');
    }
},{
    path: '/creprothird',
    name: 'creprothird',
    component(resolve) {
        require.ensure(['../view/creprothird.vue'], () => {
            resolve(require('../view/creprothird.vue'));
        },'creprothird');
    }
},{
    path: '/creproforth',
    name: 'creproforth',
    component(resolve) {
        require.ensure(['../view/creproforth.vue'], () => {
            resolve(require('../view/creproforth.vue'));
        },'creproforth');
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