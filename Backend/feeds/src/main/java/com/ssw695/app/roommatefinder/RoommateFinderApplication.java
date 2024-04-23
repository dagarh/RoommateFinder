package com.ssw695.app.roommatefinder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;





@SpringBootApplication
@EntityScan(basePackages = {"com.ssw695.app.roommatefinder.entity"})
public class RoommateFinderApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoommateFinderApplication.class, args);
	}

}
