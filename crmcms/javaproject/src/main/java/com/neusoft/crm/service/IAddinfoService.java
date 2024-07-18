package com.neusoft.crm.service;

import com.neusoft.crm.entity.Addinfo;
import com.baomidou.mybatisplus.extension.service.IService;
import com.neusoft.crm.tools.CommonResult;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bajiu
 * @since 2023-06-19
 */
public interface IAddinfoService extends IService<Addinfo> {

    CommonResult getTree();

    CommonResult qryAddiByno(String addrno);

    CommonResult getList();
}
