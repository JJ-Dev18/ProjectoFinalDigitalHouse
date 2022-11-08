package Grupo7.DHBooking.Entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "features")
@Getter
@Setter
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_feature")
    private Long idFeature;

    @Column
    private String title;

    @Column(name = "url_icon")
    private String url;

    @ManyToMany(mappedBy = "feature")
    private List<Product> productList;
}
