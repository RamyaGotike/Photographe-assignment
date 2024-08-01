package com.app.photographsvc.repository;

import com.app.photographsvc.entity.Photographer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PhotographerRepository extends JpaRepository<Photographer, Long> {

    List<Photographer> findByEventType(String eventType);

}
