package com.glen.cotroller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.glen.model.Perdorues;
import com.glen.model.Photo;
import com.glen.repository.PerdoruesRepo;
import com.glen.repository.PhotoRepo;
import com.glen.services.PhotoService;
import com.glen.services.PhotoServiceImp;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class PhotoController {
	
	@Autowired
	private PhotoRepo photoRepo;
	
	@Autowired
	private PerdoruesRepo perdoruesRepo;
	
	@Autowired
	private PhotoService photoService;
	
	
	
	
	@PostMapping("/getphoto")
	public String 	getPhotoName(@RequestBody String id ){
		
		
		System.out.println("getphoto");
		
		String answer = "no_image.jfif";
		 System.out.println(id);
		
		 int userId = Integer.parseInt(id);
		 List<Photo> photo =  photoRepo.getPhotoByUserId( userId );
		 System.out.println(photo.size());
		 
		if(photo.size() !=0 ) {
			
			System.out.println("getphoto brenda if ");
			
			answer = photo.get(0).getName();
			System.out.println(answer);
		}
		System.out.println("getphoto jasht if ");
		
		answer = "{\"answer\": \"" + answer + "\"}";
		return answer;
		
	}
	
	
	

	
	@PostMapping(path="/upload" , consumes=MediaType.MULTIPART_FORM_DATA_VALUE )
	public String uploadPhoto(@RequestParam("file") MultipartFile  files)
			throws IOException {
	
		System.out.println("/upload" );
		
		 Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			String user = auth.getName();
			System.out.println(user );
			
			String answer;
			// ska mbaruar duhet te shtohet nje if else per te pare prapashtesat e fotove
			
			if( !user.equalsIgnoreCase("anonymousUser") && ( files.getOriginalFilename().endsWith(".jpg") || files.getOriginalFilename().endsWith(".png") )) {
				System.out.println("/upload brenda if " );
				
				photoService.uploadPhoto(files , user );
				
				answer = "ok";
				
			}else{
				answer = "You must login to be able to upload photo.";
			}
			
			
			
			answer = "{\"answer\": \"" + answer + "\"}";
			return answer;
	
	}
	
	
	
	@PostMapping("/deletefile")
	public String deletePhoto(@RequestBody String photoName) {
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String user = auth.getName();
		System.out.println(user );
		
		String answer;
		
		if( user != null ) {
			
			answer = photoService.deletePhoto(photoName, user);
		}else {
			answer = "You must login to be able to delete photo.";
		}
		
		answer = "{\"answer\": \"" + answer + "\"}";
		return answer;
	}
	
	

}
