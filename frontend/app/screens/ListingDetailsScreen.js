import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import Button from "../components/Button"
import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {Linking} from 'react-native'
import Rating from "../components/Rating"

function ListingDetailsScreen({ route }) {
  
  const listing = route.params;
  
  

//contact via phone

  const OpenContact=()=>
{Linking.openURL(`tel:${listing.contact}`)}


  return (
    <ScrollView>
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
       style={styles.image}
       //preview={{ uri: temp }}
        tint="dark"
        uri={listing.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title} {" "}{"("}{listing.categoryId}{")"}</Text>
        <Text style={styles.price}><Text style={styles.pri}>Minimum Wage :</Text>₹{listing.price}</Text>
       
       
        <Text style={styles.description}>{listing.contact}</Text>

        <Text style={styles.description}><Text style={styles.pri}>About :</Text>{listing.description}</Text>

        
        
      </View>
      
      <View style={styles.detailsContainer}>
      <Button title="Contact Now"
      onPress={OpenContact}></Button>
      </View>

      <View style={styles.detailsContainer}>
      <ContactSellerForm contact={listing.contact} />
      </View>
      <View style={styles.rating}>
          <Rating value={listing}/>
        </View>
      
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 13,
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
    fontWeight: "600",
  },
  description:{
    fontSize: 20,
    fontWeight: "300",
  },
  userContainer: {
    marginVertical: 30,
  },
  rating:{
    marginBottom:100
  }
});

export default ListingDetailsScreen;