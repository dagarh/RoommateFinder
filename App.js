import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, Octicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();
  
  return (
    <Stack.Navigator
      initialRouteName='Welcome'
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerLeft: ({ tintColor }) => (
            <View style={{ flexDirection: 'row' }}>
              <IconButton
                icon="person"
                color={tintColor}
                size={24}
                // onPress={() => navigation.navigate('Profile')}
              />
            </View>
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function AppNavigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  return <AppNavigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
