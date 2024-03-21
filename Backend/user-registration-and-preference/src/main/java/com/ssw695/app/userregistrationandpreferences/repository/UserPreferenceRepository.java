package com.ssw695.app.userregistrationandpreferences.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssw695.app.userregistrationandpreferences.entity.UserPreference;

/**
 * @author Himanshu Dagar
 */
@Repository
public interface UserPreferenceRepository extends JpaRepository<UserPreference, Integer> {
	
	// Method to find a user preference by email ID
    Optional<UserPreference> findByEmailId(String emailId);
}