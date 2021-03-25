import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" >
    <Stack.Screen name="Listings" component={ListingsScreen} options={{headerShown: true,
          title: 'My home',
          headerStyle: {
            backgroundColor: '#0e6ebe',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{headerShown: true,
          title: 'ListingDetails',
          headerStyle: {
            backgroundColor: '#0e6ebe',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
  </Stack.Navigator>
);

export default FeedNavigator;
