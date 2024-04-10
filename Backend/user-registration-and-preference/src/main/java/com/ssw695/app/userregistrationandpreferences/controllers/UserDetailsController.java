package com.ssw695.app.userregistrationandpreferences.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssw695.app.userregistrationandpreferences.constant.UrlConstants;
import com.ssw695.app.userregistrationandpreferences.constant.UserRegistrationAndPreferencesConstant;
import com.ssw695.app.userregistrationandpreferences.contract.request.UserPreferenceRequest;
import com.ssw695.app.userregistrationandpreferences.contract.request.UserProfileRequest;
import com.ssw695.app.userregistrationandpreferences.contract.response.UserPreferenceResponse;
import com.ssw695.app.userregistrationandpreferences.contract.response.UserProfileResponse;
import com.ssw695.app.userregistrationandpreferences.contract.response.base.ErrorDTO;
import com.ssw695.app.userregistrationandpreferences.contract.response.base.ResponseDTO;
import com.ssw695.app.userregistrationandpreferences.service.UserDetailsService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

/**
 * This is the controller responsible for collecting the 
 * user profile details along with their preferences.  
 */
@Api(value = "Users API", description = "[All Users related APIs]")
@RestController
@RequestMapping(UrlConstants.CONTROLLER_URL)
public class UserDetailsController {
	
	@Autowired
	UserDetailsService userDetailsService; 
	
