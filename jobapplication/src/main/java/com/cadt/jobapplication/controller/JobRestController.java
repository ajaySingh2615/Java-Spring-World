package com.cadt.jobapplication.controller;

import java.util.List;

import com.cadt.jobapplication.model.JobPost;
import com.cadt.jobapplication.service.JobService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class JobRestController {

    private final JobService service;

    public JobRestController(JobService service) {
        this.service = service;
    }

    @GetMapping("jobPosts")
    public List<JobPost> getAllJobs() {
        return service.getAllJobs();
    }

    @GetMapping("jobPost/3")
    public JobPost getJob(){
        return service.getJob(3);
    }

}
