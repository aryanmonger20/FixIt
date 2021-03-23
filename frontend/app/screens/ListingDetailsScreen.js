import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  var temp='https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1615&q=80';
  console.log(temp);
  if(listing.categoryId==='Plumber')
  {
    temp='https://images.unsplash.com/photo-1538474705339-e87de81450e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  else
  if(listing.categoryId==='Carpenter')
  {
    temp='https://images.unsplash.com/photo-1561297331-a9c00b9c2c44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  else
  if(listing.categoryId==='Mechanic')
  {
    temp='https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2009&q=80';
  }
  else
  if(listing.categoryId==='Cameraman')
  {
    temp='https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80';
  }
  else
  if(listing.categoryId==='Maid')
  {
    temp='https://images.unsplash.com/photo-1559308078-88465deb35cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  else
  if(listing.categoryId==='Electrician')
  {
    temp='https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  else
  if(listing.categoryId==='Movies & Music')
  {
    temp='https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  else
  if(listing.categoryId==='Books')
  {
    temp='https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80';
  }
  else
  if(listing.categoryId==='Other')
  {
    temp='https://images.unsplash.com/photo-1602843080016-7872abf0ea68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
  }
  
  console.log(temp);
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
       preview={{ uri: temp }}
        tint="dark"
        uri={listing.images}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title} {" "}{"("}{listing.categoryId}{")"}</Text>
        <Text style={styles.price}><Text style={styles.pri}>Minimum Wage :</Text>₹{listing.price}</Text>
       
       
        <Text style={styles.description}>{listing.contact}</Text>

        <Text style={styles.description}><Text style={styles.pri}>About :</Text>{listing.description}</Text>

        
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  description:{
    fontSize: 20,
    fontWeight: "300",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;