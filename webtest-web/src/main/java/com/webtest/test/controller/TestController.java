package com.webtest.test.controller;

import com.webtest.test.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Administrator on 2016/9/19.
 */

@Controller("/test")
public class TestController {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/queryuser", method = RequestMethod.GET)
    @ResponseBody
    public User queryUser(@RequestParam int number){
        User user = new User();
        user.setNumber(number);
        user.setName("hehe");
        return user ;
    }

}
