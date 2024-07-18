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
 * @since 2023-06-19
 */
public class Dict implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "dictno", type = IdType.AUTO)
    private Integer dictno;

    private String title;

    private String info;

    private String category;

    public Integer getDictno() {
        return dictno;
    }

    public void setDictno(Integer dictno) {
        this.dictno = dictno;
    }
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Dict{" +
            "dictno=" + dictno +
            ", title=" + title +
            ", info=" + info +
            ", category=" + category +
        "}";
    }
}
