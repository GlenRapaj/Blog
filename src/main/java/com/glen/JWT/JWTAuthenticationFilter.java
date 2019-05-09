package com.glen.JWT;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.glen.model.LoginDetails;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	
static SecurityConstants securityConstants ;
	
	private AuthenticationManager authenticationManager ;
	
	
	

	public JWTAuthenticationFilter( AuthenticationManager authenticationManager ) {
		super();
		
		this.authenticationManager = authenticationManager;
	}
	
	
	@Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
        try {
        	
        	LoginDetails creds = new ObjectMapper()
                    .readValue( req.getInputStream(), LoginDetails.class );
            
            
            System.out.println( creds );
            
            System.out.println( "   " );
	    	System.out.println( " attemptAuthentication  " );
			
			
            
            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            creds.getUsername(),
                            creds.getPassword() )
            );
            
            
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
    
    
    
    
    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                          Authentication auth) throws IOException, ServletException {
    	
    	System.out.println( " ok  " );
    	
    	LoginDetails creds = new ObjectMapper()
                .readValue( req.getInputStream(), LoginDetails.class );
       
    	String token = Jwts.builder()
                .setSubject( creds.getUsername() )
                .setExpiration( new Date(System.currentTimeMillis() + securityConstants.EXPIRATION_TIME ) )
                .signWith( SignatureAlgorithm.HS256, securityConstants.SECRET )
                .compact();
        
        System.out.println();
        System.out.println( token );
        
        

		System.out.println( "   " );
    	System.out.println( " successfulAuthentication  " );
		
		
        
      //  res.addHeader( HEADER_STRING , TOKEN_PREFIX + token);
        
    	token = "{\"Bearer \":\"" + token + "\"}";
    	
        res .getWriter().write( token );
        
      //mos duhet dhe rreshti i meposhtem per te vazhduar me tutje
      // chain.doFilter(req, res);
    }

}
