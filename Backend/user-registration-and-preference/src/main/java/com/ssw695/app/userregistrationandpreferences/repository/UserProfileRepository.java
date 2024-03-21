package com.ssw695.app.userregistrationandpreferences.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssw695.app.userregistrationandpreferences.entity.UserProfile;

/**
 * @author Himanshu Dagar
 */
@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {
	
	 // Method to find a user profile by email ID
    Optional<UserProfile> findByEmailId(String emailId);
}
