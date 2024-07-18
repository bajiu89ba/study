package com.neusoft.crm.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
@CrossOrigin
public class DemoController {
    @RequestMapping("/test")
    public String test(){

        return "这是客户管理系统demo接口";
    }
}
