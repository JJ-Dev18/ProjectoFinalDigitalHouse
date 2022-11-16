package Grupo7.DHBooking.Service.impl;

import Grupo7.DHBooking.Entities.DTO.UserDTO;
import Grupo7.DHBooking.Entities.User;
import Grupo7.DHBooking.Repository.IUserRepository;
import Grupo7.DHBooking.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private IUserRepository iUserRepository;


    @Override
    public UserDTO createUser(UserDTO userDTO) throws IOException {
        return null;
    }

    @Override
    public UserDTO readUser(Long id) {
        return null;
    }

    @Override
    public UserDTO updateUser(UserDTO userDTO) {
        return null;
    }

    @Override
    public void deleteUser(Long id) {

    }

    @Override
    public List<UserDTO> getAll() {
        return null;
    }

    @Override
    public UserDTO verifyCredentials(UserDTO userDTO) {
        return null;
    }
}
