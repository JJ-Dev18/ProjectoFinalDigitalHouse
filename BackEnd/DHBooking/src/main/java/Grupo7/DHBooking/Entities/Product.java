package Grupo7.DHBooking.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "id_category", insertable = false, updatable = false)
    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    private Category category;

    @ManyToOne(fetch=FetchType.LAZY)
    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    @JoinColumn(name = "id_city", insertable = false, updatable = false)
    private City city;

    @ManyToMany(cascade = CascadeType.PERSIST, fetch=FetchType.LAZY)
    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    @JoinColumn(name = "id_cacelation_policy", insertable = false, updatable = false)
    private List<CancellationPolity> cancellationPolity;

    @ManyToMany(cascade = CascadeType.PERSIST, fetch=FetchType.LAZY)
    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    @JoinColumn(name = "id_norm_policy", insertable = false, updatable = false)
    private List<NormPolicy> normPolicy;

    @ManyToMany(cascade = CascadeType.PERSIST, fetch=FetchType.LAZY)
    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    @JoinColumn(name = "id_security_policy", insertable = false, updatable = false)
    private List<SecurityPolicy> securityPolicy;

    @OneToMany(fetch=FetchType.LAZY, mappedBy = "product")
    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    private List<Image> images;

    @ManyToMany(cascade = CascadeType.PERSIST, fetch=FetchType.LAZY)
    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    @JoinColumn(name = "id_feature", insertable = false, updatable = false)
    private List<Feature> feature;

    @OneToMany(fetch=FetchType.LAZY, mappedBy = "product")
    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    private List<Reservation> reservations;
}
