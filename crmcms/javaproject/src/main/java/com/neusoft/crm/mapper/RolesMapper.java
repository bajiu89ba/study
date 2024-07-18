package com.neusoft.crm.mapper;

import com.neusoft.crm.entity.Roles;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.neusoft.crm.entity.Sysinfo;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author bajiu
 * @since 2023-06-19
 */
public interface RolesMapper extends BaseMapper<Roles> {

    List<Sysinfo> getMenu(String roleno);
}
