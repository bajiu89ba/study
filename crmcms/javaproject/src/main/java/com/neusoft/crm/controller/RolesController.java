package com.neusoft.crm.controller;


import com.neusoft.crm.entity.Roles;
import com.neusoft.crm.service.IRolesService;
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
@RequestMapping("/role")
@CrossOrigin
public class RolesController {

    @Autowired
    private IRolesService rolesService;

    @GetMapping("/all")
    public CommonResult getAll(){
    List<Roles> list = rolesService.list();
    if (list==null||list.size()==0){
        return new CommonResult(null,204);
    }
    return new  CommonResult(list);
}



    @GetMapping("/rights/{roleno}")
    public CommonResult getMenu(@PathVariable("roleno")String roleno){

        return rolesService.getMenu(roleno);
}
    @PutMapping("/mod")
    public CommonResult mod(@RequestBody Roles roles){
        boolean b = rolesService.updateById(roles);
        return new CommonResult(b);
    }

    @PostMapping("/add")
    public CommonResult add(@RequestBody Roles roles){
        roles.setRoleno(null);
        rolesService.save(roles);
        return new CommonResult(roles.getRoleno());
    }


}
