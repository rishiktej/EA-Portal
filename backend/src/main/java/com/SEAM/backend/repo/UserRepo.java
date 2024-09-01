package com.SEAM.backend.repo;

import com.SEAM.backend.models.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends MongoRepository <UserModel, String> {

    List<UserModel> findByEmail(String email);
}
