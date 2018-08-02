<%@ page language="java" contentType="text/html; charset=UTF-8"
         import="com.alibaba.fastjson.JSON"
         pageEncoding="UTF-8" %>
<%@ page import="com.alibaba.fastjson.JSONObject" %>
<%@ page import="com.baidu.ueditor.ActionEnter" %>
<%@ page import="com.xiaoniuapp.oms.admin.common.aliyun.OSSService" %>
<%@ page import="org.springframework.web.context.ContextLoaderListener" %>
<%@ page import="java.io.File" %>
<%@ page import="java.io.FileInputStream" %>
<%@ page import="java.io.InputStream" %>



<%@ page trimDirectiveWhitespaces="true" %>
<%

    request.setCharacterEncoding("utf-8");
    response.setHeader("Content-Type", "text/html");
    String rootPath = application.getRealPath("/");
    try {
        String result = new ActionEnter(request, rootPath).exec();
        JSONObject jsonObject = JSON.parseObject(result);
        String url = (String) jsonObject.get("url");
        if (url == null) {
            out.write(result);
            return;
        }
        OSSService oSSService = (OSSService) ContextLoaderListener.getCurrentWebApplicationContext().getBean
                ("oSSService");
        File file = new File(rootPath + url);
        InputStream inputStream = new FileInputStream(file);
        oSSService.putObject(inputStream, url);
        file.delete();
        out.write(result);
    } catch (Exception e) {
        e.printStackTrace();
    }

%>