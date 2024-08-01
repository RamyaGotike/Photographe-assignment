package com.app.photographsvc.service;

import com.app.photographsvc.entity.Photographer;

import java.util.List;

public interface PhotographerService {

    List<Photographer> getAllPhotographers();
    Photographer getPhotographerById(Long id);
    List<Photographer> getPhotographersByEventType(String eventType);
    Photographer save(Photographer photographer);
}
