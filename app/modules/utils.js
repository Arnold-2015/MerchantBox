'use strict';


// 获取手机验证码后相关处理
const reGetCode = {
            node:null,
            count:60,
            start:function(){
                if(this.count > 0){
                    this.node.innerHTML = "重新发送"+this.count--;
                    var _this = this;
                    setTimeout(function(){
                        _this.start();
                    },1000);
                }else{
                    this.node.removeAttribute("disabled");
                    this.node.innerHTML = "重新发送";
                    this.count = 60;
                }
            },
            //初始化
            init:function(node){
                this.node = node;
                this.node.setAttribute("disabled",true);
                this.start();
            }
        };

/**
 *   对Date的扩展，将 Date 转化为指定格式的String
 *   月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *   例子：
 *   (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
 *   (new Date()).Format('yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
 */
const fmtDate = (date, fmt) => { // author: meizz
    var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
};

/**
 * 格式化日期或时间
 * @param {string} time 需要格式化的时间
 * @param {bool} friendly 是否是fromNow
 */
exports.getLastTimeStr = (time, friendly) => {
    if (friendly) {
        return MillisecondToDate(time);
    } else {
        return fmtDate(new Date(time), 'yyyy-MM-dd hh:mm');
    }
};

/**
 * 获取不同tab的信息
 * @param  {[type]}  tab     [tab分类]
 * @param  {[type]}  good    [是否是精华]
 * @param  {[type]}  top     [是否置顶]
 * @param  {Boolean} isClass [是否是样式]
 * @return {[type]}          [返回对应字符串]
 */
exports.getProStatus = (status) => {
    let str = '';
        switch (status) {
            case 1:
                str = '草稿 ';
                break;
            case 2:
                str = '待审核';
                break;
            case 3:
                str = '审核失败';
                break;
            case 4:
                str = '招募中';
                break;
            case 5:
                str = '确认中';
                break;
            case 6:
                str = '履约中';
                break;
            case 7:
                str = '项目失败';
                break;
            
        }
    
    return str;
};
// 删除数组中的指定数值元素
exports.removeByValue=(arr, val)=> {
  for(var i=0; i<arr.length; i++) {
    if(arr[i] == val) {
      arr.splice(i, 1);
      break;
    }
  }
};

exports.fmtDate = fmtDate;
exports.reGetCode=reGetCode;
