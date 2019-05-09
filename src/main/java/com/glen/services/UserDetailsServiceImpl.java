package com.glen.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.glen.model.Perdorues;
import com.glen.repository.PerdoruesRepo;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	private PerdoruesRepo perdoruesRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		
		Perdorues perdorues = perdoruesRepo.getPerdoruesByEmail( username );
		
		if(perdorues == null) {
			throw new UsernameNotFoundException( "User Not Found with -> username or email : " + username );
			
		}else {
			
			GrantedAuthority authority = new SimpleGrantedAuthority(perdorues.getRole() );
			
			System.out.println(authority);
			User user = new User(perdorues.getUsername() ,perdorues.getPassword() ,Arrays.asList(authority));
			
			System.out.println(user);
			UserDetails userDetails = (UserDetails) user;
			System.out.println(userDetails);
			return userDetails;
			
		}
		
		
	}

}
