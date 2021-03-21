import React, { useEffect,useState } from "react";
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
import useAuth from "../auth/useAuth";
import filter from 'lodash.filter';




function ListingsScreen({ navigation }) {

    const { user, logOut } = useAuth();
  const getListingsApi = useApi(listingsApi.getListings);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.6:9000/api/listings')
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
  
const text= user.id;
  const searchFilterFunction = (text) => {
    
    if (text) {
      
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.id
          ? item.categoryId.toUpperCase()
          : ''.toUpperCase();
       
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

  
//   searchFilterFunction(user.id)
 
  return (
    <Screen style={styles.screen}>
      
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      
     
      <FlatList
    
        data={filteredDataSource}
        
        //keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            category={item.categoryId}
            imageUrl={item.images}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
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