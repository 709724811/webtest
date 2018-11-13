package com.webtest.test.controller;

import com.alibaba.fastjson.JSONObject;
import com.webtest.test.model.entity.Customer;
import com.webtest.test.model.dao.CustomerDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author lanruiyao
 * @date 2018/8/1
 * @since v5.0
 */
@Controller
public class UserController extends BaseController {

    @Autowired
    private CustomerDao customerDao;


    @RequestMapping("/queryUser.do")
    public String queryUser(Model model) {
        return "/customer/customer_list";
    }

    @RequestMapping("/customer/queryCustomer.do")
    @ResponseBody
    public JSONObject queryUser(Integer pageSize) {
        List<Customer> rlt = customerDao.queryCustomerList(pageSize);
        return convertToDatagridList(0, "成功", rlt);
    }
}
