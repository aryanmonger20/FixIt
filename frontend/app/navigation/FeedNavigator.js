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
        headerShown: true,
        headerTitleAlign:"left",
        headerTitle: 
          <View >
            <Text style={styles.headertitle}>Hello User</Text>
            <Text style={styles.headertitle2}><MaterialCommunityIcons name="map-marker-radius-outline" style={styles.headericon}/>Your Location</Text>
         
            

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
         
         <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{
        HeaderShown: true,
        headerTitle: 'ListingDetails',
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
    color:"white",
    alignItems:"flex-start",
    marginLeft:18,
    fontSize:15,
  },
  headertitle2:{
    color:"white",
    fontSize:15,
    alignItems:"flex-start",
    marginTop:5,
    marginLeft:0,
    marginBottom:5
  },
  headericon:{
    color:"black",
  }
});