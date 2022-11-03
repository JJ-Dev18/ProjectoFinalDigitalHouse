package Grupo7.DHBooking.Entities;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "cities")
@Getter
@Setter
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_city")
    private Integer id;

    @Column
    private String name;

    @Column
    private String state;

    @Column
    private String country;

    @OneToMany(mappedBy = "city")
    private List<Product> productList;
}
