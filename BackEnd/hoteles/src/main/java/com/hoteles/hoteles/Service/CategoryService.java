package com.hoteles.hoteles.Service;

import com.hoteles.hoteles.Entities.Category;
import com.hoteles.hoteles.Repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService implements ICategoryService{

    @Autowired
    private ICategoryRepository categoryRepository;

    @Override
    public void createCategory(Category category) {
        categoryRepository.save(category);
    }

    @Override
    public Category readCategory(Long idCategory) {
        return categoryRepository.findById(idCategory).get();
    }

    @Override
    public void updateCategory(Category category) {
        categoryRepository.save(category);
    }

    @Override
    public void deleteCategory(Long idCategory) {
        categoryRepository.deleteById(idCategory);
    }

    @Override
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }
}
