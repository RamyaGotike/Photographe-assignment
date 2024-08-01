package com.app.photographsvc.service.impl;

import com.app.photographsvc.entity.Photographer;
import com.app.photographsvc.repository.PhotographerRepository;
import com.app.photographsvc.service.PhotographerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhotographerServiceImpl implements PhotographerService {

    @Autowired
    private PhotographerRepository photographerRepository;

    @Override
    public List<Photographer> getAllPhotographers() {
        return photographerRepository.findAll();
    }

    @Override
    public Photographer getPhotographerById(Long id) {
        return photographerRepository.findById(id).orElse(null);
    }

    @Override
    public List<Photographer> getPhotographersByEventType(String eventType) {
        return photographerRepository.findByEventType(eventType);
    }

    @Override
    public Photographer save(Photographer photographer) {
        return photographerRepository.save(photographer);
    }
}
