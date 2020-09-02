package com.bb.restapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestapiApplication {

    public static void main(String[] args) {
        System.out.println("Hello");
        System.out.println("Goodbye");
        SpringApplication.run(RestapiApplication.class, args);
    }

}
