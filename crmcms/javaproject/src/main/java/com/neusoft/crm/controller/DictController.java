package com.neusoft.crm.controller;


import com.neusoft.crm.entity.Dict;
import com.neusoft.crm.service.IDictService;
import com.neusoft.crm.service.impl.DictServiceImpl;
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
@RequestMapping("/dict")
@CrossOrigin
public class DictController {

    @Autowired
    private IDictService dictService;

    @GetMapping("/all")
    public CommonResult getAll(){
        List<Dict> list = dictService.list();
        if(list==null||list.size()==0){
            return new CommonResult(null,204);
        }
        return new CommonResult(list);
    }

    @PostMapping("/add")
    public  CommonResult add(@RequestBody Dict dict){
        dict.setDictno(null);
        dictService.save(dict);
        return new CommonResult(dict.getDictno());
    }

    @PutMapping("/mod")
    public CommonResult mod(@RequestBody Dict dict){
        boolean b = dictService.updateById(dict);
        return new CommonResult(b);
    }


}
