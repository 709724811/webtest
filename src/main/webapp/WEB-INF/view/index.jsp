<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
    <title> 运营管理系统</title>
    <%@ include file="common/common.jsp" %>
    <link rel="stylesheet" type="text/css" href="${rootPath}/resouces/css/easyui/homepage.css">
</head>
<body class="easyui-layout">

<div region="north" class="heder-box">
    <div class="north-title">-运营管理系统</div>
    <div class="north-name">
        姓名：${sessionScope.USERNAME}
        <a href="javascript:void(0)" class="north-a" onclick="$('#dlg').dialog('open')"> 修改密码</a>
        <a class="north-a" href="${rootPath}/logout"> 退出登录</a>
    </div>
    <div id="dlg"></div>
</div>

<div region="west" class="west-title" split="true" title="导航菜单">
    <div id="menu" class="easyui-accordion" data-options="fit:true,border:false">

                    <div class="tab-cl" title="测试">
                        <li><a href="#" rel="queryUser.do">用户列表</a></li>
                    </div>

        <div class="tab-cl" title="跨域">
            <li><a href="http://www.lanry.com" rel="http://www.lanry.com/queryUser.do">跨域列表</a></li>
        </div>

    </div>
</div>

<div region="center">
    <div id="tabs" class="easyui-tabs cent er-tabs" fit="true" border="false" plain="true"></div>
</div>

<div region="south" class="south-div">
    <div class="south-info">版权所有 &copy; 2016xx市前海科技有限公司</div>
</div>
<script type="text/javascript">
    function OpenTab(title, url, icon) {
        if ($("#tabs").tabs('exists', title)) {
            $("#tabs").tabs('select', title);
        } else {
            $("#tabs").tabs('add', {
                title: title,
                content: createTabContent(url),
                closable: true,
                icon: icon
            });
        }
    }

    function createTabContent(url) {
        return '<iframe class="main_view" width="100%" height="98%" scrolling="auto" frameborder="0" src="' + url +
                '"></iframe>';
    }

    $(function () {
        $("#menu a").click(function () {
            var tagName = $(this).attr("class");
            if (tagName != "accordion-collapse" && tagName != "accordion-collapse accordion-expand") {
                $('.easyui-accordion li').removeClass('a-cl');
                $(this).parent().addClass('a-cl').siblings().removeClass('a-cl');
                var title = $(this).text();
                var url = $(this).attr("rel");
                var icon = $(this).attr("icon");
                OpenTab(title, url, icon);
                return false;
            }
        });
        $('#dlg').dialog({
            title: '修改密码',
            width: '40%',
            height: '40%',
            cache: false,
            closed: true,
            href: '${rootPath}/user/update/pwd'
        });
    });

</script>
</body>
</html>
