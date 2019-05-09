package com.glen.model;

public class LoginDetails {
	
	private String	username ;
	private String password ;
	
	
	public LoginDetails(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}


	public LoginDetails() {
		super();
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "LoginDetails [username=" + username + ", password=" + password + "]";
	}
	
	
	
	

}
