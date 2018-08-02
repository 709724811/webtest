/**
 * 数据状态
 * @type {{getDescription: DataStatus.getDescription}}
 */
var DataStatus = {
    getDescription: function (index) {
        switch (index) {
            case -1:
                return "<span style='color: #ab1e1e'>已删除</span>";
            case 1:
                return "<span style='color: #00dd1c'>有效</span>";
        }
    }
}


