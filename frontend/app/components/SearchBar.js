// import React from "react";
// import {View,StyleSheet} from "react-native";
// import MapView from "react-native-maps";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// const latitudeDelta = 0.025;
// const longitudeDelta = 0.025;
// export default class LocationPickerDemo extends React.Component {
// state = {
//     region: {
//         latitudeDelta,
//         longitudeDelta,
//         latitude: 12.840575,
//         longitude: 77.651787,
//         }
// }
// getAddress(){
// //function to get address using current lat and lng
// fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.region.latitude+"," +this.state.region.longitude +"&key=" + AIzaSyDBnN__jkj5EXMhF9ZhLoCgaipLSE1pqDM).then((response) => response.json()).then((responseJson) => {
//   console.log("ADDRESS GEOCODE is BACK!! => " +
// JSON.stringify(responseJson));
//    this.setState(
//      { address:         JSON.stringify(responseJson.results[0].formatted_address)
//       .replace(/"/g, "")
//      });
//    });
// }

// render(){
// <View style={styles.map}>
//    <MapView
//      style={styles.map}
//      initialRegion={this.state.region}
//    />
// </View>}
// }
// const styles = StyleSheet.create({
// map:{
//   flex:1
// },
// });