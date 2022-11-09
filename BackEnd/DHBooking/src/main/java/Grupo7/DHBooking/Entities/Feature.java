package Grupo7.DHBooking.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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

    @JsonBackReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    @ManyToMany(mappedBy = "feature", fetch=FetchType.LAZY)
    private List<Product> productList;
}
