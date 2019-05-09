package com.glen.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="post_coments")

public class PostComents {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	private int id;
	
	// @Column(name="coment_body" , length=555555 , columnDefinition="TEXT" )
	@Column(name="coment_body" , length=555555 , columnDefinition="TEXT" )
	private String comentBody;
	
	@Column(name="coment_user_name")
	private String comentUserName;
	
	@Column(name="post_id")
	private int postId;
	
	@Column(name="username")
	private String username;

	public PostComents(int id, String comentBody, String comentUserName, int postId, String username) {
		super();
		this.id = id;
		this.comentBody = comentBody;
		this.comentUserName = comentUserName;
		this.postId = postId;
		this.username = username;
	}

	public PostComents() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getComentBody() {
		return comentBody;
	}

	public void setComentBody(String comentBody) {
		this.comentBody = comentBody;
	}

	public String getComentUserName() {
		return comentUserName;
	}

	public void setComentUserName(String comentUserName) {
		this.comentUserName = comentUserName;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "PostComents [id=" + id + ", comentBody=" + comentBody + ", comentUserName=" + comentUserName
				+ ", postId=" + postId + ", username=" + username + "]";
	}
	
	
}
