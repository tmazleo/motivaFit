package com.motivaapi.motivafit.controllers;

import com.motivaapi.motivafit.DTOs.UserRequestDTO;
import com.motivaapi.motivafit.DTOs.UserResponseDTO;
import com.motivaapi.motivafit.models.UsersModel;
import com.motivaapi.motivafit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public void saveUser(@RequestBody UserRequestDTO data) {
        UsersModel userData = new UsersModel(data.getName(), data.getUsername(), data.getPassword());
        userRepository.save(userData);
    }

    @GetMapping
    public List<UserResponseDTO> getAll() {
        List<UserResponseDTO> userList = userRepository.findAll().stream().map(UserResponseDTO::new).toList();
        return userList;
    }
    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable UUID userId) {
        if (userRepository.existsById(userId)) {
            userRepository.deleteById(userId);
            return new ResponseEntity<>("Usuário excluído com sucesso", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Usuário não encontrado", HttpStatus.NOT_FOUND);
        }
    }
}
