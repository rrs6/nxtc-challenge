package com.nxtc.nxtc_api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SpringWebConfig {
    @Bean
	public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT")
                .allowedHeaders("*");
			}
		};
	}
}
