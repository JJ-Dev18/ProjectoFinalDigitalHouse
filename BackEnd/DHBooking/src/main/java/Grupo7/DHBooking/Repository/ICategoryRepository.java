package Grupo7.DHBooking.Repository;

import Grupo7.DHBooking.Entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Long> {
}
