package com.neusoft.crm.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author bajiu
 * @since 2023-06-20
 */
public class Contact implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "contactno", type = IdType.AUTO)
    private Integer contactno;

    private Integer customerno;

    private String cname;

    private String gender;

    private String job;

    private String phone;

    private String tel;

    private String info;

    public Integer getContactno() {
        return contactno;
    }

    public void setContactno(Integer contactno) {
        this.contactno = contactno;
    }
    public Integer getCustomerno() {
        return customerno;
    }

    public void setCustomerno(Integer customerno) {
        this.customerno = customerno;
    }
    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }
    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    @Override
    public String toString() {
        return "Contact{" +
            "contactno=" + contactno +
            ", customerno=" + customerno +
            ", cname=" + cname +
            ", gender=" + gender +
            ", job=" + job +
            ", phone=" + phone +
            ", tel=" + tel +
            ", info=" + info +
        "}";
    }
}
