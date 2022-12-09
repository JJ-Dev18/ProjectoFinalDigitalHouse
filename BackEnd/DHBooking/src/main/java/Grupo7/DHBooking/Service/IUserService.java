package Grupo7.DHBooking.Service;

import Grupo7.DHBooking.Entities.DTO.UserDTO;
import Grupo7.DHBooking.Entities.User;

import java.io.IOException;
import java.util.List;

public interface IUserService {

    public UserDTO createUser(UserDTO userDTO) throws IOException;

    public UserDTO readUser(Long id);

    public UserDTO updateUser(UserDTO userDTO);

    public List<UserDTO> listUser();

    public UserDTO verifyCredentials(UserDTO userDTO);

    public String deleteUserByEmail(String email);
}
