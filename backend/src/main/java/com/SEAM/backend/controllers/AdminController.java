package com.SEAM.backend.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SEAM.backend.models.Admin;
import com.SEAM.backend.models.UserModel;
import com.SEAM.backend.services.AdminServices;

@RestController
@RequestMapping
public class AdminController {

    @Autowired AdminServices service;

    @PostMapping("/ads")
    public ResponseEntity<Admin> postController(@RequestBody Admin ad){
        System.out.println("controller");
        return new ResponseEntity<>( service.putData(ad), HttpStatus.OK);
    }
    
    @GetMapping("/adminlogin/{id}")
    public String getadmin(@PathVariable String id){
         return service.Searchadmin(id);
    }
    
}
