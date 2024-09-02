package com.SEAM.backend.controllers;

import com.SEAM.backend.services.Attendancedtoservices;
import com.SEAM.backend.models.*;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.http.HttpResponse;
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

    @GetMapping("/download")
    public void download(HttpServletResponse response) throws IOException {
        userService.createXL(response);
    }
}

