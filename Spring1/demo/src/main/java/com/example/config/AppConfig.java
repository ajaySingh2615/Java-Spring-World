package com.example.config;

import com.example.Alien;
import com.example.Computer;
import com.example.Laptop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.example.Desktop;
import org.springframework.context.annotation.Primary;

@Configuration
@ComponentScan("com.example")
public class AppConfig {

//    @Bean
//    public Alien alien(@Autowired @Qualifier("desktop") Computer computer) {
//        Alien obj = new Alien();
//        obj.setAge(25);
//        obj.setcomputer(computer);
//        return obj;
//    }
//
//    //    @Bean(name = "com2")
//    @Bean
////    @Scope("prototype")
//    public Desktop desktop() {
//        return new Desktop();
//    }
//
//    @Bean
//    @Primary
//    public Laptop laptop(){
//        return new Laptop();
//    }
}
