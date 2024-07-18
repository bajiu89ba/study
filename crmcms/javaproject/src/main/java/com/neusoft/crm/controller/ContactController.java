package com.neusoft.crm.controller;


import com.neusoft.crm.entity.Contact;
import com.neusoft.crm.service.IContactService;
import com.neusoft.crm.tools.CommonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author bajiu
 * @since 2023-06-20
 */
@RestController
@RequestMapping("/contact")
@CrossOrigin
public class ContactController {

    @Autowired
    private IContactService contactService;

    @GetMapping("/qry/Contact4Customer")
    public CommonResult getContacts(String cno){
        if (cno==null||cno==""){
            return new CommonResult(null,204);
        }
        return contactService.getContacts(cno);
    }

    @PutMapping("/mod")
    public CommonResult modify(@RequestBody Contact contact){
        boolean b = contactService.updateById(contact);
        return new CommonResult(b);
    }

    @PostMapping("/add")
    public CommonResult add(@RequestBody Contact contact){
        contact.setContactno(null);
        contactService.save(contact);
        return new CommonResult(contact.getContactno());
    }

}
