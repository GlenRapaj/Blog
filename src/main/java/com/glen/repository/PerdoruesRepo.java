package com.glen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.glen.model.Perdorues;

public interface PerdoruesRepo extends JpaRepository<Perdorues, Integer>{
	
	@Query("from Perdorues where username=?1 ")
	Perdorues getPerdoruesByEmail(String email);
	
	@Query("from Perdorues where username=?1 ")
	List<Perdorues> getAllPerdoruesByEmail(String email);
	
	
}
