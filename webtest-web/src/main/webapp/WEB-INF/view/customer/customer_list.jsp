<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@ include file="/WEB-INF/view/common/common.jsp" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>电子签章生成记录</title>

</head>
<body class="easyui-layout">
<div region="center">

    <table class="easyui-datagrid" title="用户记录" id="seal_record" pagination="true" rownumbers="true"
           style="width:100%;height:95%">
    </table>

</div>
</body>
<script type="text/javascript">


    $(document).ready(function () {

        $('#seal_record').datagrid({
            method: 'post',
            url: '${rootPath}/customer/queryCustomer.do',
            pageSize: 20,
            loading: true,
            pageList: [10, 20, 30, 40],
            emptyMsg: '无查询数据',
            toolbar: '#toolbar',
            columns: [[
                {field: 'id', title: 'id', align: 'center', width: 100},
                {field: 'memberNo', title: '用户id', align: 'center', width: 300},
                {field: 'memberName', align: 'center', title: '用户姓名', width: 400},
                {field: 'mobile', align: 'center', title: '手机号码', width: 150},
                {field: 'memberLevel', align: 'center', title: '会员级别', width: 250},
                {field: 'nameAuthFlag', align: 'center', title: '是否实名', width: 150}
            ]],
            onBeforeLoad: function (param) {
                param.pageIndex = param.page;
                param.pageSize = param.rows;
           },
            onLoadSuccess: function (data) {
                if (data.code > 0) {
                    $.messager.alert('提示信息', data.msg, '状态');
                    return;
                }
                $('#seal_record').datagrid('fixRowHeight');
            }
        });
    });

</script>
</html>
