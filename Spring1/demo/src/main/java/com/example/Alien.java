package com.example;

public class Alien {

    private int age;
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
