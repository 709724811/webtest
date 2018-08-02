package com.qgz.test.model.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by Administrator on 2016/9/19.
 */
public class User implements Serializable{

    private int  number ;
    private String name ;

    private String userName;

    private Date loginTime;

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Date getLoginTime() {
        return loginTime;
    }

    public void setLoginTime(Date loginTime) {
        this.loginTime = loginTime;
    }
}
