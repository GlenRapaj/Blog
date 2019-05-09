package com.glen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.glen.model.Posts;

public interface PostsRepo extends JpaRepository<Posts, Integer>{
	
	@Query("from Posts where userid=?1")
	List<Posts> getAllPostsByUserId( int id);

}
