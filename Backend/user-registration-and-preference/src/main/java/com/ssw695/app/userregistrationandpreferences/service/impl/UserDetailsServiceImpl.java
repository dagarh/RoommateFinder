package com.ssw695.app.userregistrationandpreferences.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssw695.app.userregistrationandpreferences.contract.request.UserPreferenceRequest;
import com.ssw695.app.userregistrationandpreferences.contract.request.UserProfileRequest;
import com.ssw695.app.userregistrationandpreferences.contract.response.base.ErrorDTO;
import com.ssw695.app.userregistrationandpreferences.entity.UserPreference;
import com.ssw695.app.userregistrationandpreferences.entity.UserProfile;
import com.ssw695.app.userregistrationandpreferences.repository.UserPreferenceRepository;
import com.ssw695.app.userregistrationandpreferences.repository.UserProfileRepository;
import com.ssw695.app.userregistrationandpreferences.service.UserDetailsService;

import io.micrometer.common.util.StringUtils;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

/**
 * @author Himanshu Dagar
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
		
	@PersistenceContext
    private EntityManager entityManager;

	@Autowired
	private UserProfileRepository userProfileRepository;
	
	@Autowired
	private UserPreferenceRepository userPreferenceRepository;
	
	@Override
	@Transactional(rollbackFor = Exception.class)
	public void postUserProfile(String emailId, UserProfileRequest userProfileRequest, List<ErrorDTO> errorList) {
		
		UserProfile userProfile = null;
		
		Optional<UserProfile> optionalUserProfile = userProfileRepository.findByEmailId(emailId);
		if(optionalUserProfile.isPresent()) {
			userProfile = optionalUserProfile.get();
		} else {
			userProfile = new UserProfile();
			userProfile.setEmailId(emailId);
		}
		
		if(userProfileRequest.getAge() != null) {
			userProfile.setAge(userProfileRequest.getAge());
		}
		
		if(!StringUtils.isEmpty(userProfileRequest.getGender())) {
			userProfile.setGender(userProfileRequest.getGender());
		}
		
		if(!StringUtils.isEmpty(userProfileRequest.getName())) {
			userProfile.setName(userProfileRequest.getName());
		}
		
		if(!StringUtils.isEmpty(userProfileRequest.getOccupation())) {
			userProfile.setOccupation(userProfileRequest.getOccupation());
		}
		
		userProfileRepository.save(userProfile);
		userProfileRepository.flush();
		entityManager.clear();
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public void postUserPreference(String emailId, UserPreferenceRequest userPreferenceRequest,
			List<ErrorDTO> errorList) {
		
		UserPreference userPreference = null;
		
		Optional<UserPreference> optionalUserPreference = userPreferenceRepository.findByEmailId(emailId);
		if(optionalUserPreference.isPresent()) {
			userPreference = optionalUserPreference.get();
		} else {
			userPreference = new UserPreference();
			userPreference.setEmailId(emailId);
		}
		
		if (!StringUtils.isEmpty(userPreferenceRequest.getEatingHabit())) {
	        userPreference.setEatingHabit(userPreferenceRequest.getEatingHabit());
	    }

	    if (!StringUtils.isEmpty(userPreferenceRequest.getSocialHabit())) {
	        userPreference.setSocialHabit(userPreferenceRequest.getSocialHabit());
	    }

	    if (!StringUtils.isEmpty(userPreferenceRequest.getSmokingDrinking())) {
	        userPreference.setSmokingDrinking(userPreferenceRequest.getSmokingDrinking());
	    }

	    if (!StringUtils.isEmpty(userPreferenceRequest.getPetOwnership())) {
	        userPreference.setPetOwnership(userPreferenceRequest.getPetOwnership());
	    }

	    if (!StringUtils.isEmpty(userPreferenceRequest.getAccommodationType())) {
	        userPreference.setAccommodationType(userPreferenceRequest.getAccommodationType());
	    }

	    if (!StringUtils.isEmpty(userPreferenceRequest.getLocation())) {
	        userPreference.setLocation(userPreferenceRequest.getLocation());
	    }

	    if (userPreferenceRequest.getRentBudget() != null) {
	        userPreference.setRentBudget(userPreferenceRequest.getRentBudget());
	    }

	    if (!StringUtils.isEmpty(userPreferenceRequest.getLeaseTerm())) {
	        userPreference.setLeaseTerm(userPreferenceRequest.getLeaseTerm());
	    }

	    if (!StringUtils.isEmpty(userPreferenceRequest.getDesiredAttrInRoommate())) {
	        userPreference.setDesiredAttrInRoommate(userPreferenceRequest.getDesiredAttrInRoommate());
	    }

	    if (!StringUtils.isEmpty(userPreferenceRequest.getGender())) {
	        userPreference.setGender(userPreferenceRequest.getGender());
	    }

	    // Save the userPreference entity to the database
	    userPreferenceRepository.save(userPreference);
	    userPreferenceRepository.flush();
		entityManager.clear();
	}
}