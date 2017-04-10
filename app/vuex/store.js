import Vue from 'Vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        showQr:false,
        showConsume:false,
        showProfit:false,
        showIssue:false,
        showConfirm:false,
        showMerchant:false,
        showManager:false
    }
});
export default store;