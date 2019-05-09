package com.glen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.glen.model.Photo;

public interface PhotoRepo extends JpaRepository<Photo, Integer>{
	
	@Query("from Photo where userId=?1 ")
	List<Photo> getPhotoByUserId(int id);

}
