package com.glen.cofig;

import java.io.IOException;

import javax.annotation.Resource;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.AbstractFileResolvingResource;
import org.springframework.core.io.AbstractResource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;


@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	
	  
	
	 @Override
	    public void addResourceHandlers(ResourceHandlerRegistry registry) {

	        registry.addResourceHandler("/**")
	                .addResourceLocations("classpath:/static/") 
	                .resourceChain(true)
	                .addResolver(new PathResourceResolver() {
	                	
	                	@Override
	                	protected org.springframework.core.io.Resource getResource(String resourcePath,
	                			org.springframework.core.io.Resource location) 
	                					throws IOException {
	                		// return super.getResource(resourcePath, location);
	                		
	                		org.springframework.core.io.Resource reqResource = location.createRelative(resourcePath);
	                		 org.springframework.core.io.Resource resowrceans = reqResource.exists() && reqResource.isReadable() ? reqResource : new ClassPathResource("/static/index.html");
	                		 return resowrceans;
	                		 //return new ClassPathResource("/static/index.html");
	                	}
	                });
	              	
	    }
	   
	
}
