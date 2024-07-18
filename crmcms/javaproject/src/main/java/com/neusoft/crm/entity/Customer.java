package com.neusoft.crm.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 * 
 * </p>
 *
 * @author bajiu
 * @since 2023-06-20
 */
public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "customerno", type = IdType.AUTO)
    private Integer customerno;

    private String cid;

    private String cname;

    private String mincode;

    private String areano;

    private Integer cgrade;

    /**
     * 婊℃剰搴?
     */
    private Integer satisfaction;

    private LocalDateTime dt;

    private String deposit;

    private String account;

    private String zipcode;

    private String url;

    private Integer provider;

    private Integer servicer;

    private Integer controller;

    private String status;

    public Integer getCustomerno() {
        return customerno;
    }

    public void setCustomerno(Integer customerno) {
        this.customerno = customerno;
    }
    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }
    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }
    public String getMincode() {
        return mincode;
    }

    public void setMincode(String mincode) {
        this.mincode = mincode;
    }
    public String getAreano() {
        return areano;
    }

    public void setAreano(String areano) {
        this.areano = areano;
    }
    public Integer getCgrade() {
        return cgrade;
    }

    public void setCgrade(Integer cgrade) {
        this.cgrade = cgrade;
    }
    public Integer getSatisfaction() {
        return satisfaction;
    }

    public void setSatisfaction(Integer satisfaction) {
        this.satisfaction = satisfaction;
    }
    public LocalDateTime getDt() {
        return dt;
    }

    public void setDt(LocalDateTime dt) {
        this.dt = dt;
    }
    public String getDeposit() {
        return deposit;
    }

    public void setDeposit(String deposit) {
        this.deposit = deposit;
    }
    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }
    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
    public Integer getProvider() {
        return provider;
    }

    public void setProvider(Integer provider) {
        this.provider = provider;
    }
    public Integer getServicer() {
        return servicer;
    }

    public void setServicer(Integer servicer) {
        this.servicer = servicer;
    }
    public Integer getController() {
        return controller;
    }

    public void setController(Integer controller) {
        this.controller = controller;
    }
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Customer{" +
            "customerno=" + customerno +
            ", cid=" + cid +
            ", cname=" + cname +
            ", mincode=" + mincode +
            ", areano=" + areano +
            ", cgrade=" + cgrade +
            ", satisfaction=" + satisfaction +
            ", dt=" + dt +
            ", deposit=" + deposit +
            ", account=" + account +
            ", zipcode=" + zipcode +
            ", url=" + url +
            ", provider=" + provider +
            ", servicer=" + servicer +
            ", controller=" + controller +
            ", status=" + status +
        "}";
    }
}
