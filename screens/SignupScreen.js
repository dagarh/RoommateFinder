import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView,ScrollView, View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import RNPickerSelect from 'react-native-picker-select';

function SignUpScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  const [eatingHabit, setEatingHabit] = useState('');
  const [socialHabit, setSocialHabit] = useState('');
  const [smokingAndDrinking, setSmokingAndDrinking] = useState('');
  const [petOwnership, setPetOwnership] = useState('');
  const [accommodationType, setAccommodationType] = useState('');
  const [locationPreference, setLocationPreference] = useState('');
  const [rentBudget, setRentBudget] = useState('');
  const [leaseLength, setLeaseLength] = useState('');
  const [desiredAttributes, setDesiredAttributes] = useState('');
  const [genderPreference, setGenderPreference] = useState('');

  async function signupHandler() {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
      await postUserProfile(email, username);
      await postUserPreferences(email, {
        eatingHabit, socialHabit, smokingAndDrinking, petOwnership,
        accommodationType, locationPreference, rentBudget,
        leaseLength, desiredAttributes, genderPreference,
      });
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
    } finally {
      setIsAuthenticating(false);
    }
  }

  async function postUserProfile(email, name) {
    const url = `https://8462-100-8-18-81.ngrok-free.app/user-registration-and-preferences/api/v1/profile/users/${email}`;
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }) 
      });
      console.log("User profile created successfully");
    } catch (error) {
      console.error("Error posting user profile:", error);
      Alert.alert("Error", "An error occurred while creating user profile. Please try again.");
    }
  }
  
  async function postUserPreferences(email, preferences) {
    const url = `https://8462-100-8-18-81.ngrok-free.app/user-registration-and-preferences/api/v1/preference/users/${email}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(preferences)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to post user preferences:", errorData);
        Alert.alert("Error", "Failed to save user preferences. Please try again later.");
      } else {
        console.log("User preferences saved successfully!");
      }
    } catch (error) {
      console.error("Error posting user preferences:", error);
      Alert.alert("Error", "An error occurred while saving user preferences. Please check your network connection and try again.");
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  const handleFacebookSignUp = () => {
    //  Facebook sign up logic
  };

  const handleAppleSignUp = () => {
    //  Apple sign up logic
  };

  const handleGoogleSignUp = () => {
    //  Google sign up logic
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>

        <Image source={require('../assets/images/logo4.jpeg')} style={styles.logo} />

        <Text style={styles.screenTitle}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername} // Updates the username state
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          onChangeText={setEmail} // Updates the email state
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword} // Updates the password state
          value={password}
        />
        <Text style={styles.screenTitle}>User Preferences</Text>
        <RNPickerSelect
  onValueChange={(value) => setEatingHabit(value)}
  items={[
    { label: 'Veg', value: 'veg' },
    { label: 'Non Veg', value: 'non_veg' },
  ]}
  style={{
    inputIOS: styles.input,
    inputAndroid: styles.input,
  }}
  placeholder={{
    label: 'Select Eating Habit',
    value: null,
  }}
/>



<RNPickerSelect
  onValueChange={(value) => setSocialHabit(value)}
  items={[
    { label: 'Introvert', value: 'introvert' },
    { label: 'Extrovert', value: 'extrovert' },
    { label: 'Ambivert', value: 'ambivert' },
  ]}
  style={{
    inputIOS: styles.input,
    inputAndroid: styles.input,
  }}
  placeholder={{ label: 'Select Social Habit', value: null }}
/>

<RNPickerSelect
  onValueChange={(value) => setSmokingAndDrinking(value)}
  items={[
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ]}
  style={{
    inputIOS: styles.input,
    inputAndroid: styles.input,
  }}
  placeholder={{ label: 'Smoking and Drinking Preferences', value: null }}
/>

<RNPickerSelect
  onValueChange={(value) => setPetOwnership(value)}
  items={[
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ]}
  style={{
    inputIOS: styles.input,
    inputAndroid: styles.input,
  }}
  placeholder={{ label: 'Pet Ownership and Preferences', value: null }}
/>

<RNPickerSelect
  onValueChange={(value) => setAccommodationType(value)}
  items={[
    { label: 'Apartment', value: 'apartment' },
    { label: 'House', value: 'house' },
  ]}
  style={{
    inputIOS: styles.input,
    inputAndroid: styles.input,
  }}
  placeholder={{ label: 'Type of Accommodation Preferred', value: null }}
/>

<RNPickerSelect
  onValueChange={(value) => setLocationPreference(value)}
  items={[
    { label: 'Jersey City', value: 'jersey_city' },
    { label: 'Hoboken', value: 'hoboken' },
  ]}
  style={{
    inputIOS: styles.input,
    inputAndroid: styles.input,
  }}
  placeholder={{ label: 'Location Preference', value: null }}
/>

<TextInput
  style={styles.input}
  placeholder="Rent Budget"
  keyboardType="numeric"
  onChangeText={setRentBudget}
  value={rentBudget}
/>

<RNPickerSelect
  onValueChange={(value) => setLeaseLength(value)}
  items={[
    { label: 'Long (above 6 months)', value: 'long' },
    { label: 'Short (below 6 months)', value: 'short' },
  ]}
  style={{
    inputIOS: styles.input,
    inputAndroid: styles.input,
  }}
  placeholder={{ label: 'Length of Lease Preferred', value: null }}
/>

<RNPickerSelect
  onValueChange={(value) => setDesiredAttributes(value)}
  items={[
    { label: 'Student', value: 'student' },
    { label: 'Professional', value: 'professional' },
  ]}
  style={{
    inputIOS: styles.input,
    inputAndroid: styles.input,
  }}
  placeholder={{ label: 'Desired Attributes in a Roommate', value: null }}
/>

<RNPickerSelect
  onValueChange={(value) => setGenderPreference(value)}
  items={[
    { label: 'Male Only', value: 'male_only' },
    { label: 'Female Only', value: 'female_only' },
    { label: 'Mix', value: 'mix' },
  ]}
  style={{
    inputIOS: styles.input,
    inputAndroid: styles.input,
  }}
  placeholder={{ label: 'Gender Preferred', value: null }}
/>



        <TouchableOpacity style={styles.actionButton} onPress={signupHandler}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>



      <TouchableOpacity style={styles.button} onPress={handleGoogleSignUp}>
        <View style={styles.buttonContent}>
          <Image source={require('../assets/icons/google.png')} style={styles.socialIcon} />
          <Text style={styles.buttonText}>Sign up with Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAppleSignUp}>
        <View style={styles.buttonContent}>
          <Image source={require('../assets/icons/apple.png')} style={styles.socialIcon} />
          <Text style={styles.buttonText}>Sign up with Apple</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleFacebookSignUp}>
        <View style={styles.buttonContent}>
          <Image source={require('../assets/icons/facebook.png')} style={styles.socialIcon} />
          <Text style={styles.buttonText}>Sign up with Facebook</Text>
        </View>
      </TouchableOpacity>
      
      <View style={styles.bottomContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.switchButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:25
  },
  
  logo: {
    width:130,
    height: 40,
    alignSelf: 'flex-start',
    marginBottom: 30,
  },

  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: themeColors.primary,
  },


  input: {
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    padding: 5,
    borderRadius:6
  },
  
    container: {
      flexGrow: 1, 
      backgroundColor: 'white',
      padding: 25,
    },

  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 10,
    borderRadius: 25,
    height: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.buttonText,
  },


  orText: {
    textAlign: 'center',
    marginTop:20,
    marginBottom: 20,
    fontWeight: 'bold',
  },



  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    borderRadius: 25,
    height: 50,
    },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },


  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop:35
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchText: {
    color: themeColors.secondaryText,
    marginRight: 5,
  },
  switchButtonText: {
    fontWeight: 'bold',
    color: themeColors.primary,
  },
});

export default SignUpScreen;
