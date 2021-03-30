import React, { useEffect, useState } from "react";
import {FlatList, StyleSheet, ScrollView, View ,Image} from "react-native";
import { SearchBar } from 'react-native-elements';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";
import filter from 'lodash.filter';
import useAuth from "../auth/useAuth"
import FBSearchBar from "../utility/FBSearchBar";
import RNPickerSelect from "react-native-picker-select";






function ListingsScreen({ navigation ,useAuth}) {

  const getListingsApi = useApi(listingsApi.getListings);

  const [search, setSearch] = useState('');
  const [search2, setSearch2] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const [filteredDataSource2, setFilteredDataSource2] = useState([]);
  const [masterDataSource2, setMasterDataSource2] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.8:9000/api/listings')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
        setFilteredDataSource2(responseJson);
        setMasterDataSource2(responseJson);
        // console.log(responseJson)

      })
      .catch((error) => {
        console.error(error);
        alert("Couldn't retrieve the listings.")
        
      });
  }, []);


//----//



const searchFilterFunction = (text) => {

    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.city
          ? item.city.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
      setFilteredDataSource2(newData);
      setMasterDataSource2(newData);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setFilteredDataSource2(masterDataSource);
      setMasterDataSource2(masterDataSource);
      setSearch(text);
    }
  };

 


  const searchFilterFunction2 = (text) => {

    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData2 = masterDataSource2.filter(function (item) {
        const itemData = item.categoryId
          ? item.categoryId.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource2(newData2);
      setSearch2(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource2(masterDataSource2);
      setSearch2(text);
    }
  };

  //-------------------////
  // const item=filteredDataSource;
  // console.log(filteredDataSource.contact)








  ///-------///////



  return (
    
    <Screen style={styles.screen}>
      
<ScrollView>
  
<View style={{backgroundColor:"#0e6ebe"}}>
  <Image
      source={require('../assets/top.jpg')}
      style={styles.image}/>
  </View>
      <ActivityIndicator visible={getListingsApi.loading} />

      <View style={styles.search}>
      
    </View>
      
      <View style={styles.search}>
      
        <SearchBar
          round
           lightTheme
         // inputStyle={{ backgroundColor: 'white' }}
          containerStyle={{ backgroundColor: colors.light, borderWidth: 1, borderRadius: 2 }}
          placeholderTextColor={'white'}
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search City..."
          value={search}
        />
        <SearchBar
          round
           lightTheme
         // inputStyle={{ backgroundColor: 'white' }}
          containerStyle={{ backgroundColor: colors.light, borderWidth: 1, borderRadius: 2 }}
          placeholderTextColor={'white'}
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction2(text)}
          onClear={(text) => searchFilterFunction2('')}
          placeholder="Search Category..."
          value={search2}
        />
      </View>
     
      <FlatList

        data={filteredDataSource2}
        // temp ={searchImage}
        //keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <>
        
          <Card
            title={item.title}
            subTitle={"₹" + item.price}
            category={item.categoryId}
            imageUrl={item.image}
            rating={item.rating}
            city={item.city}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS,item)}
          />
          </>
        )}
      />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
   // padding: 1,
    backgroundColor: colors.light,
  },
  image:{
    width: 150,
     height: 60 ,
     paddingTop:10,
     marginTop:10,
     borderRadius:20,
     alignSelf:"center",
     backgroundColor:"#0e6ebe"
    
  }
  ,
  search: {

    // paddingTop: 1,
    paddingBottom: 15
  }
});

export default ListingsScreen;