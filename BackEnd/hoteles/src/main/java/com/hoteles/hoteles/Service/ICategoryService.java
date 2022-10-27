package com.hoteles.hoteles.Service;

import com.hoteles.hoteles.Entities.Category;

import java.util.List;

public interface ICategoryService {
    Category createCategory(Category category);
    Category getCategoryById(Long idCategory);
    Category updateCategory(Category category);
    void deleteCategory(Long idCategory);
    List<Category> getAll();
}
