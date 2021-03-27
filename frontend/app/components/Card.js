import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { MaterialCommunityIcons ,Entypo} from "@expo/vector-icons";

import Text from "./Text";
import colors from "../config/colors";
import Rating from "./RatingCard";

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl ,category,rating,city}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>

          <Text style={styles.subTitle} numberOfLines={2}>
            {category}
          </Text>
         <View style={{flexDirection:'row', flexWrap:'wrap' ,justifyContent: 'space-between'}}>
         
         <Text style={styles.subTitle} numberOfLines={2}>
        {subTitle}
          </Text>
          <Text style={styles.city} numberOfLines={1}>
          <Entypo name="location-pin" size={16} color="black" /> {city}
          </Text>
         </View>
          
         
         
          <Rating value={rating}/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex:1,
    flexDirection:"row",
    borderBottomEndRadius: 10,
    borderBottomLeftRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    
    elevation: 15, 
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    flex:1,
    justifyContent:"center",
    padding: 20,
    backgroundColor:"#f5f5f5"
    
  },
  image: {
    width: "38%",
    height: 136,
  },
  city:{
    marginRight:0,
    color: colors.medium,
    fontWeight: "600",
    textAlign:"right",
    fontSize:14


  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize:19
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;