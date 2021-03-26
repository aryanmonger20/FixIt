import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, ScrollView, View } from "react-native";
import { SearchBar } from 'react-native-elements';

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




function ListingsScreen({ navigation }) {

  const getListingsApi = useApi(listingsApi.getListings);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.9:9000/api/listings')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
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
        const itemData = item.categoryId
          ? item.categoryId.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  //-------------------////
  // const item=filteredDataSource;
  // console.log(filteredDataSource.contact)








  ///-------///////



  return (
    <Screen style={styles.screen}>

      
      <ActivityIndicator visible={getListingsApi.loading} />
      
      <View style={styles.search}>
        <SearchBar
<<<<<<< HEAD
          // lightTheme
          round
          inputStyle={{ backgroundColor: 'white' }}
          containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 5 }}
          placeholderTextColor={"#ff00f0"}
=======
          round
           lightTheme
         // inputStyle={{ backgroundColor: 'white' }}
          containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 2 }}
          placeholderTextColor={'white'}
>>>>>>> 1763ce4326e25c725288e4233895788a7a67a4d0

          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search Category..."
          value={search}
        />
      </View>

      <FlatList

        data={filteredDataSource}
        // temp ={searchImage}
        //keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (

          <Card
            title={item.title}
            subTitle={"$" + item.price}
            category={item.categoryId}
            imageUrl={item.image}
            rating={item.rating}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 1,
    backgroundColor: colors.light,
  },
  search: {

    // paddingTop: 1,
    paddingBottom: 15
  }
});

export default ListingsScreen;