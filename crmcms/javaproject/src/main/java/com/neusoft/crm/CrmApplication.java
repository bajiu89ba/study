package com.neusoft.crm;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.neusoft.crm.mapper")
public class CrmApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrmApplication.class, args);
    }

}
