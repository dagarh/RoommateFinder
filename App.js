import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Home from './screens/Home';
import NotificationsScreen from './screens/NotificationsScreen';
import SettingsScreen from './screens/SettingsScreen';
import Chats from './screens/Chats';
import ChannelsList from './screens/ChannelsList';
import Onboarding from './screens/Onboarding';
import { Colors } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <BottomNavigation/>
  );
}

function ChatNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChannelsList" component={ChannelsList} options={{ headerTitle: "Select Channel" }} />
      <Stack.Screen name="Chats" component={Chats} options={({ route }) => ({ title: route.params.channelName })} />
    </Stack.Navigator>
  );
}

function BottomNavigation(){
  return(
    <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon : ({color}) => <TabBarIcon name="home" color={color}/>,
          tabBarLabel:'Home'
        }}
        name="HomeStack" component={HomeStack} />
      <Tab.Screen
        options={{
          tabBarIcon : ({color}) => <TabBarIcon name="people" color={color}/>,
          tabBarLabel:'Chats'
        }}
        name='Chats' component={ChatNavigator}/>
      <Tab.Screen
        options={{
          tabBarIcon : ({color}) => <TabBarIcon name="notifications" color={color}/>,
          tabBarLabel:'Notifications'
        }}
        name="Notifications" component={NotificationsScreen} />
      <Tab.Screen
        options={{
          tabBarIcon : ({color}) => <TabBarIcon name="settings" color={color}/>,
          tabBarLabel:'Settings'
        }}
        name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

function HomeStack(){
  return(
    <Stack.Navigator initialRouteName='Home'
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Onboarding' component={Onboarding}
      options={{
        headerShown:false,
        presentation:'fullScreenModal'
      }}
      />
    </Stack.Navigator>
  )
}

function TabBarIcon(props) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

function AuthenticatedStack() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchOnboardingStatus() {
      const onboardingStatus = await AsyncStorage.getItem('hasShownOnboarding');
      setShowOnboarding(onboardingStatus !== 'true');
    }

    fetchOnboardingStatus();
  }, []);

  useEffect(() => {
    async function saveOnboardingStatus() {
      if (!showOnboarding) {
        await AsyncStorage.setItem('hasShownOnboarding', 'true');
      }
    }

    saveOnboardingStatus();
  }, [showOnboarding]);

  return (
    <Stack.Navigator initialRouteName={showOnboarding ? 'Onboarding' : 'Main'} screenOptions={{ headerShown: false }}>
      {showOnboarding && <Stack.Screen name="Onboarding" component={Onboarding} />}
      <Stack.Screen name="Main" component={MainTabNavigator} />
    </Stack.Navigator>
  );
}

function AppNavigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />}
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
      <StatusBar style="auto" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
