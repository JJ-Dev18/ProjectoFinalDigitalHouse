package Entities;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "cancellation_policy")
@Getter
@Setter

public class CancellationPolity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cacelation_policy")
    private Long idCancellationPolity;

    @Column
    private String description;

    @ManyToMany(mappedBy = "cancellationPolity")
    private List<Product> productList;

}
