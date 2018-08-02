<%@ page trimDirectiveWhitespaces="true" %>
<%@ page isELIgnored="false" %>
<%@ page pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt_rt" %>
<%
    String rootPath = request.getContextPath();
    request.setAttribute("rootPath", rootPath);
%>

<link rel="stylesheet" type="text/css" href="${rootPath}/resouces/js/jquery-easyui-1.5/themes/default/easyui.css"/>
<link rel="stylesheet" type="text/css" href="${rootPath}/resouces/js/jquery-easyui-1.5/themes/icon.css"/>
<link rel="stylesheet" type="text/css" href="${rootPath}/resouces/js/jquery-easyui-1.5/themes/common-easyui.css"/>
<script type="text/javascript" src="${rootPath}/resouces/js/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="${rootPath}/resouces/js/jquery.min.js"></script>
<script type="text/javascript" src="${rootPath}/resouces/js/jquery-easyui-1.5/jquery.easyui.min.js"></script>
<script type="text/javascript" src="${rootPath}/resouces/js/jquery-easyui-1.5/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="${rootPath}/resouces/js/common/common.js"></script>
<script type="text/javascript" src="${rootPath}/resouces/js/common/common_enum.convert.js"></script>
<script type="text/javascript" src="${rootPath}/resouces/js/common/common_validate.js"></script>



