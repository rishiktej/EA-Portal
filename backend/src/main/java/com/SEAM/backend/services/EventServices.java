package com.SEAM.backend.services;

import com.SEAM.backend.models.Event;
import com.SEAM.backend.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServices {
    @Autowired EventRepo repo;
    public Event createEvent(Event event){
        return repo.save(event);
    }
    public Optional<Event>  getEventById(String eventId){
        return repo.findById(eventId);
    }
    public List<Event> getEventByName(String clubName){
        return repo.findByClubName(clubName);
    }
}
