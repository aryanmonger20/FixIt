import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const AuthNavigatior = () => {
   <Stack.Navigator>
       <Stack.Screen name="Welcome" component={WelcomeScreen}/>
     <Stack.Screen  name="Login" component={LoginScreen}/>
     <Stack.Screen  name="Register" component={RegisterScreen}/>

   </Stack.Navigator>
}

export default AuthNavigatior

const styles = StyleSheet.create({})
