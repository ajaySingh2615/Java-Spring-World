package com.example.Repo;

import com.example.model.Student;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class StudentRepo {
    public void save(Student student) {
        System.out.println("added");
    }

    public List<Student> findAll() {
        return new ArrayList<>();
    }
}