	@CrossOrigin
	@ApiOperation(value = "Add/Update user profile information", notes = "Adding/Updating user profile info", response = ResponseDTO.class)
	@PostMapping(value = UrlConstants.USER_PROFILE_URL, produces = "application/json")
	public ResponseDTO<?> postUserProfileInfo(
			@ApiParam(value = "emailId associated with which information will be updated", required = true) @PathVariable("emailId") String emailId,
			@RequestBody UserProfileRequest userProfileRequest) {

		ResponseDTO<?> responseBody = new ResponseDTO<>();
		List<ErrorDTO> errorList = new ArrayList<>();

		// Regex pattern for validating email
	    String emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$";
	    Pattern pattern = Pattern.compile(emailRegex);

		try {
			
			// Validate the emailId against the regex
	        if (!pattern.matcher(emailId).matches()) {
	            // If emailId is not valid, throw a custom exception or handle the error
	            // For example, adding an error to errorList
	            ErrorDTO error = new ErrorDTO();
	            error.setMessage("Invalid email format.");
	            errorList.add(error);
	            responseBody.setError(errorList);
	            responseBody.setStatus(UserRegistrationAndPreferencesConstant.FAILURE);
	            return responseBody;
	        }
			
			if (CollectionUtils.isEmpty(errorList)) {
				// All request validations passed successfully
				userDetailsService.postUserProfile(emailId, userProfileRequest, errorList);

				if(CollectionUtils.isNotEmpty(errorList)) {
					responseBody.setError(errorList);
				}
			} else {
				responseBody.setError(errorList);
			}

			responseBody.setStatus(UserRegistrationAndPreferencesConstant.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseBody.setStatus(UserRegistrationAndPreferencesConstant.FAILURE);

			// message is being sent only during exception
			responseBody.setMessage(e.getMessage());
		}

		return responseBody;
	}
	
	@CrossOrigin
	@ApiOperation(value = "Add/Update user preference information", notes = "Adding/Updating user preference info", response = ResponseDTO.class)
	@PostMapping(value = UrlConstants.USER_PREFERENCE_URL, produces = "application/json")
	public ResponseDTO<?> postUserPreferenceInfo(
			@ApiParam(value = "emailId associated with which preference will be updated", required = true) @PathVariable("emailId") String emailId,
			@RequestBody UserPreferenceRequest userPreferenceRequest) {

		ResponseDTO<?> responseBody = new ResponseDTO<>();
		List<ErrorDTO> errorList = new ArrayList<>();

		// Regex pattern for validating email
	    String emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$";
	    Pattern pattern = Pattern.compile(emailRegex);
	    
		try {
			
			// Validate the emailId against the regex
	        if (!pattern.matcher(emailId).matches()) {
	            // If emailId is not valid, throw a custom exception or handle the error
	            // For example, adding an error to errorList
	            ErrorDTO error = new ErrorDTO();
	            error.setMessage("Invalid email format.");
	            errorList.add(error);
	            responseBody.setError(errorList);
	            responseBody.setStatus(UserRegistrationAndPreferencesConstant.FAILURE);
	            return responseBody;
	        }
			
			
			if (CollectionUtils.isEmpty(errorList)) {
				// All request validations passed successfully
				userDetailsService.postUserPreference(emailId, userPreferenceRequest, errorList);

				if(CollectionUtils.isNotEmpty(errorList)) {
					responseBody.setError(errorList);
				}
			} else {
				responseBody.setError(errorList);
			}

			responseBody.setStatus(UserRegistrationAndPreferencesConstant.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseBody.setStatus(UserRegistrationAndPreferencesConstant.FAILURE);

			// message is being sent only during exception
			responseBody.setMessage(e.getMessage());
		}

		return responseBody;
	}
	
	@CrossOrigin
	@ApiOperation(value = "Get profile data of user", notes = "Provide profile data of user", response = ResponseDTO.class)
	@GetMapping(value = UrlConstants.USER_PROFILE_URL, produces = "application/json")
	public ResponseDTO<UserProfileResponse> getProfileData(
			@ApiParam(value = "emailId associated with which profile data will be fetched", required = true) @PathVariable("emailId") String emailId) {

		ResponseDTO<UserProfileResponse> responseBody = new ResponseDTO<>();
		List<ErrorDTO> errorList = new ArrayList<>();

		String emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$";
	    Pattern pattern = Pattern.compile(emailRegex);
		
		try {
			
			// Validate the emailId against the regex
	        if (!pattern.matcher(emailId).matches()) {
	            // If emailId is not valid, throw a custom exception or handle the error
	            // For example, adding an error to errorList
	            ErrorDTO error = new ErrorDTO();
	            error.setMessage("Invalid email format.");
	            errorList.add(error);
	            responseBody.setError(errorList);
	            responseBody.setStatus(UserRegistrationAndPreferencesConstant.FAILURE);
	            return responseBody;
	        }
			
			UserProfileResponse profileResponse = userDetailsService.fetchProfileData(emailId, errorList);

			if (CollectionUtils.isEmpty(errorList)) {
				responseBody.setData(profileResponse);
			} else {
				responseBody.setError(errorList);
			}

			responseBody.setStatus(UserRegistrationAndPreferencesConstant.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseBody.setStatus(UserRegistrationAndPreferencesConstant.FAILURE);

			// message is being sent only during exception
			responseBody.setMessage(e.getMessage());
		}

		return responseBody;
	}
	
	@CrossOrigin
	@ApiOperation(value = "Get preference data of user", notes = "Provide preference data of user", response = ResponseDTO.class)
	@GetMapping(value = UrlConstants.USER_PREFERENCE_URL, produces = "application/json")
	public ResponseDTO<UserPreferenceResponse> getPreferenceData(
			@ApiParam(value = "emailId associated with which preference data will be fetched", required = true) @PathVariable("emailId") String emailId) {

		ResponseDTO<UserPreferenceResponse> responseBody = new ResponseDTO<>();
		List<ErrorDTO> errorList = new ArrayList<>();

		try {
			UserPreferenceResponse profileResponse = userDetailsService.fetchPreferenceData(emailId, errorList);

			if (CollectionUtils.isEmpty(errorList)) {
				responseBody.setData(profileResponse);
			} else {
				responseBody.setError(errorList);
			}

			responseBody.setStatus(UserRegistrationAndPreferencesConstant.SUCCESS);
		} catch (Exception e) {
			e.printStackTrace();
			responseBody.setStatus(UserRegistrationAndPreferencesConstant.FAILURE);

			// message is being sent only during exception
			responseBody.setMessage(e.getMessage());
		}

		return responseBody;
	}
	
}
