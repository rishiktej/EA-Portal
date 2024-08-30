package com.SEAM.backend.controllers;

import com.SEAM.backend.models.UserBody;
import com.SEAM.backend.models.UserModel;
import com.SEAM.backend.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
public class UserController {

    @Autowired
    public UserServices service;

    @PostMapping("/post")
    public ResponseEntity<UserModel> postController(@RequestBody UserModel user){
        System.out.println("controller");
        return new ResponseEntity<>( service.putData(user), HttpStatus.OK);
    }

    @PostMapping("/search")
    public List<UserModel> searchController(@RequestBody UserBody user){
        System.out.println(user.email);
        return service.search(user.email);
    }

}
