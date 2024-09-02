package com.SEAM.backend.services;


import com.SEAM.backend.models.*;
import com.SEAM.backend.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Attendancedtoservices {

    @Autowired
    private Attendancedtorepo userRepository;

    public List<UserEventModel> getUsersWithAttendance() {
        return userRepository.findUsersWithAttendance();
    }
}

