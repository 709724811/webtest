<%@ page language="java" session="false" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html style="font-size: 100px;">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <%
        String rootPath = request.getContextPath();
        request.setAttribute("rootPath", rootPath);
    %>
    <title>500</title>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no, email=no">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <style type="text/css">
        .err-box {
            position: fixed;
            left: 50%;
            top: 25%;
            margin-left: -32.5%;
        }

        .err-tit {
            text-align: center;
            font: .14rem/.28rem "Microsoft YaHei";
            color: #ffc700;
        }

        .err-tit h4 {
            display: block;
            font: .18rem "Microsoft YaHei";
        }

        .err-box img {
            display: block;
            width: 2.69rem;
            margin: 0 auto;
        }

        .err-attention {
            padding-top: .05rem;
            text-align: center;
            font: .14rem/.22rem "Microsoft YaHei";
            color: #929292;
        }
    </style>
</head>


<body>
<div class="wrap">
    <div class="err-box">
        <div class="err-tit">
            <h4>500系统异常</h4>
        </div>
        <img src='${rootPath}/resouces/images/404_backlate.png'>
    </div>

</div>
</body>
</html>