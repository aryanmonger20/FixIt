

import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text ,ImageBackground,Image} from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";


function AboutScreen() {

  return (
    <Screen style={styles.container} >
      <View style={styles.image}>
      <Image
  source={{ uri: 'https://media.istockphoto.com/vectors/about-us-concerning-vector-id1158537082?k=6&m=1158537082&s=612x612&w=0&h=8YAc2Fuqz085o0fn1ruh3u_xk8StalWpyMHHxqHIHq8=' }}
  style={{ width: 200, height: 200 }}
/>
      
      <View >

      
        <Text style={styles.title2}>
          OUR MISSION
        </Text>
       
     
        
        <Text style={styles.text}>
          Our MOTO is to deliver best service in your nearby areas  by seeing their rating and review.{"\n\n"}

        </Text>
        <Text style={styles.title3} >
          How We are working
        </Text>
        <Text style={styles.text}>
          Any valid user can login in their app and they can add some known working professionals in their list,and they will appeae in the app,
          Consumer can make contact with him or do whatsapp him and tell him what they require from him!{"\n\n"}


          It will be cheap user friendly and trustable


          It will help consumer to directly contact the person with their own , it will be easy for consumers to contact for their service and it will also help for worker to get their work and make their economic growth 💹
        </Text>

      </View>

      </View>
    </Screen>
  );
}

export default AboutScreen;
const styles = StyleSheet.create({
  container:{
  padding:0,
  },

text:{
fontSize:16,
margin:5,
paddingLeft:15,
paddingRight:15
},
  title: {
    fontFamily: Platform.OS === "android" ? "sans-serif" : "AppleColorEmoji",
    fontSize: 20,
    color: "#0c0c0c",
    fontWeight: "normal",
    
  },
  title2: {
    fontFamily: Platform.OS === "android" ? "sans-serif" : "AppleSDGothicNeo-SemiBold",
        fontSize: 30,
    color: "#0c0c0c",
    fontWeight: "500",
    marginBottom:0,
    marginLeft:100,
    
  },
  title3: {
    fontFamily: Platform.OS === "android" ? "sans-serif" : "AppleSDGothicNeo-SemiBold",
        fontSize: 30,
    color: "#0c0c0c",
    fontWeight: "500",
    marginBottom:10,
    marginLeft:65,
    paddingRight:10
    
  },
  mission:{
    fontWeight: "bold",
    fontSize:20,
    marginLeft:100,
    marginBottom:10
  
   
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center"
  },
});