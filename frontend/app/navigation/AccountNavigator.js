import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import AboutScreen from "../screens/AboutScreen";
import MyListings from "../screens/MyListings";
import users from "../api/users";
import SearchBar from '../components/SearchBar';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} options={{headerShown: true,
          title: 'Account',
          headerStyle: {
            backgroundColor: '#0e6ebe',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    <Stack.Screen name="About" component={AboutScreen} options={{headerShown: true,
          title: 'About Us',
          headerStyle: {
            backgroundColor: '#0e6ebe',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    <Stack.Screen name="Mylist" component={MyListings} options={{headerShown: true,
          title: 'Hello!!'  ,
          headerStyle: {
            backgroundColor: '#0e6ebe',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    {/* <Stack.Screen name="search" component={SearchBar}/> */}
  </Stack.Navigator>
);

export default AccountNavigator;
