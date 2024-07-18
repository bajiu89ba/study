package com.neusoft.crm.controller;


import com.neusoft.crm.entity.Dept;
import com.neusoft.crm.service.IDeptService;
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
@RequestMapping("/dept")
@CrossOrigin
public class DeptController {

    @Autowired
    private IDeptService deptService;


    @GetMapping("/all")
    public CommonResult getAll(){
        List<Dept> list = deptService.list();
        if(list==null||list.size()==0){
            return new CommonResult(null,204);
        }
        return new CommonResult(list);
    }

    @PostMapping("/add")
    public CommonResult add(@RequestBody Dept dept){
        dept.setDeptno(null);
        deptService.save(dept);
        return new CommonResult(dept.getDeptno());
    }

    @PutMapping("/mod")
    public CommonResult mod(@RequestBody Dept dept){
        boolean b = deptService.updateById(dept);
        return new CommonResult(b);
    }

    @DeleteMapping("/del/{deptno}")
    public CommonResult deleteByNo(@PathVariable("deptno")String deptno){
        boolean b = deptService.removeById(deptno);
        return new CommonResult(b);
    }

}
