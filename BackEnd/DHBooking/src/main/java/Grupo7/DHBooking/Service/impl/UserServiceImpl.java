package Grupo7.DHBooking.Service.impl;

import Grupo7.DHBooking.Entities.User;
import Grupo7.DHBooking.Repository.IUserRepository;
import Grupo7.DHBooking.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private IUserRepository iUserRepository;


    @Override
    public List<User> getAll() {
        return iUserRepository.findAll();
    }

    @Override
    public User getUserById(Long idUser) {
        return iUserRepository.findById(idUser).get();
    }

    @Override
    public User createUser(User user) {
        return iUserRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        return iUserRepository.save(user);
    }

    @Override
    public void deleteUser(Long idUser) {
        iUserRepository.deleteById(idUser);
    }
}
