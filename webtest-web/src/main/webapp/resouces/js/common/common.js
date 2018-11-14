/**
 * 时间日期转换
 * @type {{dateCalc: DateUtils.dateCalc}}
 */
var DateUtils = {
    dateCalc: function (year, month, day) {
        var dtTmp = new Date();
        var date = new Date((dtTmp.getFullYear() + year), (dtTmp.getMonth() + month),
            (dtTmp.getDate() + day), dtTmp.getHours(),
            dtTmp.getMinutes(), dtTmp.getSeconds());
        var years = date.getFullYear();
        var months = date.getMonth() + 1;
        var days = date.getDate();
        return years + "-" + (months < 10 ? "0" + months : months) + "-" + (days < 10 ? "0" + days : days) + " " + "00:00:00";
    }
}

/**
 * 金额转换
 * @type {{millToYuan: MoneyUtils.millToYuan}}
 */
var MoneyUtils = {
    millToYuan: function (value) {
        if(value === '' || value == undefined){
            return '';
        }
        return value / 10000.0;
    }
}

var StringUtils = {
    checkMobile: function (mobile) {
        if (/^1\d{10}$/.test(mobile)) {
            return true;
        }
        return false;
    },
    isBlank: function (value) {
        return value == null || value == '';
    },
    isNotBlank: function (value) {
        return !StringUtils.isBlank(value);
    }
}

var RateUtils = {
    decimalsToPercentage: function (value) {
        if(value==''||value==undefined){
            return '';
        }
        return value * 100.0;
    }
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
