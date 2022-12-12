package Grupo7.DHBooking.Entities.DTO;

import Grupo7.DHBooking.Entities.Booking;
import Grupo7.DHBooking.Entities.Role;
import lombok.*;

import java.util.List;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserAuthDTO {

    private static final long serialVersionUID = 1L;

    private Long idUser;

    private String name;

    private String lastName;

    private String email;

    private RoleDTO role;

    private String token;

    private List<Booking> bookingList;
}