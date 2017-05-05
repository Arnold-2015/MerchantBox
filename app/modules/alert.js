import Vue from 'vue';

/**
 * 全局注册弱提示
 */
    exports.install=function(Vue) {
        let timer = null;
        Vue.prototype.$alert = (tag,msg) => {
             const _app=document.getElementById('app');
            if(document.getElementById('alertWeek')){
                _app.removeChild(document.getElementById('alertWeek'))
            }
           
            let _alert = document.createElement("div")
            _alert.id = "alertWeek";
            _alert.className = "week-alert";    
            _app.appendChild(_alert);
            _alert.innerHTML=msg;
            if(tag==true){
                _alert.className='alert-yes-show';
            }else{
                _alert.className='alert-no-show';
            }
            
            clearTimeout(timer);
            timer = setTimeout(() => {
                _app.removeChild(_alert)
            }, 2000);
        };
    }
