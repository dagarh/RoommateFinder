import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { login } from '../util/auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authCtx = useContext(AuthContext);
  const navigation = useNavigation(); 

  async function loginHandler() {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
    } finally {
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  const handleFacebookLogin = () => {
    // Handle Facebook login logic
  };

  const handleAppleLogin = () => {
    // Handle Apple login logic
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/login.jpeg')} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.screenTitle}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone number, Username or Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={loginHandler}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialLoginButton} onPress={handleGoogleLogin}>
          <Image source={require('../assets/icons/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton} onPress={handleAppleLogin}>
          <Image source={require('../assets/icons/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton} onPress={handleFacebookLogin}>
          <Image source={require('../assets/icons/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/images/logo2.webp')} style={styles.logo} />
      <View style={styles.bottomContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.switchButtonText}>Sign Up</Text>
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
    marginTop: 40,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:100
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
  loginButton: {
    backgroundColor: themeColors.primary,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
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
    marginBottom: 10,
    marginTop:20
  },
});

export default LoginScreen;
