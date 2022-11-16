package Grupo7.DHBooking.Entities.DTO;

import Grupo7.DHBooking.Entities.Role;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private static final long serialVersionUID = 1L;

    private Long idUser;

    private String name;

    private String userLastName;

    private String email;

    private String password;

    private Role role;
}
