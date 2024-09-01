package com.SEAM.backend.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SEAM.backend.models.Admin;
import com.SEAM.backend.models.UserModel;
import com.SEAM.backend.repo.AdminRepo;

@Service
public class AdminServices {

    @Autowired
    public AdminRepo repo;

     public Admin putData(Admin ad) {

        return repo.save(ad);

    }
    public String Searchadmin(String id){
        Admin a = repo.findByclub(id).getFirst();
        String p = a.password;
        return p;

    }
    
}
