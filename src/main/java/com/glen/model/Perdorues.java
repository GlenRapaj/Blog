package com.glen.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="perdorues")
public class Perdorues {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	private int id;
	
	@Column(name="emer")
	private String emer ;
	
	@Column(name="mbiemer")
	private String mbiemer ;
	
	@Column(name="username")
	private String username ;  // email
	
	@Column(name="mosha")
	private int age ;
	
	@Column(name="password")
	private String password ;
	
	@Column(name="role")
	private String role ;
	
	@Column(name="enabled")
	private short enabled;

	public Perdorues() {
		super();
	}

	public Perdorues(int id, String emer, String mbiemer, String username, int age, String password, String role,
			short enabled) {
		super();
		this.id = id;
		this.emer = emer;
		this.mbiemer = mbiemer;
		this.username = username;
		this.age = age;
		//this.password = password;
		this.role = role;
		this.enabled = enabled;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmer() {
		return emer;
	}

	public void setEmer(String emer) {
		this.emer = emer;
	}

	public String getMbiemer() {
		return mbiemer;
	}

	public void setMbiemer(String mbiemer) {
		this.mbiemer = mbiemer;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}



	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public short getEnabled() {
		return enabled;
	}

	public void setEnabled(short enabled) {
		this.enabled = enabled;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Perdorues [id=" + id + ", emer=" + emer + ", mbiemer=" + mbiemer + ", username=" + username + ", age="
				+ age + ", password=" + password + ", role=" + role + ", enabled=" + enabled + "]";
	}

	
	

}
