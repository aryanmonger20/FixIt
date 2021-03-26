

import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";


function AboutScreen() {

  return (
    <Screen style={styles.container} >
      <Text style={styles.title}>
        <Text style={styles.mission} >
          OUR MISSION{"\n\n"}
        </Text>
        <Text >
          Our MOTO is to deliver best service in your nearby areas  by seeing their rating and review.{"\n\n"}

        </Text>
        <Text style={styles.mission} >
          How We are working{"\n\n"}
        </Text>
        <Text>
          Any valid user can login in their app and they can add some known working professionals in their list,and they will appeae in the app,
          Consumer can make contact with him or do whatsapp him and tell him what they require from him!{"\n\n"}


          It will be cheap user friendly and trustable{"\n\n"}


          It will help consumer to directly contact the person with their own , it will be easy for consumers to contact for their service and it will also help for worker to get their work and make their economic growth 💹
        </Text>

      </Text>


    </Screen>
  );
}

export default AboutScreen;
const styles = StyleSheet.create({
  container:{
    padding:5,
    backgroundColor:"#dbc1f5"
  },

  title: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    color: "#0c0c0c",
    fontWeight: "normal",
    
  },
  mission:{
    fontWeight: "bold",
    fontStyle:"italic",
  }
});