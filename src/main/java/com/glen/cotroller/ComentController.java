package com.glen.cotroller;

import java.util.List;

import org.apache.commons.lang3.StringEscapeUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.glen.model.Perdorues;
import com.glen.model.PostComents;
import com.glen.model.Posts;
import com.glen.repository.PerdoruesRepo;
import com.glen.repository.PostComentsRepo;
import com.glen.repository.PostsRepo;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ComentController {
	
	@Autowired
	private PostComentsRepo postComentsRepo;
	
	@Autowired
	private PostsRepo postsRepo ;
	
	@Autowired
	private PerdoruesRepo perdoruesRepo;
	
	@GetMapping("read/coments/{id}")
	public PostComents[] readComentsbyPostId(@PathVariable int id ){
		
		//  id; eshte postId
		System.out.println("ok ok");
		System.out.println(id);
		List<PostComents> comentList =	postComentsRepo.getPostComentsByPostId( id );
		
		PostComents[] coments = new PostComents[ comentList.size() ];
		
			coments = comentList.toArray(coments);
			
			return coments;
		
	}
	
	@PostMapping("/coments")
	public ResponseEntity<String> postComent(@RequestBody PostComents coment ){
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String user = auth.getName();
		System.out.println(user );
		
		String answer = "ok";
		
		if( user.equalsIgnoreCase(coment.getUsername()) ) {
			
			String unEscapedString = coment.getComentBody();
			 // @SuppressWarnings("deprecation")
			String escapedHTML = StringEscapeUtils.escapeHtml4(unEscapedString);
			//String escapedHTML = StringEscapeUtils.unescapeHtml4(unEscapedString);
			  
			System.out.println(coment.getComentBody());
			  System.out.println(escapedHTML);
			  
			  coment.setComentBody( escapedHTML );
		
		postComentsRepo.save(coment);
		
		answer = "{\"answer\": \"" + answer + "\"}";
		
		return new ResponseEntity<String>(answer , HttpStatus.OK);
	}
		else {
			
			answer = "Unauthorized user";
			answer = "{\"answer\": \"" + answer + "\"}";
			return new ResponseEntity<String>(answer , HttpStatus.OK);
		}
		
	}
	
	@DeleteMapping("coments/{id}")
	public void deleteComent(@PathVariable int id){
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String user = auth.getName();
		System.out.println(user );
		
		
		
		 
		
		PostComents coment = postComentsRepo.findById(id).orElse(new PostComents() );
		int pid = coment.getPostId();
		
		Posts posts = postsRepo.findById(pid).orElse(new Posts() );
		int uid = posts.getUserId();
		
		Perdorues perdorues = perdoruesRepo.findById(uid).orElse(new Perdorues() );
		
		//System.out.println(user );
		System.out.println(coment.getUsername() );
		System.out.println(perdorues.getUsername() );
		
		System.out.println(  user.equals(coment.getUsername() ) );
		System.out.println( perdorues.getUsername().equals( user ) );
		
		if( user.equalsIgnoreCase(coment.getUsername() ) || perdorues.getUsername().equals( user ) ) {
		
		postComentsRepo.deleteById(id);
		
		}
		else {
			System.out.println("Unauthorized user");
		}
	}

}
