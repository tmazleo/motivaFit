package com.motivaapi.motivafit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.motivaapi.motivafit")
public class MotivaFitApplication {

	public static void main(String[] args) {
		SpringApplication.run(MotivaFitApplication.class, args);
	}

}
