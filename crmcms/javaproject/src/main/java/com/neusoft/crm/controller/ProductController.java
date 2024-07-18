package com.neusoft.crm.controller;


import com.neusoft.crm.entity.Product;
import com.neusoft.crm.service.IProductService;
import com.neusoft.crm.tools.CommonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author bajiu
 * @since 2023-06-19
 */
@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private IProductService productService;

    @RequestMapping ("/qry/paged/{currentPage}/{pageSize}")
    public CommonResult page(@PathVariable("currentPage")String currentPage,
                             @PathVariable("pageSize")String pageSize){
        return productService.getPageList(currentPage,pageSize);
    }

}
