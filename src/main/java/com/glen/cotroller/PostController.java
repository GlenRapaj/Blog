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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.glen.model.Perdorues;
import com.glen.model.Posts;
import com.glen.model.UserIdName;
import com.glen.repository.PerdoruesRepo;
import com.glen.repository.PostsRepo;

@RestController
@CrossOrigin(origins="http://localhost:4200" , exposedHeaders="Access-Control-Allow-Origin")
public class PostController {
	
	@Autowired
	private PostsRepo postsRepo;
	
	@Autowired
	private PerdoruesRepo perdoruesRepo;
	
	@GetMapping("/alluserposts/{id}")
	public Posts[] getPostsByUserId(@PathVariable int id ){
		
		//System.out.println( "/alluserposts/{id}" );
		//System.out.println( id );
		
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String str = auth.getName();
		System.out.println(str );
		
		if( !str.equalsIgnoreCase("anonymousUser") ) {
			
		
		
		List<Posts> postList = postsRepo.getAllPostsByUserId(  id);
		
		Posts[] posts = new Posts[ postList.size() ];
		
		posts = postList.toArray(posts);
		
		//System.out.println( "posts" );
		//System.out.println( posts );
		
		return posts;
		
		}else {
			System.out.println("elsi");
			
			return null;
		}
		
	}
	
	@GetMapping("/allposts")
	public Posts[] getPosts() {
		
		List<Posts> postList = postsRepo.findAll();
		
		Posts[] posts = new Posts[ postList.size() ];
		
		
		posts = postList.toArray(posts);
		
		
		return posts;
		
	}
	
	
	@GetMapping("/allposts/{id}")
	public Posts getPostId(@PathVariable int id){
		
		System.out.println( id );
		
		Posts post = postsRepo.findById(id).orElse( new Posts() );
		return post;
	}
	
	
	@CrossOrigin(origins="http://localhost:4200" )
	@PutMapping("/updatepost/{id}")
	public void updatePost(@PathVariable int id , @RequestBody Posts post){
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String str = auth.getName();
		System.out.println(str );
		
		if( !str.equalsIgnoreCase("anonymousUser") ) {
		
		System.out.println( id );
		System.out.println( post );
		
		String  escapedHTML = post.getBody();
		String unEscapedString = StringEscapeUtils.unescapeHtml4(escapedHTML);
		
		post.setBody( unEscapedString );
		
		postsRepo.save(post);
		
		}else {
			System.out.println( "unauthorized" );
		}
		
	}
	
	@PostMapping("/makepost")
	public ResponseEntity<Posts> postPosts( @RequestBody Posts post){
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String str = auth.getName();
		System.out.println(str );
		
		if( !str.equalsIgnoreCase("anonymousUser") ) {
		
		System.out.println( post );
		
		String  escapedHTML = post.getBody();
		String unEscapedString = StringEscapeUtils.unescapeHtml4(escapedHTML);
		
		//System.out.println(post.getBody() );
		  //System.out.println(unEscapedString);
		
		post.setBody( unEscapedString );
		
		postsRepo.save(post);
		
		return new ResponseEntity<Posts>(post,HttpStatus.OK);
		}else {
			return new ResponseEntity<Posts>(HttpStatus.FORBIDDEN);
		}
		
	}
	
	
	@DeleteMapping("/deletepost/{id}")
	public void deletePosts(@PathVariable int id) {
		
		 Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			String str = auth.getName();
			System.out.println(str );
			
			if( !str.equalsIgnoreCase("anonymousUser") ) {
				

				postsRepo.deleteById(id);
			}
		
	}
	
	
	@PostMapping("/validateLogin")
	public ResponseEntity<UserIdName> getUserId(@RequestBody String username ){
		
		System.out.println( " validateLogin enpoint body " );
		System.out.println( username );
		
		 Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			String str = auth.getName();
			System.out.println(str );
			
			
			if( !str.equalsIgnoreCase("anonymousUser") ) {
				

				UserIdName uin = new UserIdName();
				
				System.out.println( " brenda if " );
				
				Perdorues perdorues = perdoruesRepo.getPerdoruesByEmail(str);
				 
					uin.setAnswer( perdorues.getId() );
					uin.setName(perdorues.getEmer());
					
					// System.out.println( uin );
					
					return new ResponseEntity<UserIdName>( uin, HttpStatus.OK);
					
			}else {
				
				System.out.println( " brenda else " );
				
				return new ResponseEntity<UserIdName>( HttpStatus.FORBIDDEN);
				
			}
			
		
		
	}

}
