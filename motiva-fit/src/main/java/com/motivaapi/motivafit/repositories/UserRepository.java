package com.motivaapi.motivafit.repositories;

import com.motivaapi.motivafit.models.UsersModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<UsersModel, UUID> {
    UsersModel findByUsername(String username);
}
