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

        <Image source={require('../assets/images/logo4.jpeg')} style={styles.logo} />

        <Text style={styles.screenTitle}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Email Address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
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
