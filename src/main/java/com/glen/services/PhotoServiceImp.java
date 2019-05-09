package com.glen.services;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.glen.model.Perdorues;
import com.glen.model.Photo;
import com.glen.repository.PerdoruesRepo;
import com.glen.repository.PhotoRepo;

@Service
public class PhotoServiceImp implements PhotoService{
	
	String uploadDirectory = System.getProperty("user.dir");
	
	@Autowired
	private PhotoRepo photoRepo;
	
	@Autowired
	private PerdoruesRepo perdoruesRepo;
	
	public void uploadPhoto( MultipartFile  files , String username ) 
		throws IOException {
		
		System.out.println(" uploadDirectory ");
		System.out.println( uploadDirectory );
		
		Perdorues perdorues = perdoruesRepo.getPerdoruesByEmail(username);
		List<Photo> photolist =	photoRepo.getPhotoByUserId( perdorues.getId() );
			
		//	Perdorues perdorues = perdoruesRepo.getPerdoruesByEmail( username );
			if( photolist.size() == 0 )
			{
				
				Photo photo = new Photo();
				
				photo.setName( files.getOriginalFilename() );
				photo.setUserId( perdorues.getId() );
				
				photoRepo.save(photo);
				
				saveFile( files );
			
			}
			else 
			{
				
				String delAns =	deletePhoto( photolist.get(0).getName() , username ) ;
	
				Photo photo = new Photo();
				
				photo.setName( files.getOriginalFilename() );
				photo.setUserId( perdorues.getId() );
				
				photoRepo.save(photo);
				
				saveFile( files );
				
			}
			
	
	}



		public void saveFile( MultipartFile  files ) throws IOException {

			//String path ="C:\\Users\\user\\Documents\\angular-documents\\myBlog\\src\\assets\\photos\\";
			String path = uploadDirectory + "\\src\\main\\resources\\static\\assets\\photos\\";
			
			File saveFile = new File(path + files.getOriginalFilename());
			
			saveFile.createNewFile();
			FileOutputStream writefile = new FileOutputStream(saveFile);
			writefile.write(files.getBytes());
			writefile.close();
		}
		
		
		
		
		
		public String deletePhoto( String photoName, String username ) {
			String ans =  "No file found to delete " ;
			
			System.out.println(photoName);
			
			//String path ="C:\\Users\\user\\Documents\\angular-documents\\myBlog\\src\\assets\\photos\\";
			String path = uploadDirectory + "\\src\\main\\resources\\static\\assets\\photos\\";
			
					
			File delFile = new File(path + photoName);
			
		
			Perdorues perdorues = 	 perdoruesRepo.getPerdoruesByEmail( username);
			
			List<Photo> photolist =	photoRepo.getPhotoByUserId( perdorues.getId() );
			
			
			if( photolist.size() == 1) {

				System.out.println("deletefile brenda if ");
				
			 delFile.delete() ; 

				photoRepo.deleteById( photolist.get(0).getId() );
				System.out.println("File deleted successfully");
				ans = "File deleted successfully";
				
		
				}else {
					
					System.out.println("No file found to delete ");
					
				}
			
			
			return ans ;
				
		}

}
