package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Alien {
    private int age;

    @Autowired
    @Qualifier("laptop")
    private Computer computer;

    public Alien() {
        // System.out.println("Alien object created");
    }

    // public Alien(int age) {
    //     System.out.println("Para constructor is called...");
    //     this.age = age;
    // }

    public Alien(int age, Computer computer) {
        this.age = age;
        this.computer = computer;
    }

    public void code() {
        System.out.println("Coding...");
        computer.compile();
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Computer getcomputer() {
        return computer;
    }

    public void setcomputer(Computer computer) {
        this.computer = computer;
    }
}
