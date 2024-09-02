package com.SEAM.backend.repo;


import com.SEAM.backend.models.*;

import org.springframework.data.mongodb.repository.MongoRepository;





public interface Attendancedtorepo extends MongoRepository<UserModel, String>, UserCustomRepository {
    // Additional query methods if needed
}


