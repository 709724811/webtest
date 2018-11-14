/**
 * 赎回请求状态
 * @type{{getDescription:RedeemRequestStatus.getDescription}}
 */
var RedeemRequestStatus = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "<span style='color: #ACCD3C'>待回款</span>";
            case 2:
                return "<span style='color: #00dd1c'>回款中</span>";
            case 3:
                return "<span style='color: #117700'>已回款</span>";
            case 4:
                return "<span style='color: #ab1e1e'>回款失败</span>";
            case 5:
                return "<span style='color: #770088'>待确认</span>";
            case 6:
                return "<span style='color: #95B8E7'>已撤销</span>";
            default:
                return null;
        }
    }
}




