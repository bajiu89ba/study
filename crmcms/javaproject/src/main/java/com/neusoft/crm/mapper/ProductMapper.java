package com.neusoft.crm.mapper;

import com.neusoft.crm.entity.Product;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author bajiu
 * @since 2023-06-19
 */
public interface ProductMapper extends BaseMapper<Product> {

    @Select("select * from product limit #{index},#{pageSize}")

    List<Product> getPageList(int index, int pageSize);
}
