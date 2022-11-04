package Grupo7.DHBooking.Entities;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "norm_policy")
@Getter
@Setter

public class NormPolicy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_norm_policy")
    private Long idNormPolity;

    @Column
    private String description;

    @ManyToMany(mappedBy = "normPolicy")
    private List<Product> productList;
}
