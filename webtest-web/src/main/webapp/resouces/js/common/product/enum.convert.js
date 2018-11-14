/**
 * 获取产品类型描述
 * @type {{getDescription: ProductType.getDescription}}
 */
var ProductType = {
    getDescription: function (index) {
        switch (index) {
            case 1001:
                return "新手专享";
            case 1101:
                return "天添牛";
            case 1102:
                return "优益宝";
            case 1201:
                return "信托";
            case 1301:
                return "闪赚宝";
            case 1302:
                return "闪进宝";
            case 1401:
                return "0元购机";
            case 1501:
                return "月息宝";
            case 1601:
                return "闪利宝";
            case 1602:
                return "闪利宝C款";
            case 1701:
                return "浮动期";
            case 1702:
                return "定活宝";
            case 1801:
                return "安盈宝";
            case 1802:
                return "安益宝";
            case 1901:
                return "分期宝";
            case 2101:
                return "指数牛";
            case 2201:
                return "日益宝";
            case 3101 :
                return "活期宝";
            case 3201:
                return "零活宝";
            case 1902:
                return "钱信宝";
            default:
                return null;
        }
    }
}

/**
 * 获取产品状态描述
 * @type {{getDescription: ProductStatus.getDescription}}
 */
var ProductStatus = {
    getDescription: function (index) {
        switch (index) {
            case -1:
                return "<span style='color: #ab1e1e'>已删除</span>";
            case 1:
                return "<span style='color: #ACCD3C'>待审核</span>";
            case 2:
                return "<span style='color: #00dd1c'>销售中</span>";
            case 3:
                return "<span style='color: #1006F1'>已售完</span>";
            case 4:
                return "<span style='color: #2fa4e7'>回款中</span>";
            case 5:
                return "<span style='color: #117700'>已回款</span>";
            case 8:
                return "<span style='color: #770088'>数据异常</span>";
            case 9:
                return "<span style='color: #95B8E7'>预上架</span>";
            case 10:
                return "<span style='color: #95B8E7'>流标</span>";
            case 11:
                return "<span style='color: #95B8E7'>募集告警</span>";
        }
    }
}

/**
 * 利率描述
 * @type {{getDescription: Rate.getDescription}}
 */
var Rate = {
    getDescription: function (index) {
        return index + "%";
    }
}

/**
 *投资状态描述
 * @type{{getDescription:InvestStatus.getDescription}}
 */
var InvestStatus = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "待支付";
            case 2:
                return "投资成功";
            case 3:
                return "已回款";
            case 4:
                return "支付失败";
            case 5:
                return "募集中";
            case 6:
                return "募集失败";
            case 7:
                return "监管行处理中";
            default:
                return null;
        }
    }
}

/**
 * 产品显示配置位置
 * @type {{getDescription: ProductShowPosition.getDescription}}
 */
var ProductShowPosition = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "首页";
            case 2:
                return "列表";
            case 3:
                return "产品分类";
        }
    }
}

/**
 * 赎回状态
 * @type{{getDescription:RedeemStatus.getDescription}}
 */
var RedeemStatus = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "不可赎回";
            case 2:
                return "可赎回";
            case 3:
                return "部分赎回";
            case 4:
                return "已赎回";
            default:
                return null;
        }
    }
}

/**
 * 产品详情显示位置
 * @type {{getDescription: ProductDetailsShowPage.getDescription}}
 */
var ProductDetailsShowPage = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "产品信息页";
            case 2:
                return "项目及借款人页";
            default:
                return null;
        }
    }
}

/**
 * 利率类型
 * @type{{getDescription:RateType.getDescription}}
 */
var RateType = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "基础利率";
            case 2:
                return "会员利率";
            case 3:
                return "活动利率";
            case 4:
                return "转让利率";
            case 5:
                return "募集利率";
            default:
                return null;
        }
    }
}

/**
 * 产品附属信息
 * @type {{getDescription: ProductFeatureType.getDescription}}
 */
var ProductFeatureType = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "产品详情";
            case 2:
                return "安全保障";
            case 3:
                return "产品协议";
            case 4:
                return "产品特点及适合人群";
            case 5:
                return "产品简介及原理";
            case 6:
                return "募集期收益";
            case 301:
                return "产品协议";
            case 302:
                return "信息咨询与管理服务协议";
            case 303:
                return "债权转让服务协议";
            default:
                return null;

        }
    }
}

