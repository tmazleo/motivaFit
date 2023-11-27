package com.motivaapi.motivafit.DTOs;

public record UserRequestDTO(String name, String username, String password) {
    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
