package com.SEAM.backend.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.SEAM.backend.models.Attendance;

public interface AttendanceRepo extends MongoRepository<Attendance,String>{

     
}
