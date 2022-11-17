package Grupo7.DHBooking.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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

    @ManyToOne(fetch=FetchType.LAZY)
    @JsonBackReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    @JoinColumn(name = "id_product", insertable = false, updatable = false)
    private Product product;
}
