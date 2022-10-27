package com.hoteles.hoteles.Service.impl;

import com.hoteles.hoteles.Entities.User;
import com.hoteles.hoteles.Repository.IUserRepository;
import com.hoteles.hoteles.Service.IUserService;
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
