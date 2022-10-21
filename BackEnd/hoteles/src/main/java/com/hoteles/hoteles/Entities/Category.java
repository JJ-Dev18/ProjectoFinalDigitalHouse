package com.hoteles.hoteles.Entities;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Table(name = "categories")
@Getter
@Setter

public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_category")
    private Long idCategory;

    @Column
    private String title;

    @Column
    private String description;

    @Column(name = "image_url")
    private String imageUrl;
}