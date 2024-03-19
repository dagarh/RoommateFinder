package com.ssw695.app.userregistrationandpreferences.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ssw695.app.userregistrationandpreferences.constant.UrlConstants;

import io.swagger.annotations.Api;

/**
 * This is the controller responsible for collecting the 
 * user profile details along with their preferences.  
 */
@Api(value = "Users API", description = "[All Users related APIs]")
@RestController
@RequestMapping(UrlConstants.CONTROLLER_URL)
public class UserDetailsController {
	
	
	
}
