package Grupo7.DHBooking.Entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CollectionId;

import javax.persistence.*;

@Entity
@Table(name="images")
@Getter
@Setter
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_image")
    private Long idImage;

    @Column
    private String title;

    @Column
    private String url;

    @OneToOne
    @JoinColumn(name = "id_product", insertable = false, updatable = false)
    private Product product;
}
