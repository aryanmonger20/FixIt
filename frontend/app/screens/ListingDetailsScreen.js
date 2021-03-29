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
import { MaterialIcons } from '@expo/vector-icons'; 

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
        {/* <Text style={styles.title}>{listing.title}</Text> */}
        {/* <Text style={styles.category}>{listing.categoryId}</Text> */}
        <Text style={styles.category}><MaterialIcons name="electrical-services" size={15} color="white" />{" "}{listing.categoryId}{" "}</Text>
        <Text style={styles.price}>₹{listing.price}<Text style={styles.pri}> / hour</Text></Text>
       
       
        {/* <Text style={styles.description}>{listing.contact}</Text> */}

        <Text style={styles.pri}><Text style={styles.pri}>About :{"\n"}</Text></Text>
        <Text style={styles.description}>{"\" "}{listing.description}{" \""}</Text>
        

        
        
      </View>
      
      <View style={styles.detailsContainer}>
      <Button  title="Contact Now"
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
    flex:1,
    width: "100%",
    height: 250,
    borderWidth: 3,
    borderRadius: 20,
    padding :50,
    borderColor: '#FFFFFF',
   // elevation: 5,
    // flex: 1,
    // height: 400, 
    // width: "100%", 
    // resizeMode: 'cover', 
    // borderRadius: 20,
    // padding :50,
    // margin :10,
    // marginRight :10


  },
  price: {
    color: '#25D366',
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    fontFamily:'SFProText-Regular',
    color: '#696966',
    paddingBottom: -5,
    
    
  },
  description:{
    fontSize: 17,
    fontWeight: "300",
    fontFamily:'SFProText-Regular',
    
    fontStyle: 'italic',
    backgroundColor:'#8A8A8F',
    color: '#ffffff',
    padding:12,
    borderRadius:13, 
    overflow: 'hidden',
  
  },
  userContainer: {
    marginVertical: 30,
  },
  rating:{
    marginBottom:100
  },
  category:{
    fontSize: 18,
    fontFamily:'Neue Helvetica',
    backgroundColor: '#ff4d94',
    color: '#ffffff',
    padding:3,
    borderRadius: 7, 
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },
  pri:{
    fontSize: 18,
    color: '#666666'
  },
  btn:{
    color: '#1DA1F2'
  }

});

export default ListingDetailsScreen;