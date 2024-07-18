package com.neusoft.crm.mapper;

import com.neusoft.crm.entity.Customer;
import com.neusoft.crm.entity.Emp;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 * 员工信息表 Mapper 接口
 * </p>
 *
 * @author bajiu
 * @since 2023-06-18
 */
public interface EmpMapper extends BaseMapper<Emp> {
Emp login(@Param("param")Emp emp);

    List<Customer> qryResponsible(String areano);
}
