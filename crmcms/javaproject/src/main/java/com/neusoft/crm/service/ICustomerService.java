package com.neusoft.crm.service;

import com.neusoft.crm.entity.Customer;
import com.baomidou.mybatisplus.extension.service.IService;
import com.neusoft.crm.tools.CommonResult;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bajiu
 * @since 2023-06-20
 */
public interface ICustomerService extends IService<Customer> {

    CommonResult queryCustomer(String select, String qryvalue);

    CommonResult queryC4contact(String select, String qryvalue, String empno);

    CommonResult queryC4assign(String select, String qryvalue, String empno, String area);
}
