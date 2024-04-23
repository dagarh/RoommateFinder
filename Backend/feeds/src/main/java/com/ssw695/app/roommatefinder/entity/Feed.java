package com.ssw695.app.roommatefinder.entity;
import jakarta.persistence.*;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "feed")
@JsonIgnoreProperties(value = { "hibernateLazyInitializer", "handler", "created" })
public class Feed {
	@Id
	@Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer FeedId;
	private String userId;
	private Integer rent;
	private String dailyRoutines;
	private String cleanlinessHabits;
	private String noisetolerance;
	private String socialPreferences;
	private String sleepingSchedules;
	private String location;
	private String descriptionOfCurrentOccupants;
	
	
    public Feed() {
		
	}

	public Feed(Integer FeedId, String userId, Integer rent, String dailyRoutines, String cleanlinessHabits, String noisetolerance, String socialPreferences,
			String sleepingSchedules, String location, String descriptionOfCurrentOccupants)
	{
		super();
		this.FeedId = FeedId;
		this.userId = userId;
		this.rent = rent;
		this.dailyRoutines = dailyRoutines;
		this.cleanlinessHabits = cleanlinessHabits;
		this.noisetolerance = noisetolerance;
		this.socialPreferences = socialPreferences;
		this.sleepingSchedules = sleepingSchedules;
		this.location = location;
		this.descriptionOfCurrentOccupants = descriptionOfCurrentOccupants;
		
	}

	public Integer getRent() {
		return rent;
	}
	
	public void setRent(Integer rent) {
		this.rent = rent;
	}
	
	public String getuserId() {
		return userId;
	}
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public Integer getFeedId() {
		return FeedId;
	}
	
	public void setFeedId(Integer FeedId) {
		this.FeedId = FeedId;
	}


	public String getdailyRoutines() {
		return dailyRoutines;
	}
	
	public void setdailyRoutines(String dailyRoutines) {
		this.dailyRoutines = dailyRoutines;
	}


	public String getcleanlinessHabits() {
		return cleanlinessHabits;
	}
	
	public void setcleanlinessHabits(String cleanlinesshabits) {
		this.cleanlinessHabits = cleanlinesshabits;
	}


	public String getnoisetolerance() {
		return noisetolerance;
	}
	
	public void setnoisetolerance(String noisetolerance) {
		this.noisetolerance = noisetolerance;
	}


	public String getsocialPreferences() {
		return socialPreferences;
	}
	
	public void setsocialPreferences(String socialPreferences) {
		this.socialPreferences = socialPreferences;
	}


	public String getsleepingSchedules() {
		return sleepingSchedules;
	}
	
	public void setsleepingSchedules(String sleepingSchedules) {
		this.sleepingSchedules = sleepingSchedules;
	}


	public String getlocation() {
		return location;
	}
	

	public void setLocation(String location) {
		this.location = location;
	}
	
	public String getdescriptionOfCurrentOccupants() {
		return descriptionOfCurrentOccupants;
	}
	
	public void setdescriptionOfCurrentOccupants(String descriptionOfCurrentOccupants) {
		this.descriptionOfCurrentOccupants = descriptionOfCurrentOccupants;
	}


	@Override
	public String toString() {
		return "Feed [FeedId=" + FeedId + ",userId=" + userId + ", rent=" + rent + ", dailyRoutines=" + dailyRoutines + ", cleanlinessHabits=" + cleanlinessHabits
				+ ", noisetolerance=" + noisetolerance + ", socialPreferences=" + socialPreferences + ", sleepingSchedules="
				+ sleepingSchedules + ", location=" + location + ", descriptionOfCurrentOccupants=" + descriptionOfCurrentOccupants
				+ "]";
	}

}
