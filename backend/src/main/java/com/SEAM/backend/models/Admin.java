package com.SEAM.backend.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
public class Admin {
    public String name;
    public String club;
    public String password;
}
