package com.glen.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="posts")
public class Posts {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	private int id;
	
	@Column(name="title")
	private String title;
	
	@Column(name="userid")
	private int userId;
	
	@Column(name="username")
	private String username;
	
	@Lob
	@Column(name="body" , length=555555 , columnDefinition="LONGTEXT" )
	// @Column(name="body" , length=555555 , columnDefinition="TEXT" )
	private String body;

	

	public Posts(int id, String title, int userid, String username, String body) {
		super();
		this.id = id;
		this.title = title;
		this.userId = userid;
		this.username = username;
		this.body = body;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public Posts() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userid) {
		this.userId = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "Posts [id=" + id + ", title=" + title + ", userId=" + userId + ", username=" + username + ", body="
				+ body + "]";
	}

	
	
	

}
