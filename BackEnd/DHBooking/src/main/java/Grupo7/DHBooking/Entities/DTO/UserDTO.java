package Grupo7.DHBooking.Entities.DTO;

import Grupo7.DHBooking.Entities.Booking;
import Grupo7.DHBooking.Entities.Role;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private static final long serialVersionUID = 1L;

    private Long idUser;

    private String name;

    private String lastName;

    private String email;

    private String city;

    private String password;

    private RoleDTO role;

    private List<Booking> bookingList;
}
