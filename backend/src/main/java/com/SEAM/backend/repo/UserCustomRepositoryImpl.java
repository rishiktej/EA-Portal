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
    public List<UserModel> findUsersWithAttendance() {
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.lookup("Users", "_id", "_id", "userDetails"),
                Aggregation.unwind("userDetails"),
                Aggregation.replaceRoot("userDetails")
        );

        AggregationResults<UserModel> results = mongoTemplate.aggregate(aggregation, "Attendance", UserModel.class);
        return results.getMappedResults();
    }
}
