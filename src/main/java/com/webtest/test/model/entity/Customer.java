package com.webtest.test.model.entity;

import com.webtest.test.utils.AesEncript;
import org.apache.commons.lang.StringUtils;

import java.io.Serializable;
import java.util.Date;

/**
 * @类描述：
 * @创建人：luohao
 * @创建时间：2016年8月5日
 * @版权：Copyright (c) 深圳市牛鼎丰科技有限公司-版权所有.
 */
public class Customer implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;// 主键ID

	private String systemType;// 业务编码（内部系统类型）

	private String memberNo;// 用户编号

	private String loginName;// 登录名

	private String loginPwd;// 登录密码

	private String mobile;// 手机号

	private String memberName;// 用户姓名
	
	private String memberType;// 用户类型（1：个人用户，2：企业用户）

	private String gender;// 姓名（1男，2女）

	private String status;// 用户状态 1正常、2注销、3锁定
	
	private String faceFlag;  // 面部识别标记 N未识别,Y:已识别,F:识别失败

	private String nameAuthFlag;// 实名认证标识 N未实名认证 Y已实名认证

	private String certType;// 证件类型

	private String certNo;// 证件号码

	private Date birthday;// 生日

	private Integer memberLevel;// 会员等级:1,2,3,4,5

	private String email;// 邮箱

	private String encType;// 加密方式 1：sha1 2：special_md5

	private Date createDate;// 创建时间

	private Date updateDate;// 更新时间

	private Integer version;// 数据版本

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the systemType
	 */
	public String getSystemType() {
		return systemType;
	}

	/**
	 * @param systemType
	 *            the systemType to set
	 */
	public void setSystemType(String systemType) {
		this.systemType = systemType;
	}

	/**
	 * @return the memberNo
	 */
	public String getMemberNo() {
		return memberNo;
	}

	/**
	 * @param memberNo
	 *            the memberNo to set
	 */
	public void setMemberNo(String memberNo) {
		this.memberNo = memberNo;
	}

	/**
	 * @return the loginName
	 */
	public String getLoginName() {
		return loginName;
	}

	/**
	 * @param loginName
	 *            the loginName to set
	 */
	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	/**
	 * @return the loginPwd
	 */
	public String getLoginPwd() {
		return loginPwd;
	}

	/**
	 * @param loginPwd
	 *            the loginPwd to set
	 */
	public void setLoginPwd(String loginPwd) {
		this.loginPwd = loginPwd;
	}

	/**
	 * @return the mobile
	 */
	public String getMobile() {
		return mobile;
	}

	/**
	 * @param mobile
	 *            the mobile to set
	 */
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	/**
	 * @return the memberName
	 */
	public String getDecodeMemberName() {
		return AesEncript.decrypt(memberName);
	}
	
	/**
	 * @return the memberName
	 */
	public String getMemberName() {
		return memberName;
	}

	/**
	 * @param memberName
	 *            the memberName to set
	 */
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	
	public void setEncodeMemberName(String memberName) {
		if(StringUtils.isEmpty(memberName)){
			this.memberName = memberName;
		}else{
			this.memberName = AesEncript.encrypt(memberName.getBytes());
		}
	}

	/**
	 * @return the gender
	 */
	public String getGender() {
		return gender;
	}

	/**
	 * @param gender
	 *            the gender to set
	 */
	public void setGender(String gender) {
		this.gender = gender;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status
	 *            the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
     * @return the faceFlag
     */
    public String getFaceFlag() {
        return faceFlag;
    }

    /**
     * @param faceFlag the faceFlag to set
     */
    public void setFaceFlag(String faceFlag) {
        this.faceFlag = faceFlag;
    }

    /**
	 * @return the nameAuthFlag
	 */
	public String getNameAuthFlag() {
		return nameAuthFlag;
	}

	/**
	 * @param nameAuthFlag
	 *            the nameAuthFlag to set
	 */
	public void setNameAuthFlag(String nameAuthFlag) {
		this.nameAuthFlag = nameAuthFlag;
	}

	/**
	 * @return the certType
	 */
	public String getCertType() {
		return certType;
	}

	/**
	 * @param certType
	 *            the certType to set
	 */
	public void setCertType(String certType) {
		this.certType = certType;
	}

	/**
	 * @return the certNo
	 */
	public String getCertNo() {
		return certNo;
	}
	
	/**
	 * @return the certNo
	 */
	public String getDecodeCertNo() {
		return AesEncript.decrypt(certNo);
	}

	/**
	 * @param certNo
	 *            the certNo to set
	 */
	public void setCertNo(String certNo) {
		this.certNo = certNo;
	}
	
	public void setEncodeCertNo(String certNo) {
		if(StringUtils.isEmpty(certNo)){
			this.certNo = certNo;
		}else{
			this.certNo = AesEncript.encrypt(certNo.getBytes());
		}
	}

	/**
	 * @return the birthday
	 */
	public Date getBirthday() {
		return birthday;
	}

	/**
	 * @param birthday
	 *            the birthday to set
	 */
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	/**
	 * @return the memberLevel
	 */
	public Integer getMemberLevel() {
		return memberLevel;
	}

	/**
	 * @param memberLevel
	 *            the memberLevel to set
	 */
	public void setMemberLevel(Integer memberLevel) {
		this.memberLevel = memberLevel;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email
	 *            the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the encType
	 */
	public String getEncType() {
		return encType;
	}

	/**
	 * @param encType
	 *            the encType to set
	 */
	public void setEncType(String encType) {
		this.encType = encType;
	}

	/**
	 * @return the createDate
	 */
	public Date getCreateDate() {
		return createDate;
	}

	/**
	 * @param createDate
	 *            the createDate to set
	 */
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	/**
	 * @return the updateDate
	 */
	public Date getUpdateDate() {
		return updateDate;
	}

	/**
	 * @param updateDate
	 *            the updateDate to set
	 */
	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

	/**
	 * @return the version
	 */
	public Integer getVersion() {
		return version;
	}

	/**
	 * @param version
	 *            the version to set
	 */
	public void setVersion(Integer version) {
		this.version = version;
	}

	public String getMemberType() {
		return memberType;
	}

	public void setMemberType(String memberType) {
		this.memberType = memberType;
	}

}
