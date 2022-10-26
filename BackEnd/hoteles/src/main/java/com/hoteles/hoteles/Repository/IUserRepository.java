package com.hoteles.hoteles.Repository;

import com.hoteles.hoteles.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {
}
