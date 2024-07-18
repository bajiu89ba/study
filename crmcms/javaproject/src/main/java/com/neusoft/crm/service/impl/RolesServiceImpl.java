package com.neusoft.crm.service.impl;

import com.neusoft.crm.entity.Roles;
import com.neusoft.crm.entity.Sysinfo;
import com.neusoft.crm.mapper.RolesMapper;
import com.neusoft.crm.service.IRolesService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.neusoft.crm.tools.CommonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author bajiu
 * @since 2023-06-19
 */
@Service
public class RolesServiceImpl extends ServiceImpl<RolesMapper, Roles> implements IRolesService {



    @Override
    public CommonResult getMenu(String roleno) {
        List<Sysinfo>list= this.baseMapper.getMenu(roleno);

        if(list==null||list.size()==0){
            return new CommonResult(null,204);
        }
        return new CommonResult(list);
    }
}
