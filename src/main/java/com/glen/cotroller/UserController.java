package com.glen.cotroller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.glen.JWT.SecurityConstants;
import com.glen.model.LoginDetails;
import com.glen.model.Perdorues;
import com.glen.model.RegisterUserDataModel;
import com.glen.repository.PerdoruesRepo;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	private PerdoruesRepo perdoruesRepo;
	
	@Autowired
	private static SecurityConstants securityConstants;
	
	// @Autowired
	//  AuthenticationManager authenticationManager;
	   
	 
	 /*  
	  public UserController( AuthenticationManager authenticationManager ) {
			super();
			
			this.authenticationManager = authenticationManager;
		}
	*/
	  
	  
	
	@PostMapping("/login")
	public String login(@RequestBody LoginDetails userDetails) {
		
		 System.out.println("/login" );
		

		String token = "";
		System.out.println(userDetails );
		
		 List<Perdorues> userlist = perdoruesRepo.getAllPerdoruesByEmail( userDetails.getUsername() );
		 
		 System.out.println(userlist.size() );
		 
		 if( userlist.size() == 1) {
			
			 token = Jwts.builder().setSubject( userlist.get(0).getUsername() )
					 .setExpiration( new Date( System.currentTimeMillis() + securityConstants.EXPIRATION_TIME ) )
					 .signWith(SignatureAlgorithm.HS512, securityConstants.SECRET)
					 .compact();
					 
		 }
		 
		 System.out.println(token );
		 
		  token = "{\"Bearer \":\"" + token + "\"}";
		 return token;
		
	}
	
	
	@PostMapping("/singin")
	public ResponseEntity<Boolean> SingIn(@RequestBody RegisterUserDataModel registerUser ){
		
		System.out.println("singin");
		System.out.println( registerUser );
		
		if( perdoruesRepo.getPerdoruesByEmail( registerUser.getEmail() ) == null ) {
		Perdorues perdorues = new Perdorues();
		
		perdorues.setEmer( registerUser.getEmer() );
		perdorues.setMbiemer(registerUser.getMbiemer());
		perdorues.setPassword(registerUser.getPasword());
		perdorues.setUsername(registerUser.getEmail());
		perdorues.setAge(registerUser.getMosha());
		// perdorues.setId(0);
		perdorues.setRole("USER");
		short a = 1;
		perdorues.setEnabled(a);
		
		System.out.println( perdorues );
		
		perdoruesRepo.save(perdorues);
		
		return new ResponseEntity<Boolean>(true ,HttpStatus.OK);
		
		}else {
			
			System.out.println("singin else user i registruar ");
			return new ResponseEntity<Boolean>(false,HttpStatus.BAD_REQUEST);
			
		}
		
		
		
	}
	
	@PostMapping("/deleteacount")
	public boolean deleteUserAcount(@RequestBody String email) {
		
		System.out.println("/deleteacount" );
		System.out.println(email );
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String str = auth.getName();
		System.out.println(str );
		
		if( str != null ) {
			System.out.println("/deleteacount if" );
		
		Perdorues perdorues = perdoruesRepo.getPerdoruesByEmail(str);
		perdoruesRepo.delete(perdorues);
		
		return true;
		
		}else {
			System.out.println("/deleteacount else" );
			return false;
		}
		
	}
	
	
	
	

}
