package com.SEAM.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SEAM.backend.models.Admin;
import com.SEAM.backend.models.Attendance;
import com.SEAM.backend.services.AttendanceServices;

@RestController
@RequestMapping
public class AttendanceController {

    @Autowired
    public AttendanceServices service;

    @PostMapping("/pa")
    public ResponseEntity<Attendance> postController(@RequestBody Attendance a){
        System.out.println("controller");
        return new ResponseEntity<>( service.putAttendance(a), HttpStatus.OK);
    }
    
    @GetMapping("/ga")
    public List<Attendance> getcontroller(){
        return service.getattendance();
    }
}
