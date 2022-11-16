package Grupo7.DHBooking.Entities;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserAuth {

    private Long idUser;

    private String name;

    private String lastName;

    private String email;

    private Role role;

    private String token;
}
