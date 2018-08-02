package com.qgz.test.model.dao;

import com.qgz.test.model.entity.Customer;
import org.apache.ibatis.annotations.Param;

import java.util.List;


/**
 * @类描述：
 * @创建人：luohao
 * @创建时间：2016年8月5日
 * @版权：Copyright (c) 深圳市牛鼎丰科技有限公司-版权所有.
 */
public interface CustomerDao {

    
    /**
     * 
     * 方法描述：获取用户信息
     * @param number
     * @return
     */
    List<Customer> queryCustomerList(@Param("number") Integer number);
    


}
