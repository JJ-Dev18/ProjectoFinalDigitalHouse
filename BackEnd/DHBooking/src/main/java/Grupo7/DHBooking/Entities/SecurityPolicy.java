package Grupo7.DHBooking.Entities;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "security_policy")
@Getter
@Setter

public class SecurityPolicy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_security_policy")
    private Long idSecurityPolity;

    @Column
    private String description;

    @JsonBackReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    @ManyToMany(mappedBy = "normPolicy", fetch=FetchType.LAZY)
    private List<Product> securityPolicy;
}
