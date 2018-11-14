/**
 * 回款状态
 * @type {{getDescription: ProductStatus.getDescription}}
 */
var RefundStatus = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "<span style='color: #1006F1'>待处理</span>";
            case 2:
                return "<span style='color: #00dd1c'>回款中</span>";
            case 3:
                return "<span style='color: #ACCD3C'>已回款</span>";
            case 4:
                return "<span style='color: #ab1e1e'>回款失败</span>";
        }
    }
}
/**
 * 新手加息收益回款状态
 * @type {{getDescription: AwardRefundStatus.getDescription}}
 */
var AwardRefundStatus = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "待处理";
            case 2:
                return "处理中";
            case 3:
                return "处理成功";
            case 4:
                return "处理失败";
            default:
                return null;
        }
    }
}




