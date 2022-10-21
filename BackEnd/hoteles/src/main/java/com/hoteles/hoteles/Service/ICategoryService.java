package com.hoteles.hoteles.Service;

import com.hoteles.hoteles.Entities.Category;

import java.util.List;

public interface ICategoryService {

    void createCategory(Category category);

    Category readCategory(Long idCategory);

    void updateCategory(Category category);

    void deleteCategory(Long idCategory);

    List<Category> getAll();
}
