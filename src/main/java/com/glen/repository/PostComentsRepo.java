package com.glen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.glen.model.PostComents;

public interface PostComentsRepo extends JpaRepository<PostComents, Integer>{
	
	List<PostComents>  getPostComentsByPostId(int postId );

}
