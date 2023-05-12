package com.hqt.backofficebff;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;

@SpringBootApplication
@EnableWebFluxSecurity
public class BackofficeBffApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackofficeBffApplication.class, args);
	}

}
