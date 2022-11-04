package Grupo7.DHBooking.Repository;

import Grupo7.DHBooking.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Product, Long> {
}
