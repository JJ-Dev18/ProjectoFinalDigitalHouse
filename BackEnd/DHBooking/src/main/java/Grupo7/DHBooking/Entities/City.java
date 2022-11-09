package Grupo7.DHBooking.Entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    private Integer idCity;

    @Column
    private String name;

    @Column
    private String state;

    @Column
    private String country;

    @JsonBackReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "city")
    private List<Product> productList;
}
