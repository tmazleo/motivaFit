package com.motivaapi.motivafit.services;

import com.motivaapi.motivafit.DTOs.UserRequestDTO;
import com.motivaapi.motivafit.models.UsersModel;
import com.motivaapi.motivafit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;

    @Autowired
    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean authenticate(UserRequestDTO credentials) {
        UsersModel user = userRepository.findByUsername(credentials.getUsername());

        return user != null && user.getPassword().equals(credentials.getPassword());
    }
}
