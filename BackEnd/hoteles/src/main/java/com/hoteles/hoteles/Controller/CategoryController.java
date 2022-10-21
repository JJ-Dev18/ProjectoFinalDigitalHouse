package com.hoteles.hoteles.Controller;

import com.hoteles.hoteles.Entities.Category;
import com.hoteles.hoteles.Service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.Collection;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private ICategoryService categoryService;

    @PostMapping
    public ResponseEntity<?> createCategory(@RequestBody Category category){
        categoryService.createCategory(category);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Category readById(@PathVariable Long id){
        return categoryService.readCategory(id);
    }

    @PutMapping
    public ResponseEntity<Category> updateCategory(@RequestBody Category category){
        ResponseEntity<Category> response = null;
        if(category.getIdCategory() != null && categoryService.readCategory(category.getIdCategory()) != null){
            categoryService.updateCategory(category);
            response =  ResponseEntity.status(HttpStatus.OK).build();
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/{id}")
    public void DeleteById(@PathVariable Long id){
        categoryService.deleteCategory(id);
    }

    @GetMapping
    public Collection<Category> getAllCategories(){
        return categoryService.getAll();
    }

     /*  @PutMapping
    public ResponseEntity<Character> modifyCharacter(@RequestBody Character character){
        Optional<Character> characterToUpdate = characterServiceImpl.getByIdCharacter(character.getIdCharacter());
        if (characterToUpdate.isPresent()){
            return ResponseEntity.ok(characterServiceImpl.modifyCharacter(character));
        }
        else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }*/
}