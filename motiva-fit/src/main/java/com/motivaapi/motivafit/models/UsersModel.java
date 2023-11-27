package com.motivaapi.motivafit.models;

import com.motivaapi.motivafit.DTOs.UserRequestDTO;
import jakarta.persistence.*;
import java.util.UUID;

@Entity(name = "users")
@Table(name = "tb_users")
public class UsersModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    private String username;
    private String password;

    public UsersModel() {
    }

    public UsersModel(UserRequestDTO data) {
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String user) {
        this.username = user;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UsersModel(String name, String username, String password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
}
