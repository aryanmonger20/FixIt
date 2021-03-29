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
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from "react-native-picker-select";
import Geocoder from 'react-native-geocoding';
import location from "../hooks/useLocation"

// Initialize the module (needs to be done only once)
// use a valid API key


const Stack = createStackNavigator();

const FeedNavigator =(navigation) => {
  Geocoder.init("AIzaSyBYDY2-tBAQr301NCKR_UE8E6hamyN8GdM"); 
  const { user, logOut } = useAuth();
  const uselocation = location();
  console.log("below this")
  console.log(uselocation);
  var array;
  if(!(uselocation === undefined))
  {
  array = Object.values(uselocation);
  console.log(array)
  // Geocoder.from(array[0],array[1])
	// 	.then(json => {
  //       		var addressComponent = json.results[0].address_components[0];
	// 		console.log(addressComponent);
	// 	})
	// 	.catch(error => console.warn(error));
  }
  console.log(array)
  return(
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Listings" component={ListingsScreen}
      options={{
        headerShown: true,
        headerTitleAlign:"left",
        headerTitle: 
          <View >
            <Text style={styles.headertitle}>Hey {user.name}</Text>
            <Text style={styles.headertitle2}><MaterialCommunityIcons name="map-marker-radius-outline" style={styles.headericon}/>Amabala
            </Text>
         
            

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
          <View style={styles.container}>
       </View>
            
            ),
          }}
        
    />
         
         <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={({ route }) =>({
        HeaderShown: true,
        headerTitle: route.params.title+" Gupta",
        headerStyle: {
          backgroundColor: '#0e6ebe',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          
        fontWeight: '300',
        color: '#ffffff',
        fontFamily: 'Nunito-Regular',
        fontSize: 28,
        marginLeft: -25,
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
  },
//   container : {
//     flex            : .2,
//     backgroundColor : "#fff",
//     alignItems: 'center',
//     width : 100,
//     height : 100,
   
// },
});