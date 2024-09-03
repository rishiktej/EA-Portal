package com.SEAM.backend.controllers;

import com.SEAM.backend.models.Event;
import com.SEAM.backend.services.EventServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/event")
public class EventController {
    @Autowired
    private EventServices service;

    @RequestMapping("")
     public String greet(){
         return "Welcome to Event path...";
     }

     @PostMapping("/create")
    public ResponseEntity<Event> createController(@RequestBody Event event){
        return new ResponseEntity<Event>(service.createEvent(event), HttpStatus.CREATED);
     }
     @GetMapping("/{id}")
    public ResponseEntity<Optional<Event>> getByIdController(@PathVariable String id){
        return new ResponseEntity<Optional<Event>>(service.getEventById(id),HttpStatus.FOUND);
     }
     @GetMapping("/name/{clubName}")
    public ResponseEntity<List<Event>> getEventByNameController(@PathVariable String clubName){
        return new ResponseEntity<List<Event>>(service.getEventByName(clubName),HttpStatus.FOUND);
     }
     @GetMapping("pastEvents")
    public ResponseEntity<List<Event>> getPastEvents(){
        return new ResponseEntity<List<Event>>(service.getPastEvents(),HttpStatus.FOUND);
     }
    @GetMapping("futureEvents")
    public ResponseEntity<List<Event>> getFutureEvents(){
        return new ResponseEntity<List<Event>>(service.getFutureEvents(),HttpStatus.FOUND);
    }
    @GetMapping("presentEvents")
    public ResponseEntity<List<Event>> getPresentEvents(){
        return new ResponseEntity<List<Event>>(service.getPresentEvents(),HttpStatus.FOUND);
    }
    @GetMapping("presentEventsByClub/{clubName}")
    public ResponseEntity<List<Event>> getPresentEventsByClubName(@PathVariable String clubName){
        return new ResponseEntity<List<Event>>(service.getPresentEventsByClub(clubName),HttpStatus.FOUND);
    }

    @GetMapping("pastEventsByClub/{clubName}")
    public ResponseEntity<List<Event>> getPastEventsByClubName(@PathVariable String clubName){
        return new ResponseEntity<List<Event>>(service.getPastEventsByClub(clubName),HttpStatus.FOUND);
    }

    @GetMapping("futureEventsByClub/{clubName}")
    public ResponseEntity<List<Event>> getFutureEventsByClubName(@PathVariable String clubName){
        return new ResponseEntity<List<Event>>(service.getFutureEventsByClub(clubName),HttpStatus.FOUND);
    }

}
