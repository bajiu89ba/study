package com.neusoft.crm.controller;


import com.neusoft.crm.entity.Customer;
import com.neusoft.crm.service.ICustomerService;
import com.neusoft.crm.service.impl.CustomerServiceImpl;
import com.neusoft.crm.tools.CommonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author bajiu
 * @since 2023-06-20
 */
@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private ICustomerService customerService;

    @GetMapping("/qyr/customer")
    public CommonResult queryCustomer(String select,String qryvalue){
        return customerService.queryCustomer(select,qryvalue);
    }

    @GetMapping("/qry/c4contact")
    public CommonResult queryC4contact(String select,String qryvalue,String empno){
        return customerService.queryC4contact(select,qryvalue,empno);
    }

    @GetMapping("/qry/c4assign")
    public CommonResult queryc4assign(String select,String qryvalue,String empno,String area){
        return customerService.queryC4assign(select,qryvalue,empno,area);
    }

    @PutMapping("/mod/assignResponsible")
    public CommonResult mod(@RequestBody Customer customer){
        boolean b = customerService.updateById(customer);
        return new CommonResult(b);
    }
}
