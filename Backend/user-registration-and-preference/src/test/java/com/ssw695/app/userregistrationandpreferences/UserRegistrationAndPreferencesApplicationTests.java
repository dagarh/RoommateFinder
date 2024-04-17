package com.ssw695.app.userregistrationandpreferences;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.ssw695.app.userregistrationandpreferences.contract.request.UserProfileRequest;
import com.ssw695.app.userregistrationandpreferences.entity.UserProfile;
import com.ssw695.app.userregistrationandpreferences.repository.UserProfileRepository;
import com.ssw695.app.userregistrationandpreferences.service.impl.UserDetailsServiceImpl;


@SpringBootTest
class UserRegistrationAndPreferencesApplicationTests {

	@Mock
    private UserProfileRepository userProfileRepository;

    @InjectMocks
    private UserDetailsServiceImpl userDetailsService;

    private UserProfileRequest userProfileRequest;
    private UserProfile userProfile;

    @BeforeEach
    public void setUp() {
        userProfile = new UserProfile();
        userProfile.setEmailId("test@example.com");
        userProfile.setName("Test User");
        userProfile.setAge(30);
        userProfile.setGender("Male");
        userProfile.setOccupation("Software Engineer");

        userProfileRequest = new UserProfileRequest();
        userProfileRequest.setName("New Test User"); 
        userProfileRequest.setAge(25);
        userProfileRequest.setGender("Female");
        userProfileRequest.setOccupation("Data Scientist");
    }

    @Test
    public void testFetchProfileData() {
        when(userProfileRepository.findByEmailId(anyString())).thenReturn(Optional.of(userProfile));

        var response = userDetailsService.fetchProfileData("test@example.com", new ArrayList<>());

        assertEquals("test@example.com", response.getEmailId());
        assertEquals("Test User", response.getName());
        assertEquals(Integer.valueOf(30), response.getAge());
        assertEquals("Male", response.getGender());
        assertEquals("Software Engineer", response.getOccupation());

        verify(userProfileRepository, times(1)).findByEmailId("test@example.com");
    }

    // Additional test methods for other service operations...

}
