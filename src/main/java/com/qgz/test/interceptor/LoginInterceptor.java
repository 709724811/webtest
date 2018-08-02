package com.qgz.test.interceptor;

import com.alibaba.druid.util.StringUtils;
import com.qgz.test.common.constants.SystemConstants;
import org.apache.commons.lang.ArrayUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import redis.clients.jedis.JedisCluster;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author lanruiyao
 * @date 2018/7/31
 * @copyright www.qguanzi.com Inc. All rights reserved.
 * @since v5.0
 */
public class LoginInterceptor extends HandlerInterceptorAdapter {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private JedisCluster jedisCluster;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws
            Exception {
        Cookie[] cookies = request.getCookies();
        if (cookies == null || ArrayUtils.isEmpty(cookies)) {
            logger.warn("preHandle|cookie为空");
            request.getRequestDispatcher("/main").forward(request, response);
            return false;
        }
        String userName = null;
        String token = null;
        for (Cookie cookie : cookies) {
            logger.info("preHandle|cookie值 = name:{},value:{}", cookie.getName(), cookie.getValue());
            if (SystemConstants.COOKIE_NAME.equals(cookie.getName())) {
                String value = cookie.getValue();
                String[] values = value.split(SystemConstants.SPLIT_WORD);
                if (ArrayUtils.isEmpty(values)) {
                    logger.error("preHandle|cookie格式错误，找不到指定值");
                    request.getRequestDispatcher("/main").forward(request, response);
                    return false;
                }
                userName = values[0];
            }
            if (SystemConstants.COOKIE_TOKEN.equals(cookie.getName())) {
                token = cookie.getValue();
                if (StringUtils.isEmpty(token)) {
                    logger.error("preHandle|cookie格式错误，找不到指定token");
                    request.getRequestDispatcher("/main").forward(request, response);
                    return false;
                }
            }
        }
        String tokenRedis = jedisCluster.get(SystemConstants.TOKEN_REDIS_KEY + userName);
        if (tokenRedis == null || !tokenRedis.equals(token)) {
            logger.error("preHandle|登录超时或者错误，token={},tokenRedis={}", token, tokenRedis);
            request.getRequestDispatcher("/main").forward(request, response);
            return false;
        }
        return true;
    }

}
