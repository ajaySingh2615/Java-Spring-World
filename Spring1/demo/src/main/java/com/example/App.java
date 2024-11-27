package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import com.example.config.AppConfig;

public class App {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        Desktop desktop = context.getBean(Desktop.class);
        desktop.compile();

        // ApplicationContext context = new
        // ClassPathXmlApplicationContext("spring.xml");

        // Alien obj1 = context.getBean("alien", Alien.class);
        // // obj1.setAge(100);

        // System.out.println(obj1.getAge());

        // obj1.code();

        // Desktop obj2 = context.getBean("desktop", Desktop.class);

    }
}
