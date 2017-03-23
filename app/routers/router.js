// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Login = resolve => {
    require.ensure(['../view/index.vue'], () => {
        resolve(require('../view/index.vue'));
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
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '*',
    component: Login
}
];

export default router;