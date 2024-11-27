package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import com.example.config.AppConfig;

public class App {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        Alien obj1 = context.getBean(Alien.class);
        System.out.println(obj1.getAge());
        obj1.code();

//        Desktop desktop1 = context.getBean(Desktop.class);
//        desktop1.compile();
//
//        Desktop desktop2 = context.getBean(Desktop.class);
//        desktop2.compile();

        // ApplicationContext context = new
        // ClassPathXmlApplicationContext("spring.xml");

        // Alien obj1 = context.getBean("alien", Alien.class);
        // // obj1.setAge(100);

        // System.out.println(obj1.getAge());

        // obj1.code();

        // Desktop obj2 = context.getBean("desktop2", Desktop.class);

    }
}
