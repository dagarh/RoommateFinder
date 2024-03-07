import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignUpScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
      setIsAuthenticating(true);
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
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/signup.webp')} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.screenTitle}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Email Address" />
        <TextInput style={styles.input} placeholder="Phone number" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TouchableOpacity style={styles.actionButton} onPress={signupHandler}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialLoginButton} onPress={handleGoogleSignUp}>
          <Image source={require('../assets/icons/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton} onPress={handleAppleSignUp}>
          <Image source={require('../assets/icons/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton} onPress={handleFacebookSignUp}>
          <Image source={require('../assets/icons/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/images/logo2.webp')} style={styles.logo} />

      <View style={styles.bottomContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.switchButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:100,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: themeColors.primary,
  },
  input: {
    backgroundColor: themeColors.inputBg,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: themeColors.primary,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.buttonText,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50, // Adjusted padding
    marginBottom: 20,
  },
  socialLoginButton: {
    backgroundColor: 'lightgrey',
    borderRadius: 16, // Make it circular
    padding: 8,
    marginHorizontal: 3,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
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
  logo: {
    width: 40,
    height: 40,
    borderRadius:20,
    alignSelf: 'center',
    marginBottom: 1,
    marginTop:20
  },
});

export default SignUpScreen;
