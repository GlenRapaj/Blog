package com.glen.model;

public class RegisterUserDataModel {
		
	private String email ;
	
	private String pasword;
	
	private int mosha;
	
	private String emer;
	
	private String mbiemer;

	public RegisterUserDataModel(String email, String pasword, int mosha, String emer, String mbiemer) {
		super();
		this.email = email;
		this.pasword = pasword;
		this.mosha = mosha;
		this.emer = emer;
		this.mbiemer = mbiemer;
	}
	
	

	public RegisterUserDataModel() {
		super();
	}



	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPasword() {
		return pasword;
	}

	public void setPasword(String pasword) {
		this.pasword = pasword;
	}

	public int getMosha() {
		return mosha;
	}

	public void setMosha(int mosha) {
		this.mosha = mosha;
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



	@Override
	public String toString() {
		return "RegisterUserDataModel [email=" + email + ", pasword=" + pasword + ", mosha=" + mosha + ", emer=" + emer
				+ ", mbiemer=" + mbiemer + "]";
	}
	
	

}
