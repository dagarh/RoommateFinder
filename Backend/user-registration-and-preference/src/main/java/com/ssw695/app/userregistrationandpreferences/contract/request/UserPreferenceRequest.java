package com.ssw695.app.userregistrationandpreferences.contract.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author Himanshu Dagar
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserPreferenceRequest {
	
	private String eatingHabit;

	private String socialHabit;
	
	private String smokingDrinking;
	
	private String petOwnership;
	
	private String accommodationType;
	
	private String location;
	
	private Integer rentBudget;
	
	private String leaseTerm;
	
	private String desiredAttrInRoommate;
	
	private String gender;

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
	public Integer getRentBudget() {
		return rentBudget;
	}

	/**
	 * @param rentBudget the rentBudget to set
	 */
	public void setRentBudget(Integer rentBudget) {
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
		return "UserPreferenceRequest [eatingHabit=" + eatingHabit + ", socialHabit=" + socialHabit
				+ ", smokingDrinking=" + smokingDrinking + ", petOwnership=" + petOwnership + ", accommodationType="
				+ accommodationType + ", location=" + location + ", rentBudget=" + rentBudget + ", leaseTerm="
				+ leaseTerm + ", desiredAttrInRoommate=" + desiredAttrInRoommate + ", gender=" + gender + "]";
	}
		
}
