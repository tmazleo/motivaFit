package com.motivaapi.motivafit.DTOs;

import com.motivaapi.motivafit.models.UsersModel;

import java.util.UUID;

public record UserResponseDTO(UUID id, String name, String username, String password) {

    public UserResponseDTO(UsersModel user) {
        this(user.getId(), user.getName(), user.getUsername(), user.getPassword());
    }
}
