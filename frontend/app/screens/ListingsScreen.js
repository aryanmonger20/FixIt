import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
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

const itemData = 'undefined'


function ListingsScreen({ navigation }) {

  const getListingsApi = useApi(listingsApi.getListings);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.101:9000/api/listings')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
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




  return (
    <Screen style={styles.screen}>

      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <SearchBar
        round
        lightTheme
        searchIcon={{ size: 24 }}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction('')}
        placeholder="Search Category..."
        value={search}
      />
      <FlatList

        data={filteredDataSource}

        // keyExtractor={item => listing.id.toString()}
        renderItem={({ item }) => {
          var temp = 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1615&q=80';
          console.log(temp);
          if (item.categoryId === 'Plumber') {
            temp = 'https://images.unsplash.com/photo-1538474705339-e87de81450e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
          }
          else if (item.categoryId === 'Carpenter') {
            temp = 'https://images.unsplash.com/photo-1561297331-a9c00b9c2c44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
          }
          else if (item.categoryId === 'Mechanic') {
            temp = 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2009&q=80';
          }
          else if (item.categoryId === 'Cameraman') {
            temp = 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80';
          }
          else if (item.categoryId === 'Maid') {
            temp = 'https://images.unsplash.com/photo-1559308078-88465deb35cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
          }
          else if (item.categoryId === 'Electrician') {
            temp = 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
          }
          else if (item.categoryId === 'Movies & Music') {
            temp = 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
          }
          else if (item.categoryId === 'Books') {
            temp = 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80';
          }
          else if (item.categoryId === 'Other') {
            temp = 'https://images.unsplash.com/photo-1602843080016-7872abf0ea68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
          }

          console.log(temp);

          <Card
            title={item.title}
            subTitle={"$" + item.price}
            category={item.categoryId}
            imageUrl={temp}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;