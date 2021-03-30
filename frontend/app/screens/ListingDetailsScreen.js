import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,Image
} from "react-native";
import { Image as Image2}  from "react-native-expo-image-cache";

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
      <Image2
       style={styles.image}
       //preview={require('../assets/rating.png')} 
        tint="dark"
        uri={listing.image}
      />
      <View style={styles.detailsContainer}>
        
        {/* <Text>{listing.image}</Text> */}
        <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent: 'space-between'}}>
          
          <Text style={styles.title}>{listing.title}</Text>
       
        <Text style={styles.price}>₹{listing.price}<Text style={styles.pri}> / shift</Text>
        </Text>
        </View>
        
        {/* <Text style={styles.category}>{listing.categoryId}</Text> */}
        <Text style={styles.category}><MaterialIcons name="electrical-services" size={20} color="white" />{" "}{listing.categoryId}{" "}</Text>
        
       
       
        {/* <Text style={styles.description}>{listing.contact}</Text> */}

        
        <Text style={styles.description}><Text style={styles.pri}><Text style={styles.pri}>About :</Text></Text>{listing.description}</Text>
        

        
        
      </View>
      
      <View style={styles.detailsContainer}>
      <Button  title="Contact Now"
      onPress={OpenContact}></Button>
      </View>
      <View style={styles.detailsContainer}>
      <ContactSellerForm contact={listing.contact} />
      </View>
     <View style={styles.rat}>
       
    <Image source={require('../assets/rating.png')} 
  style={{ width: 200, height: 200 ,alignItems:"center"}}
  />
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
  rat:{
    alignItems:"center"
  }
 ,
  image: {
    flex:1,
    width: "100%",
    height: 250,
    borderWidth: 3,
    borderRadius: 20,
    padding :50,
    borderColor: '#FFFFFF',
   

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
    fontFamily: Platform.OS === "android" ? "SFProText-Regular" : "Arial",
    color: '#696966',
    paddingBottom: 10,
    
    
  },
  description:{
    fontSize: 17,
    fontWeight: "300",
    fontFamily: Platform.OS === "android" ? "SFProText-Regular" : "Arial",
    paddingTop:15,
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
    fontFamily: Platform.OS === "android" ? "Neue Helvetica" : "Arial",

    
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