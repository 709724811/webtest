//初始化自定义easyui文本格式验证
function initValidate() {
    $.extend($.fn.validatebox.defaults.rules, {
        onlyNum: {
            validator: function (value, param) {
                var reg = /^\d+$/g;
                return reg.test(value);
            },
            message: '只能输入数字'
        },
        onlyDay: {
            validator: function (value, param) {
                var reg = /^((0?[1-9])|((1|2)[0-9])|30|31)$/;
                return reg.test(value);
            },
            message: '只能输入1-31的数字'
        },
        onlyFloat: {
            validator: function (value, param) {
                var reg = /^[-+]?[0-9]*\.?[0-9]+$/g;
                return reg.test(value);
            },
            message: '只能输入小数'
        },
        onlyMoney: {
            validator: function (value, param) {
                var reg = /^([0-9]*(,[0-9]*)*(\.[0-9]+)?)$/;
                return reg.test(value);
            },
            message: '只能输入货币格式'
        }
    });
}

$(function(){
    initValidate();
});