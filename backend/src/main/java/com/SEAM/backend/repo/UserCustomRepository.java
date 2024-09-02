package com.SEAM.backend.repo;


import com.SEAM.backend.models.*;
import java.util.List;

public interface UserCustomRepository {
    List<UserModel> findUsersWithAttendance();
}
