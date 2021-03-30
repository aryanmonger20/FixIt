import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from './routes';
import Ionicons from 'react-native-vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from "react-native-picker-select";
import Geocoder from 'react-native-geocoding';
import location from "../hooks/useLocation"
import colors from "../config/colors"
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

// Initialize the module (needs to be done only once)
// use a valid API key


const Stack = createStackNavigator();

const FeedNavigator =(navigation) => {
  Geocoder.init("AIzaSyBYDY2-tBAQr301NCKR_UE8E6hamyN8GdM"); 
  var city="India";
  const [City, updateCity] = useState("Bharat");
  console.log(City)
  const { user, logOut } = useAuth();
  const uselocation = location();
  console.log("below this")
  console.log(uselocation);
  var array;
  if(!(uselocation === undefined))
  {
  array = Object.values(uselocation);
  console.log(array[0])
  // Geocoder.from(array[0],array[1])
	// 	.then(json => {
  //       		var addressComponent = json.results[0].address_components[0];
	// 		console.log(addressComponent);
	// 	})
	// 	.catch(error => console.warn(error));
  var url='https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox='+array[0]+'%2C'+array[1]+'&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=h3zNh8NS55Qi1JtJZRtCuaBRC4SaZvlmpbMcdqi8djU';
  console.log(url);
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson.Response.View[0].Result[0].Location.Address.City)
    city=responseJson.Response.View[0].Result[0].Location.Address.City;
    updateCity(city);
    
   
    
  }
  )
  
  }
  //onsole.log(array)
  return(
    
  <Stack.Navigator mode="modal">


    <Stack.Screen name="Listings" component={ListingsScreen}
      options={{
        headerShown: true,
        headerTitleAlign:"left",
        headerTitle: 
          <View >
            <Text style={styles.headertitle}><FontAwesome name="user" size={18} color="white" /> Hey !! {user.name.split(" ")[0]}</Text>
          </View>
         ,
         
        headerStyle: {
          backgroundColor:"#0e6ebe",
          shadowColor:"transparent"
         
        },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontStyle: 'italic',
        //   fontSize:18,
        // },
        headerRight: () => (
          <Text style={styles.headertitle2}><MaterialCommunityIcons name="map-marker-radius-outline" style={styles.headericon}/> {City}
            </Text>
            ),
          }}
        
    />
           
           <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} 
           options={({ route }) =>({
        HeaderShown: true,
        //headerTitle: route.params.title,
        headerStyle: {
          backgroundColor: colors.light,
        },
        headerTintColor: '',
        headerTitleStyle: {
          
        fontWeight: '400',
        color: "#77797A",
       
        fontSize: 20,
        
        paddingLeft: -10
        },
        
        })} />

  </Stack.Navigator>
)};

export default FeedNavigator;

const styles = StyleSheet.create({
  buttomStyle:{
    marginLeft:5,
    padding:5,
  },
  headertitle:{
    color: colors.light,
    alignItems:"flex-start",
    marginLeft:1,

    fontSize:15,
  },
  headertitle2:{
    color:colors.light,
    fontSize:16,
    alignItems:"flex-start",
    marginTop:5,
    marginRight:10,
    //marginBottom:5,
    fontWeight:"500"
  },
  headericon:{
    color:"black",
  },
//   container : {
//     flex            : .2,
//     backgroundColor : "#fff",
//     alignItems: 'center',
//     width : 100,
//     height : 100,
   
// },
});