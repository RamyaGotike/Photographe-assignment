package com.app.photographsvc.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "PHOTOGRAPHER")
public class Photographer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String contact;
    private String avatar;
    private String eventType;
    private String location;

}
