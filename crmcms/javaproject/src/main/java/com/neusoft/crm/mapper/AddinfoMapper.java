package com.neusoft.crm.mapper;

import com.neusoft.crm.entity.Addinfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author bajiu
 * @since 2023-06-19
 */
public interface AddinfoMapper extends BaseMapper<Addinfo> {

    List<Addinfo> qryAddiByno(String addrno);
}
