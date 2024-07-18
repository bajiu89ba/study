package com.neusoft.crm.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.neusoft.crm.entity.Contact;
import com.neusoft.crm.mapper.ContactMapper;
import com.neusoft.crm.service.IContactService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.neusoft.crm.tools.CommonResult;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author bajiu
 * @since 2023-06-20
 */
@Service
public class ContactServiceImpl extends ServiceImpl<ContactMapper, Contact> implements IContactService {

    @Override
    public CommonResult getContacts(String cno) {
        QueryWrapper<Contact> wrapper=new QueryWrapper();
        wrapper.eq("customerno",cno);
        List<Contact>list=list(wrapper);
        return new CommonResult(list);
    }
}
