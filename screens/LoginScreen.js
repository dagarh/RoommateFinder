import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert,Button } from 'react-native';
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

      <Image source={require('../assets/images/logo4.jpeg')} style={styles.logo} />

      <Text style={styles.title}>Sign in</Text>
      <TextInput
        placeholder="Email or Phone"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.Forgotpass}>
        <Text style={styles.Forgotpasstext}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signinbutton} onPress={loginHandler} >
        <Text style={styles.signinbuttontext}>Sign in</Text>
      </TouchableOpacity>


      <Text style={styles.orText}>or</Text>


      <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
        <View style={styles.buttonContent}>
          <Image source={require('../assets/icons/google.png')} style={styles.socialIcon} />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAppleLogin}>
        <View style={styles.buttonContent}>
          <Image source={require('../assets/icons/apple.png')} style={styles.socialIcon} />
          <Text style={styles.buttonText}>Sign in with Apple</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleFacebookLogin}>
        <View style={styles.buttonContent}>
          <Image source={require('../assets/icons/facebook.png')} style={styles.socialIcon} />
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </View>
      </TouchableOpacity>



      
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
    justifyContent:'center',
    padding:25
  },

  title:{
    fontSize:35,
    marginBottom:20,
    fontWeight: 'bold',
  },

  input: {
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius:6
  },


  Forgotpass:{
    marginBottom:10,
    marginTop:10,
  },
  Forgotpasstext:{
    color:'lightblue'
  },


  signinbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 10,
    borderRadius: 25,
    height: 50,
    },
  signinbuttontext:{
    fontWeight:'bold',
    fontSize:18
  },

  orText:{
    textAlign: 'center',
    marginTop:30,
    marginBottom: 30,
    fontWeight: 'bold',
  },

  // orTextContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginVertical: 20,
  // },
  // orLine: {
  //   flex: 1,
  //   height: 1,
  //   backgroundColor: 'black',
  //   marginHorizontal: 10,
  // },
  // orText: {
  //   fontWeight: 'bold',
  //   fontSize: 16,
  //   color: 'black',
  // },


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


  logo: {
    width:130,
    height: 40,
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
});

export default LoginScreen;