/**
 * 操作状态
 * @type {{getDescription: OperatorStatus.getDescription}}
 */
var OperatorStatus = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "<span style='color: #00dd1c'>正常</span>";
            case 2:
                return "<span style='color: #ab1e1e'>锁定</span>";
            case 3:
                return "禁用";
        }
    }
}

/**
 * 用户类型
 * @type {{getDescription: AuthType.getDescription}}
 */
var AuthType = {
    getDescription: function (index) {
        switch (index) {
            case 1:
                return "超级管理员";
            case 2:
                return "普通用户";
        }
    }
}

