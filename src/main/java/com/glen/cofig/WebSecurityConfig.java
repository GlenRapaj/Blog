package com.glen.cofig;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.glen.CorsFilterConf;
import com.glen.JWT.JWTAuthenticationFilter;
import com.glen.JWT.JWTAuthorizationFilter;
import com.glen.JWT.JwtAuthEntryPoint;

import com.glen.services.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
    prePostEnabled = true
)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
	
	 @Autowired
	 private JwtAuthEntryPoint unauthorizedHandler;
	 
	  @Autowired
	  UserDetailsServiceImpl userDetailsService;
	  
	  
	 private AuthenticationManager authenticationManager;
	 
	 @Autowired
	 private JwtAuthEntryPoint jwtAuthEntryPoint;
	 
	
	 @Bean
	    @Override
	    public AuthenticationManager authenticationManagerBean() throws Exception {
	        return super.authenticationManagerBean();
	    }
	 
	 @Override
	 	public void configure(WebSecurity web) throws Exception {
	 		web.ignoring()
	 			.antMatchers("/resources/**")
	 			//.antMatchers( "/favicon.ico/" )
	 			
	 			.antMatchers( "/favicon.ico/**" )
		    	.antMatchers( "/main.js" )
		    	.antMatchers( "/runtime.js" )
		    	.antMatchers( "/vendor.js" )
		    	.antMatchers( "/polyfills.js" )
		    	.antMatchers( "/styles.js" )
		        .antMatchers( "/assets/photos/" )
	 			;
	 	}
	  
	 
	  
	  @Override
	 	protected void configure(HttpSecurity http) throws Exception {
		  
		  http.requiresChannel()
		  .requestMatchers( r->r.getHeader("X-Forwarded-Proto") != null )
		  .requiresSecure();

		  http.csrf().disable()
		  .cors() //.configurationSource(  CorsFilterConf.CORSFilter())
		  .and()
			.authorizeRequests()
	    	.antMatchers("/login").permitAll()
	    	.antMatchers( "/allposts" ).permitAll()
	    	.antMatchers( "/allposts/**" ).permitAll()
	    	.antMatchers( "/validateLogin" ).permitAll()
	    	.antMatchers( "/getphoto" ).permitAll()
	    	.antMatchers( "/singin" ).permitAll()
	    	//.antMatchers( "index.html" ).permitAll()
	    	.antMatchers( "/" ).permitAll()
	    	.antMatchers( "/**" ).permitAll()
	    	
	    	
	    	.antMatchers( "/favicon.ico/**" ).permitAll()
	    	.antMatchers( "/main.js/**" ).permitAll()
	    	.antMatchers( "/runtime.js/**" ).permitAll()
	    	.antMatchers( "/vendor.js/**" ).permitAll()
	    	.antMatchers( "/polyfills.js/**" ).permitAll()
	    	.antMatchers( "/styles.js/**" ).permitAll()
	    	.antMatchers( "/assets/photos/**" ).permitAll()
	    	
	   
	    	 .anyRequest().authenticated()
	         .and()
	         
	        // .addFilter( new JWTAuthenticationFilter(authenticationManager()) )
	        // .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()    
	         .addFilter( new JWTAuthorizationFilter( authenticationManager() , userDetailsService ));
	         
	         
	 				
	 	}
	  
	  
	  
	 
	 @Override
	    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
	        authenticationManagerBuilder
	                .userDetailsService(userDetailsService)
	                .passwordEncoder(passwordEncoder());
	    }
	 
	 @Bean
	 public PasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	 
	

}
