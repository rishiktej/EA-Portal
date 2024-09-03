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
        return new ResponseEntity<>(service.createEvent(event), HttpStatus.CREATED);
     }
     @GetMapping("/{id}")
    public ResponseEntity<Optional<Event>> getByIdController(@PathVariable String id){
        return new ResponseEntity<>(service.getEventById(id),HttpStatus.FOUND);
     }
     @GetMapping("/name/{clubName}")
    public ResponseEntity<List<Event>> getEventByNameController(@PathVariable String clubName){
        return new ResponseEntity<>(service.getEventByName(clubName),HttpStatus.FOUND);
     }
}
