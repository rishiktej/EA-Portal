package com.SEAM.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection = "Event")
@AllArgsConstructor
@Data
public class Event {
    @Id
    public String eventId;
    public String clubName;
    public String eventName;
    public String eventDescription;
    public String eventDate;
    public String startTime;
    public String endTime;
    public String eventLocation;
    public List<String> eventPresentees= new ArrayList<>();
}
