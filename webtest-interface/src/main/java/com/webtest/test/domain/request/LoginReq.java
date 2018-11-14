package com.webtest.test.domain.request;


import com.webtest.test.base.BaseReq;

/**
 * @author lanruiyao
 * @date 2018/7/31
 * @since v5.0
 */
public class LoginReq extends BaseReq {

    private String username;

    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
