package com.example;

public class Desktop implements Computer {

    public Desktop(){
        System.out.println("Desktop object created...");
    }

    @Override
    public void compile() {
        System.out.println("Compling using desktop...");
    }

}