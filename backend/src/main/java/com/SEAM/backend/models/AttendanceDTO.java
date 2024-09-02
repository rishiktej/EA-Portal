package com.SEAM.backend.models;

import org.springframework.data.mongodb.core.mapping.Document;


import lombok.AllArgsConstructor;
import lombok.Data;

@Document(collection = "AttendanceDto")
@AllArgsConstructor
@Data
public class AttendanceDTO {

   public String admission_no;
   public String username;
   public String email;
   public String branch;
   public int semester;
   public String roll_no;
}
