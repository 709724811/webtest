package com.webtest.test.controller;

import com.alibaba.fastjson.JSONObject;

import java.util.List;

/**
 * @author liumin
 * @Description
 * @date 2017/5/9
 * @copyright www.qguanzi.com Inc. All rights reserved.
 */
public class BaseController<T> {

    protected JSONObject convertToDatagridList(Integer code,String msg,List<T> objects) {
        JSONObject json = new JSONObject();
        json.put("code", code);
        json.put("msg", msg);
        json.put("total", objects.size());
        json.put("rows", objects);
        return json;
    }

    protected JSONObject convertToDatagrid(Integer code,String msg ,Object object) {
        JSONObject json = new JSONObject();
        json.put("code", code);
        json.put("msg", msg);
        json.put("object", object);
        return json;
    }

}
