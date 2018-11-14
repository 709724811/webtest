<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<title>登录 - 平台运营系统</title>
<link rel="stylesheet" href="<%=request.getContextPath()%>/resouces/css/login_new.css">
<script src="<%=request.getContextPath()%>/resouces/js/jquery.min.js"></script>
	<script>
		function clearErrorTips() {
			$("#errorTipsId").text("");
		}
	</script>
</head>
<body class="easyui-layout">
	<div data-options="region:'north'" style="overflow: hidden;">
		<div class="login_top logo">
			<div class="compay">
				<div id="prodLogo" class="prod_logo">
					<img id="companyLogo" src="<%=request.getContextPath() %>/resouces/images/login/logo.png" height="40"/>
				</div>
				<div id="prodName" class="prod_name">平台</div>
				<div class="separate_line"></div>
				<div id="shortName" class="short_name">运营系统</div>
				<div style="clear: both"></div>
			</div>
		</div>
	</div>
	<div data-options="region:'center'" style="height: 450px;">
		<div class="top_line"></div>
		<div class="middle_inner">
			<div class="middle_ct">
				 
			</div>
			<form action="<%=request.getContextPath() %>/doLogin" name="myform" method="post">
				<div class="login_form">
					<div class="login_title">系统登录</div>
					<div class="login_input">
						<input name="userName" placeholder="用户名" maxlength="20" onclick="clearErrorTips()">
					</div>
					<div class="login_input" style="border-top: 0px">
						<input type="password" name="password" maxlength="50" placeholder="请输入密码" onclick="clearErrorTips()"/>
					</div>
					<div class="login_button">
						<div class="login_ok">
							<input type="submit" class="btn" value="登&nbsp录" />
						</div>
					</div>
					<div id="errorTipsId" style="text-align: center;color: red">${requestScope.loginError}</div>
				</div>
			</form>
		</div>
		<div class="bottom_line"></div>
	</div>
	<div data-options="region:'south'">
		<div class="login_bottom company">
			版权所有©2016xx市前海科技有限公司</a>
		</div>
	</div>
</body>
</html>