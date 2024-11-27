package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");

        Alien obj1 = (Alien) context.getBean("alien");
        // obj1.setAge(100);

        System.out.println(obj1.getAge());


        // Laptop lap1 = (Laptop) context.getBean("laptop");
        obj1.code();
    }
}
