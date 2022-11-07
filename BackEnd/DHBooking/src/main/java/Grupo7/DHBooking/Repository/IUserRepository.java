package Grupo7.DHBooking.Repository;

import Grupo7.DHBooking.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, Long> {
}
