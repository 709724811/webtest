package com.webtest.test.model.dao;

import com.webtest.test.model.entity.Customer;
import org.apache.ibatis.annotations.Param;

import java.util.List;


/**
 * @类描述：
 * @创建时间：2016年8月5日
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
