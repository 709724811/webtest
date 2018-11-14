package com.webtest.test.controller;

import com.webtest.test.common.constants.SystemConstants;
import com.webtest.test.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import redis.clients.jedis.JedisCluster;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.UUID;

/**
 * @author lanruiyao
 * @date 2018/7/31
 * @since v5.0
 */
@Controller
public class LoginController {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public static final String LOGIN = "login";

    public static final String LOGIN_ERROR = "loginError";

    @Autowired
    private JedisCluster jedisCluster;

    @RequestMapping("/main")
    public String main(HttpServletRequest request) {
        return "/login";
    }

    @RequestMapping("/")
    public String toLogin() {
        return LOGIN;
    }

    @RequestMapping("/doLogin")
    public String login(String userName, String password, Model model, HttpSession session,
                        HttpServletRequest request, HttpServletResponse response) {
        if (SystemConstants.USER_NAME.equals(userName) && SystemConstants.PASSWORD.equals(password)) {
            Cookie cookie = new Cookie(SystemConstants.COOKIE_NAME, userName + SystemConstants.SPLIT_WORD + password);
            cookie.setMaxAge(60 * 60 * 24 * 14);//保存两周
            cookie.setPath("/");
            String token = UUID.randomUUID().toString();
            //设置key，100秒过期
            jedisCluster.setex(SystemConstants.TOKEN_REDIS_KEY + userName, 100, token);
            response.addCookie(cookie);

            Cookie tokenCookie = new Cookie(SystemConstants.COOKIE_TOKEN, token);
            tokenCookie.setMaxAge(60 * 60 * 24 * 14);//保存两周
            tokenCookie.setPath("/");
            response.addCookie(tokenCookie);

            User user = new User();
            user.setLoginTime(new Date());
            user.setUserName(userName);
            user.setName(userName);
            user.setNumber(110);
            session.setAttribute("user", user);
            return "/index";
        }
        request.setAttribute(LOGIN_ERROR, "账户名或登录密码不正确，请重新输入。");
        logger.info("登录错误.userName={},password={}", userName, password);
        return LOGIN;
    }

}
