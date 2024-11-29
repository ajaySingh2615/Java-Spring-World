package com.example;

import com.example.model.Student;
import com.example.service.StudentService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class Main {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(Main.class, args);

        Student student = context.getBean(Student.class);
        student.setRollNo(104);
        student.setName("Ajay");
        student.setMarks(92);

        StudentService service = context.getBean(StudentService.class);

        service.addStudent(student);

        List<Student> students = service.getStudents();
        System.out.println(students);
    }

}
