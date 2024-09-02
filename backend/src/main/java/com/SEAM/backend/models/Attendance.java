package com.SEAM.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Document (collection = "Attendance")
@AllArgsConstructor
@Data
public class Attendance {
    
    @Id
    Integer admission_no;
    Integer Event_Id;
    
}
