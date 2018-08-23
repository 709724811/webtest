package com.webtest.test.domain;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;

import java.io.Serializable;

/**
 * @author lanruiyao
 * @date 2018/7/31
 * @copyright www.qguanzi.com Inc. All rights reserved.
 * @since v5.0
 */
public class BaseReq implements Serializable {

    @Override
    public String toString() {
        SerializerFeature[] serializerFeatures = new SerializerFeature[]{SerializerFeature.WriteMapNullValue,
                SerializerFeature.UseISO8601DateFormat};
        return JSON.toJSONString(this, serializerFeatures);
    }

}
