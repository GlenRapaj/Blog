package com.glen.services;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface PhotoService {
	
	public void uploadPhoto( MultipartFile  files , String str ) throws IOException ;
	
	public String deletePhoto( String photoName, String username  ) ;

}
