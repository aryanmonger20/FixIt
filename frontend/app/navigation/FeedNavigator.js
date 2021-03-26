import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from './routes';
import Ionicons from 'react-native-vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const FeedNavigator = (navigation) => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Listings" component={ListingsScreen}
      options={{
        HeaderShown: true,
        title: 
          <View >
            <Text style={styles.headertitle}>Hii Rohit</Text>
            <Text style={styles.headertitle}>Your Location</Text>
            <MaterialCommunityIcons name="map-marker-radius-outline" style={styles.headericon}/>
            

          </View>
         ,
        headerStyle: {
          backgroundColor: '#0e6ebe',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontStyle: 'italic',
          fontSize:15,
        },
        headerRight: () => (
          <Button
          onPress={() => navigation.navigate(routes.SEARCH)}
            title='search'
            
            />
            
            ),
          }}
    />
         
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{ title: 'ListingDetails' }}  options={{
        HeaderShown: true,
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

const styles = StyleSheet.create({
  buttomStyle:{
    marginLeft:5,
    padding:5,
  },
  headertitle:{
    color:"white"
  },
  headericon:{
    color:"black",
  }
});