import React, { useEffect,useState } from "react";
import { Alert, FlatList, StyleSheet } from "react-native";
import { SearchBar } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';

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
import client from "../api/client"



function ListingsScreen({ navigation }) {

  const getListingsApi = useApi(listingsApi.getListings);
  const { user, logOut } = useAuth();
  console.log("location is "+user.location);
  const [number, updateNumber] = React.useState(0);

 
  const [filteredDataSource, setFilteredDataSource] = useState([]);
 

  useEffect(() => {
    fetch('http://192.168.1.8:9000/api/listings')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        //filteredDataSource(responseJson)
      
       // console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
        alert("Couldn't retrieve the listings.")
      });
  }, []);

  var data =[];

  const searchFilterFunction = () => {
   
     
      const newData = filteredDataSource.filter(function (item) {
        const itemData = user.email
        const itemd=item.emailuser
       

        return(itemd === itemData)
       
      });
      
  data=newData;
    }
  
    
  

 
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
      searchFilterFunction()
      }
          
      
      <FlatList
        data={data}
        
        keyExtractor={(data) => data._id.toString()}
        renderItem={({ item,index }) => {
         
          // ------delete function -----//

          const handlePress = (userId) => {
            alert("Listing Deleted Succesfully")
            console.log("del")
            client.post("/listings/delete", {userId});
            (prevNum) => updateNumber(prevNum + 1);
          }


          const swipeSettings = {
            autoClose :true,
         onClose: (secId, rowId, direction) => {
        
         },
        onOpen: (secId, rowId, direction) => {
    
          },
         right: [
         {
        onPress: () => {
          Alert.alert(
            'Alert',
            'Are you sure you want to delete ?',
            [
              { text : 'No', onPress: () => console.log('Cancel Pressed'),style : 'cancel'},
              { text : 'Yes', onPress:() => handlePress(item._id) }
            ]
          );
        },
       text: 'Delete', type : 'delete',
        }
      ],
  // rowId: this.index,
  // sectionId: 1
   };
          return(
          <Swipeout {...swipeSettings} backgroundColor="transparent" style={styles.btn}>
          <Card
            title={item.title}
            subTitle={"₹" + item.price}
            category={item.categoryId}
            imageUrl={item.image}
            city={item.city}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
          </Swipeout>);
        }}
      />
      
    </Screen>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: colors.light,
  },
  btn: {
    flex: 1,

  }
});

export default ListingsScreen;