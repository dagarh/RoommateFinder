import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Home from "../screens/WelcomeScreen";
import Notifications from "../screens/Notifications";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
      </Stack.Navigator>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Notifications" component={Notifications}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}