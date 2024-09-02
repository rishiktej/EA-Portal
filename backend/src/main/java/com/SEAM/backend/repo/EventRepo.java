package com.SEAM.backend.repo;

import com.SEAM.backend.models.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

import javax.swing.text.html.parser.Entity;
import java.util.List;

public interface EventRepo extends MongoRepository<Event, String> {
    List<Event> findByClubName(String clubName);
}
