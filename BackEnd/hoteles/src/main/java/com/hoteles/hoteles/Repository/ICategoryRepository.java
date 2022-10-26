package com.hoteles.hoteles.Repository;

import com.hoteles.hoteles.Entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Long> {
}
