package com.neusoft.crm.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.neusoft.crm.entity.Addinfo;
import com.neusoft.crm.entity.Customer;
import com.neusoft.crm.entity.Sysinfo;
import com.neusoft.crm.mapper.AddinfoMapper;
import com.neusoft.crm.service.IAddinfoService;
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
 * @since 2023-06-19
 */
@Service
public class AddinfoServiceImpl extends ServiceImpl<AddinfoMapper, Addinfo> implements IAddinfoService {

    @Override
    public CommonResult getTree() {
        List<Addinfo> list = list();
        Addinfo root=null;
        for (int i = 0; i < list.size(); i++) {
            if("00".equals(list.get(i).getPreaddrno())){
                root=list.get(i);
                break;
            }
        }
        fillNode(root,list);

        return new CommonResult(root);
    }

    @Override
    public CommonResult qryAddiByno(String addrno) {
        List<Addinfo>list= this.baseMapper.qryAddiByno(addrno);

        if(list==null||list.size()==0){
            return new CommonResult(null,204);
        }
        return new CommonResult(list);
    }

    @Override
    public CommonResult getList() {
        return null;
    }

    private void fillNode(Addinfo root, List<Addinfo> list) {
        for (int i = 0; i < list.size(); i++) {
            if(root.getAddrno().equals(list.get(i).getPreaddrno())){
                root.getChildren().add(list.get(i));
            }
        }
    }
}
