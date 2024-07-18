package com.neusoft.crm.service;

import com.neusoft.crm.entity.Emp;
import com.baomidou.mybatisplus.extension.service.IService;
import com.neusoft.crm.tools.CommonResult;

/**
 * <p>
 * 员工信息表 服务类
 * </p>
 *
 * @author bajiu
 * @since 2023-06-18
 */
public interface IEmpService extends IService<Emp> {

    CommonResult login(Emp emp);

    CommonResult queryEmps(String select, String inputvalue);

    CommonResult qryResponsible(String areano);
}
