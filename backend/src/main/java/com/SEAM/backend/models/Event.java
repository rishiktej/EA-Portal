package com.SEAM.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalTime;
import java.util.Date;

@Document(collection = "Event")
public class Event {
    @Id
    public String eventId;
    public String clubName;
    public String eventName;
    public String eventDescription;
    public Date eventDate;
    public LocalTime startTime;
    public LocalTime endTime;
    public String eventLocation;
}
