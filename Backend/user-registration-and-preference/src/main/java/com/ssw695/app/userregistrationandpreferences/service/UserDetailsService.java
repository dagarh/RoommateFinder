package com.ssw695.app.userregistrationandpreferences.service;

import java.util.List;

import com.ssw695.app.userregistrationandpreferences.contract.request.UserPreferenceRequest;
import com.ssw695.app.userregistrationandpreferences.contract.request.UserProfileRequest;
import com.ssw695.app.userregistrationandpreferences.contract.response.UserPreferenceResponse;
import com.ssw695.app.userregistrationandpreferences.contract.response.UserProfileResponse;
import com.ssw695.app.userregistrationandpreferences.contract.response.base.ErrorDTO;

/**
 * 
 * @author Himanshu Dagar
 */
public interface UserDetailsService {
	
	/**
	 * 
	 * @param emailId
	 * @param userProfileRequest
	 * @param errorList
	 */
	void postUserProfile(String emailId, UserProfileRequest userProfileRequest, List<ErrorDTO> errorList);
	
	/**
	 * 
	 * @param emailId
	 * @param userPreferenceRequest
	 * @param errorList
	 */
	void postUserPreference(String emailId, UserPreferenceRequest userPreferenceRequest, List<ErrorDTO> errorList);
	
	/**
	 * 
	 * @param emailId
	 * @param errorList
	 * @return
	 */
	UserProfileResponse fetchProfileData(String emailId, List<ErrorDTO> errorList);
	
	/**
	 * 
	 * @param emailId
	 * @param errorList
	 * @return
	 */
	UserPreferenceResponse fetchPreferenceData(String emailId, List<ErrorDTO> errorList);
}
