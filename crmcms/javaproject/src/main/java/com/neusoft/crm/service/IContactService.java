package com.neusoft.crm.service;

import com.neusoft.crm.entity.Contact;
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
public interface IContactService extends IService<Contact> {

    CommonResult getContacts(String cno);
}
