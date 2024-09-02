package com.SEAM.backend.repo;


import com.SEAM.backend.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserCustomRepositoryImpl implements UserCustomRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public  List<UserEventModel> findUsersWithAttendance() {
         Aggregation aggregation = Aggregation.newAggregation(
        // Stage 1: Lookup Users collection based on admission_no
        Aggregation.lookup("Users", "_id", "_id", "userDetails"),
        
        // Stage 2: Unwind userDetails array
        Aggregation.unwind("userDetails"),
        
        // Stage 3: Lookup Event collection based on Event_Id
        Aggregation.lookup("Event", "Event_Id", "_id", "eventDetails"),
        
        // Stage 4: Unwind eventDetails array
        Aggregation.unwind("eventDetails"),
        
        // Stage 5: Project only the desired fields
        Aggregation.project("userDetails.username", "userDetails.roll_no", "userDetails.branch",
                            "eventDetails.clubName", "eventDetails.eventName", "eventDetails.eventDate",
                            "eventDetails.startTime", "eventDetails.endTime", "eventDetails.eventLocation")
    );


        AggregationResults<UserEventModel> results = mongoTemplate.aggregate(aggregation, "Attendance", UserEventModel.class);
    return results.getMappedResults();
    }
}