/**
 * 赎回请求状态
 * @type{{getDescription:RedeemRequestStatus.getDescription}}
 */
var RedeemRequestStatus = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "待回款";
            case 2:
                return "回款中";
            case 3:
                return "已回款";
            case 4:
                return "回款失败";
            case 5:
                return "待确认";
            case 6:
                return "已撤销";
            default:
                return null;
        }
    }
}

/**
 * 广告类型
 * @type {{getDescription: ProductAdType.getDescription}}
 */
var ProductAdType = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "产品宣传";
            case 2:
                return "会员宣传";
            case 3:
                return "活动宣传";
            default:
                return null;
        }
    }
}

/**
 * 借款人类型
 * @type {{getDescription: BorrowerType.getDescription}}
 */
var BorrowerType = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "企业";
            case 2:
                return "个人";
            default:
                return null;
        }
    }
}

/**
 * 回款状态
 * @type{{getDescription:RefundStatus.getDescription}}
 */
var RefundStatus = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "待处理";
            case 2:
                return "回款中";
            case 3:
                return "已回款";
            case 4:
                return "回款失败";
            default:
                return null;
        }
    }
}
/**
 *广告显示位置
 *@type{{getDescription: ProductAdShowPosition.getDescription}}
 */
var ProductAdShowPosition = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "列表";
            case 2:
                return "详情页|列表";
            case 3:
                return "详情页";
        }
    }
}

/**
 * 广告是否登录
 * @type {{getDescription: ProductAdIsLogin.getDescription}}
 */
var ProductAdIsLogin = {
    getDescription: function (index) {
        switch (index) {
            case 0:
                return "全部";
            case 1:
                return "登录";
            case 2:
                return "不登录";
            default:
                return "全部";
        }
    }
}

/**
 * 加息利率类型
 * @type {{getDescription: RateType.getDescription}}
 */
var RateType = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "产品利率";
            case 2:
                return "会员加息";
            case 3:
                return "活动加息";
            case 5:
                return "募集利率";
        }
    }
}

var CreateEvent = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "注册";
            case 2:
                return "购买";
            case 4:
                return "脱敏";
        }
    }
}

var SealType = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "用户签名";
            case 2:
                return "公司签章";
        }
    }
}
var UserType = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "出借人";
            case 2:
                return "借款人";
            default:
                return "";
        }
    }
}

var holidayFlagType = {
    getDescription: function (index) {
        if (index) {
            return "节假日";
        } else {
            return "工作日";
        }
    }
}

var productBidType = {
    getDescription: function (index) {
        switch (index) {
            case 0:
                return "不限制";
            case 1:
                return "普通标";
            case 2:
                return "新手标";
            case 3:
                return "特惠标";
        }
    }
}

var ListModelType = {
    getDescription: function (index) {
        switch (index) {
            case 0:
                return "详情";
            case 1:
                return "列表";
        }
    }
}

var newbieFlagType = {
    getDescription: function (index) {
        if (index) {
            return "新手专区";
        } else {
            return "非新手专区";
        }
    }
}

var showFlag = {
    getDescription: function (index) {
        if (index) {
            return "显示";
        } else {
            return "不显示";
        }
    }
}

var ProductModuleBizType = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "产品类型";
            case 2:
                return "投标类型";
        }
    }
}

var PriorityType = {
    getDescription: function (index) {
        switch (index) {
            case 0:
                return "普通";
            case 1:
                return "优先";
        }
    }
}

var ProductPriStatus = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "有效";
            case 2:
                return "已完成";
            case -1:
                return "已删除";
        }
    }
}

var ReportType = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "日报";
            case 2:
                return "月报";
            case 3:
                return "年报";
        }
    }
}
var PeriodUnit = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "天";
            case 2:
                return "月";
        }
    }
}

var ReportStatus ={
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "成功";
            case 2:
                return "<span style='color:red'>失败</span>";
            default:
                return "暂无数据";
        }
    }
}

var IsTransfer ={
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "不可转让";
            case 2:
                return "可转让";
        }
    }
}

var RefundWay = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "一次性还本付息";
            case 2:
                return "按日计息";
            case 3:
                return "每月付息到期还本";
            case 4:
                return "等额本息";
            case 5:
                return "等本等息";
            case 6:
                return "等额等息";
            case 7:
                return "先息后本";
        }
    }
}
