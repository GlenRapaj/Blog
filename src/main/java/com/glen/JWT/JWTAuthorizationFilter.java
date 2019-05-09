package com.glen.JWT;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.glen.services.UserDetailsServiceImpl;

import io.jsonwebtoken.Jwts;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter{

	
	

	@Autowired
	private static SecurityConstants securityConstants;
	
	
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	// private AuthenticationManager authenticationManager ;
	
	  
	
	public JWTAuthorizationFilter(AuthenticationManager authenticationManager 
			, UserDetailsServiceImpl userDetailsServiceImpl
			) {
		
		
		super(authenticationManager);
		//this.userDetailsServiceImpl = userDetailsServiceImpl;
		
		
	}
	
	
	 
	 @Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		 String header = request.getHeader(this.securityConstants.HEADER_STRING);
		 
		 if( header == null || !header.startsWith(this.securityConstants.TOKEN_PREFIX) ) {
			 chain.doFilter(request, response);
			 return;
		 }
		 
		 UsernamePasswordAuthenticationToken authentication = getAuthentication(request);
		 
		 SecurityContextHolder.getContext().setAuthentication(authentication);
	        
	        
			System.out.println(  );
			System.out.println( " JWTAuthorizationFilter " );
			
			// super.doFilterInternal(request, response, chain);
	        chain.doFilter(request, response);
		
	}
	 
	private UsernamePasswordAuthenticationToken getAuthentication( HttpServletRequest request){
		 
		String token = request.getHeader(securityConstants.HEADER_STRING);
		
		if( token == null ) { return null;}
			
		String username = Jwts.parser().setSigningKey(securityConstants.SECRET )
			.parseClaimsJws(token.replace(securityConstants.TOKEN_PREFIX, ""))
			.getBody().getSubject();
		
	
			
			// UserDetails userDetails = userDetailsServiceImpl.loadUserByUsername(username);
			
			 return new UsernamePasswordAuthenticationToken(username, null, new ArrayList<>());
		
			// return username!=null ?  new UsernamePasswordAuthenticationToken(username, null, userDetails.getAuthorities()) : null;
			
		
		
	 }

}
