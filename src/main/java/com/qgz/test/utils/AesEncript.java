package com.qgz.test.utils;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.Hex;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

/**
 *
 * @类描述：
 *
 * @创建人：颜彩云
 *
 * @创建时间：2017年9月6日
 *
 * @版权：Copyright (c) 深圳市牛鼎丰科技有限公司-版权所有.
 *
 */

public class AesEncript {

	private static final String PADDING = "AES/ECB/PKCS5Padding";
	private static final String CIPHER_ALGORITHM = "AES";
    private static final Logger logger = LoggerFactory.getLogger(AesEncript.class);
    private static final String KEY = "654f5f7e5671b2a2f19af22343c80d86";
    private static byte[] KEY_BYTE = null;
    
    static{
    	try {
    		KEY_BYTE = Hex.decodeHex(KEY.toCharArray());
		} catch (Exception e) {
			// TODO: handle exception
		}
    }
    

    /**
     * AES加密
     * @param data 加密数据
     * @param key 加密密钥
     * @return 返回Base64编码后的字符串
     */
	public static String encrypt(byte[] data) {
		try {
			SecretKeySpec keySpec = new SecretKeySpec(KEY_BYTE, CIPHER_ALGORITHM);
			Cipher cipher = Cipher.getInstance(PADDING);
			cipher.init(Cipher.ENCRYPT_MODE, keySpec);
			byte[] result = cipher.doFinal(data);
			return Base64.encodeBase64String(result);
		} catch (Exception e) {
			logger.error("encrypt@, AES加密出现问题",e);
		}
		return null;
	}

	/**
	 * AES解密
	 * @param data 需要解密的数据
	 * @return 
	 */
	public static String decrypt(String data) {
		if(data == null){
			return null;
		}
		try {
			SecretKeySpec keySpec = new SecretKeySpec(KEY_BYTE,CIPHER_ALGORITHM);
			Cipher cipher = Cipher.getInstance(PADDING);
			cipher.init(Cipher.DECRYPT_MODE, keySpec);
			byte[] result = cipher.doFinal(Base64.decodeBase64(data.getBytes()));
			return new String(result,"UTF-8");
		} catch (Exception e) {
			logger.error("decrypt@, AES解密出现问题",e);
		}
		return null;
	}
	
	public static void main(String[] args) {
		String s = encrypt("".getBytes());
		System.out.println(s);
		System.out.println(s.length());
		String a = decrypt(s);
		System.out.println(new String(a));
		
	}

}
