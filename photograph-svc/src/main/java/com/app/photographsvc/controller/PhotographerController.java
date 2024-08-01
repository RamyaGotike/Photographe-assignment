package com.app.photographsvc.controller;

import com.app.photographsvc.entity.Photographer;
import com.app.photographsvc.service.PhotographerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/photographers")
public class PhotographerController {

    @Autowired
    private PhotographerService photographerService;

    @GetMapping
    public List<Photographer> getAllPhotographers() {
        return photographerService.getAllPhotographers();
    }

    @PostMapping
    public Photographer savePhotographer(@RequestBody Photographer photographer) {
        return photographerService.save(photographer);
    }

    @GetMapping("/{id}")
    public Photographer getPhotographerById(@PathVariable Long id) {
        return photographerService.getPhotographerById(id);
    }

    @GetMapping("/event/{eventType}")
    public List<Photographer> getPhotographersByEventType(@PathVariable String eventType) {
        return photographerService.getPhotographersByEventType(eventType);
    }

}
