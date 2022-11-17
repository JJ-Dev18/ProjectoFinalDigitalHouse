package Grupo7.DHBooking.Controller;

import Grupo7.DHBooking.Entities.Category;
import Grupo7.DHBooking.Entities.User;
import Grupo7.DHBooking.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id){
        Optional<User> userFound = Optional.ofNullable(userService.getUserById(id));
        if(userFound.isPresent()){
            return ResponseEntity.ok(userFound.get());
        } else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        return new ResponseEntity<>(userService.createUser(user), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User user){
        Optional<User> userToUpdate = Optional.ofNullable(userService.getUserById(user.getIdUser()));
        if (userToUpdate.isPresent()){
            return ResponseEntity.ok(userService.updateUser(user));
        }
        else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> DeleteById(@PathVariable Long id){
        Optional<User> userQuery = Optional.ofNullable(userService.getUserById(id));
        if (userQuery.isPresent()){
            userService.deleteUser(id);
            return ResponseEntity.ok("El usuario con ID = " + id + " ha sido eliminado.");
        }
        else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
