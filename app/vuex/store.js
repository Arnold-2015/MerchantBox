import Vue from 'Vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        isActive:1,
        showQr:false,
        showConsume:false,
        showProfit:false,
        showIssue:false,
        showConfirm:false,
        showCreMerchant:false,
        showRevMerchant:false,
        showManager:false,
        showreviewfast:false,
        showreviewmerchant:false,
        shownoverify:false
    }
});
export default store;