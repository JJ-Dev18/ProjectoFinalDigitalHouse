package Service;

import Entities.User;

import java.util.List;

public interface IUserService {

    List<User> getAll();
    User getUserById(Long idUser);
    User createUser(User user);
    User updateUser(User user);
    void deleteUser(Long idUser);
}