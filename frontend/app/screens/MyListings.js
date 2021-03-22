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
import filter from 'lodash.filter';
import useAuth from "../auth/useAuth";



function ListingsScreen({ navigation }) {

  const getListingsApi = useApi(listingsApi.getListings);
  const { user, logOut } = useAuth();

 
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.6:9000/api/listings')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
      
       // console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
        alert("Couldn't retrieve the listings.")
      });
  }, []);


  const searchFilterFunction = () => {
   
     
      const newData = filteredDataSource.filter(function (item) {
        const itemData = user.userId
        const itemd=item.id
        //console.log(item.id)
        console.log(itemData)

         
        return itemd !== itemData;
       
      });
      setFilteredDataSource(newData);
    
    }
  
    //searchFilterFunction()
  

 
  return (
    <Screen style={styles.screen}>
      
      {getListingsApi.error&& (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
    
      {
      
      }
          

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