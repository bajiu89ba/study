package com.neusoft.crm.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.neusoft.crm.entity.Customer;
import com.neusoft.crm.entity.Emp;
import com.neusoft.crm.entity.Sysinfo;
import com.neusoft.crm.mapper.EmpMapper;
import com.neusoft.crm.service.IEmpService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.neusoft.crm.tools.CommonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 员工信息表 服务实现类
 * </p>
 *
 * @author bajiu
 * @since 2023-06-18
 */
@Service
public class EmpServiceImpl extends ServiceImpl<EmpMapper, Emp> implements IEmpService {

    @Autowired
    private EmpMapper empMapper;

    @Override
    public CommonResult login(Emp emp) {
        Emp e=empMapper.login(emp);
        if(e==null){
            return new CommonResult(null,204);
        }
        return new CommonResult(e);
    }

    @Override
    public CommonResult queryEmps(String select, String inputvalue) {
        QueryWrapper<Emp> wrapper=new QueryWrapper<>();
        wrapper.like(select,inputvalue);
        List<Emp> list=list(wrapper);
        return new CommonResult(list);
    }

    @Override
    public CommonResult qryResponsible(String areano) {
        List<Customer>list= this.baseMapper.qryResponsible(areano);

        if(list==null||list.size()==0){
            return new CommonResult(null,204);
        }
        return new CommonResult(list);
    }
}
