package com.SEAM.backend.models;



import java.time.LocalTime;
import java.util.Date;

import lombok.Data;

@Data
public class UserEventModel {
    private String username;
    private String roll_no;
    private String branch;
    private String clubName;
    private String eventName;
    private Date eventDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private String eventLocation;

}