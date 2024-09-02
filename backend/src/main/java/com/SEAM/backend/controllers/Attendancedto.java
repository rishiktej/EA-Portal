package com.SEAM.backend.controllers;

import com.SEAM.backend.services.Attendancedtoservices;
import com.SEAM.backend.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class Attendancedto {

    @Autowired
    private Attendancedtoservices userService;

    @GetMapping("/with-attendance")
    public List<UserEventModel> getUsersWithAttendance() {
        return userService.getUsersWithAttendance();
    }
}

