package com.SEAM.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SEAM.backend.models.Attendance;
import com.SEAM.backend.repo.AttendanceRepo;

@Service
public class AttendanceServices {

    @Autowired
    public AttendanceRepo repo;

    public Attendance putAttendance(Attendance a ){
        return repo.save(a);
    }

    public List<Attendance> getattendance(){
        return repo.findAll();
    }
    
}
