import React, { useState } from "react";
import AppLoading from 'expo-app-loading';
import { AsyncStorage } from '@react-native-community/async-storage'
import { StyleSheet, Image, Text } from "react-native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import location from "./app/hooks/useLocation"
import { navigationRef } from "./app/navigation/rootNavigation";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './app/screens/OnboardingScreen';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

const AppStack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const uselocation = location();
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };
  console.log(uselocation);

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={console.warn} />
    );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      {/* <AppStack.Navigator
          headerMode="none"
        >
           <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
     
          <AppStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
          <AppStack.Screen name="Register" component={RegisterScreen} /> */}
        {/* </AppStack.Navigator> */}
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}