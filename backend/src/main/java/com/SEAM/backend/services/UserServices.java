package com.SEAM.backend.services;

import com.SEAM.backend.models.UserBody;
import com.SEAM.backend.models.UserModel;
import com.SEAM.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Service
public class UserServices {
    @Autowired
    public UserRepo repo;

    public UserModel putData(UserModel user) {

        return repo.save(user);

    }

    public String searchUser(UserBody user) {
        try {
            UserModel u = repo.findByEmail(user.email).getFirst();
            if (Objects.equals(u.password, user.password)){
                return "Auth";
            }
            else
                return "AuthFuck";
        } catch (Exception e) {
            return "NoUser";
        }
    }

    }

