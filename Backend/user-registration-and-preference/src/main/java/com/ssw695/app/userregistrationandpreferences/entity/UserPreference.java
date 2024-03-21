package com.ssw695.app.userregistrationandpreferences.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * @author Himanshu Dagar
 *
 */
@Entity
@Table(name = "UserPreference")
public class UserPreference {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "emailId")
	private String emailId;
	
	@Column(name = "eatingHabit")
	private String eatingHabit;
	
	@Column(name = "socialHabit")
	private String socialHabit;
	
	@Column(name = "smokingDrinking")
	private String smokingDrinking;
	
	@Column(name = "petOwnership")
	private String petOwnership;
	
	@Column(name = "accommodationType")
	private String accommodationType;
	
	@Column(name = "location")
	private String location;
	
	@Column(name = "rentBudget")
	private int rentBudget;
	
	@Column(name = "leaseTerm")
	private String leaseTerm;
	
	@Column(name = "desiredAttrInRoommate")
	private String desiredAttrInRoommate;
	
	@Column(name = "gender")
	private String gender;

	public UserPreference() {}
	
	/**
	 * @param id
	 * @param emailId
	 * @param eatingHabit
	 * @param socialHabit
	 * @param smokingDrinking
	 * @param petOwnership
	 * @param accommodationType
	 * @param location
	 * @param rentBudget
	 * @param leaseTerm
	 * @param desiredAttrInRoommate
	 * @param gender
	 */
	public UserPreference(int id, String emailId, String eatingHabit, String socialHabit, String smokingDrinking,
			String petOwnership, String accommodationType, String location, int rentBudget, String leaseTerm,
			String desiredAttrInRoommate, String gender) {
		super();
		this.id = id;
		this.emailId = emailId;
		this.eatingHabit = eatingHabit;
		this.socialHabit = socialHabit;
		this.smokingDrinking = smokingDrinking;
		this.petOwnership = petOwnership;
		this.accommodationType = accommodationType;
		this.location = location;
		this.rentBudget = rentBudget;
		this.leaseTerm = leaseTerm;
		this.desiredAttrInRoommate = desiredAttrInRoommate;
		this.gender = gender;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the emailId
	 */
	public String getEmailId() {
		return emailId;
	}

	/**
	 * @param emailId the emailId to set
	 */
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	/**
	 * @return the eatingHabit
	 */
	public String getEatingHabit() {
		return eatingHabit;
	}

	/**
	 * @param eatingHabit the eatingHabit to set
	 */
	public void setEatingHabit(String eatingHabit) {
		this.eatingHabit = eatingHabit;
	}

	/**
	 * @return the socialHabit
	 */
	public String getSocialHabit() {
		return socialHabit;
	}

	/**
	 * @param socialHabit the socialHabit to set
	 */
	public void setSocialHabit(String socialHabit) {
		this.socialHabit = socialHabit;
	}

	/**
	 * @return the smokingDrinking
	 */
	public String getSmokingDrinking() {
		return smokingDrinking;
	}

	/**
	 * @param smokingDrinking the smokingDrinking to set
	 */
	public void setSmokingDrinking(String smokingDrinking) {
		this.smokingDrinking = smokingDrinking;
	}

	/**
	 * @return the petOwnership
	 */
	public String getPetOwnership() {
		return petOwnership;
	}

	/**
	 * @param petOwnership the petOwnership to set
	 */
	public void setPetOwnership(String petOwnership) {
		this.petOwnership = petOwnership;
	}

	/**
	 * @return the accommodationType
	 */
	public String getAccommodationType() {
		return accommodationType;
	}

	/**
	 * @param accommodationType the accommodationType to set
	 */
	public void setAccommodationType(String accommodationType) {
		this.accommodationType = accommodationType;
	}

	/**
	 * @return the location
	 */
	public String getLocation() {
		return location;
	}

	/**
	 * @param location the location to set
	 */
	public void setLocation(String location) {
		this.location = location;
	}

	/**
	 * @return the rentBudget
	 */
	public int getRentBudget() {
		return rentBudget;
	}

	/**
	 * @param rentBudget the rentBudget to set
	 */
	public void setRentBudget(int rentBudget) {
		this.rentBudget = rentBudget;
	}

	/**
	 * @return the leaseTerm
	 */
	public String getLeaseTerm() {
		return leaseTerm;
	}

	/**
	 * @param leaseTerm the leaseTerm to set
	 */
	public void setLeaseTerm(String leaseTerm) {
		this.leaseTerm = leaseTerm;
	}

	/**
	 * @return the desiredAttrInRoommate
	 */
	public String getDesiredAttrInRoommate() {
		return desiredAttrInRoommate;
	}

	/**
	 * @param desiredAttrInRoommate the desiredAttrInRoommate to set
	 */
	public void setDesiredAttrInRoommate(String desiredAttrInRoommate) {
		this.desiredAttrInRoommate = desiredAttrInRoommate;
	}

	/**
	 * @return the gender
	 */
	public String getGender() {
		return gender;
	}

	/**
	 * @param gender the gender to set
	 */
	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "UserPreference [id=" + id + ", emailId=" + emailId + ", eatingHabit=" + eatingHabit + ", socialHabit="
				+ socialHabit + ", smokingDrinking=" + smokingDrinking + ", petOwnership=" + petOwnership
				+ ", accommodationType=" + accommodationType + ", location=" + location + ", rentBudget=" + rentBudget
				+ ", leaseTerm=" + leaseTerm + ", desiredAttrInRoommate=" + desiredAttrInRoommate + ", gender=" + gender
				+ "]";
	}
	
}
