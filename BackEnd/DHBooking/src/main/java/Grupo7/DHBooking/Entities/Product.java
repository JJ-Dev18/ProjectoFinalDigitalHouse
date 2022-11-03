package Grupo7.DHBooking.Entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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

    @ManyToOne
    @JoinColumn(name = "id_category", insertable = false, updatable = false)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "id_city", insertable = false, updatable = false)
    private City city;
}
