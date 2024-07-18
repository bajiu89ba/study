package com.neusoft.crm.service.impl;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.neusoft.crm.entity.Product;
import com.neusoft.crm.mapper.ProductMapper;
import com.neusoft.crm.service.IProductService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.neusoft.crm.tools.CommonResult;
import org.springframework.stereotype.Service;

import java.time.temporal.ValueRange;
import java.util.HashMap;
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
public class ProductServiceImpl extends ServiceImpl<ProductMapper, Product> implements IProductService {

    @Override
    public CommonResult getPageList(String currentPage, String pageSize) {

        int index = (Integer.valueOf(currentPage)-1)*Integer.valueOf(pageSize);

        List<Product> list = this.baseMapper.getPageList(index,Integer.valueOf(pageSize));

        long count = count();

//        Page<Product>page=new Page<>(Integer.valueOf(currentPage),Integer.valueOf(pageSize));
//        this.page(page);
//        List<Product> list = page.getRecords();

        if (list==null||list.size()==0){
            return new CommonResult(null,204);
        }


        HashMap<String,Object> map =new HashMap<>();
        map.put("current",Integer.valueOf(currentPage));
        map.put("size", Integer.valueOf(pageSize));
        map.put("total",count);
        map.put("records",list);

        return new CommonResult<>(map);
    }
}
