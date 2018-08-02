/**
 * 协议模板状态
 * @type {{getStatus: Protocol.getStatus}}
 */
var Protocol = {
    getStatus: function (index) {
        switch (index) {
            case -1:
                return "<span style='color: #ab1e1e'>已删除</span>";
            case 1:
                return "<span style='color: #ACCD3C'>初始化</span>";
            case 2:
                return "<span style='color: #2fa4e7'>使用中</span>";
            case 3:
                return "<span style='color: #95B8E7'>停用中</span>";
            default:
                return null;
        }
    }
}

