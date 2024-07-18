package com.neusoft.crm.controller;


import com.neusoft.crm.service.IAddinfoService;
import com.neusoft.crm.tools.CommonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author bajiu
 * @since 2023-06-19
 */
@RestController
@RequestMapping("/addi")
@CrossOrigin
public class AddinfoController {

    @Autowired
    private IAddinfoService addinfoService;

    @GetMapping("/tree")
    public CommonResult getTree(){
        return addinfoService.getTree();
    }


    @GetMapping("/qryAddiByno/{addrno}")
    public CommonResult qryAddiByno(@PathVariable("addrno") String addrno){
        return addinfoService.qryAddiByno(addrno);
    }

    @GetMapping("/list")
    public CommonResult getList(){
        return addinfoService.getList();
    }
}
