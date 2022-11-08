package Grupo7.DHBooking.Entities;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products")
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private Long idProduct;

    @Column
    private String title;

    @Column(name = "title_description")
    private String titleDescription;

    @Column
    private String description;

    @Column
    private Integer quality;

    @Column
    private String distance;

    @ManyToOne
    @JoinColumn(name = "id_category", insertable = false, updatable = false)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "id_city", insertable = false, updatable = false)
    private City city;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_cacelation_policy", insertable = false, updatable = false)
    private List<CancellationPolity> cancellationPolity;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_norm_policy", insertable = false, updatable = false)
    private List<NormPolicy> normPolicy;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_security_policy", insertable = false, updatable = false)
    private List<SecurityPolicy> securityPolicy;

    @OneToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_image", insertable = false, updatable = false)
    private List<Image> images;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id_feature", insertable = false, updatable = false)
    private List<Feature> feature;
}
