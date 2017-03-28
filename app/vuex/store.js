import Vue from 'Vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        showQr:false,
        showConsume:false,
        showProfit:false
    }
});
export default store;