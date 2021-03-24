
import React, { Component } from 'react';
import client from "../api/client"
import {
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


export default class Myapp extends Component {
  constructor(props) {
    super(props);
    this.state = {

      Default_Rating: props.value.rating,
      totalrating:props.value.totalRating,
      raters:props.value.raters,
      userId:props.value._id,
     
      Max_Rating: 5,
    
    };
   console.log(props.value)
    this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

  
    this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  }
  UpdateRating(key) {
    this.setState({ Default_Rating: key });
    
  }
  render() {

    if(this.state.Default_Rating===0)
    {console.log("zero")}
    let React_Native_Rating_Bar = [];
   
    const handlePress = () => {
       
       const userRating =this.state.Default_Rating
       const total=this.state.totalrating
       const Totaluser=this.state.raters


        const userId=this.state.userId
       const newTotal=((total+userRating)/(Totaluser+1)).toPrecision(3)

       //values to be send
       const newRating=newTotal
       const newTotaluser=Totaluser+1;
       const newTotalRating=total+userRating

       
       client.post("/listings/rating", { newTotaluser, newTotalRating,newRating,userId})
       alert("Thanks For Rating !! 😄")
       //console.log(this.state.totalrating)
    }
   
   
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating
                ? { uri: this.Star }
                : { uri: this.Star_With_Border }
            }
          />
        </TouchableOpacity>
      );
    }
   
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.textStyle}>How was your experience with him/her</Text>
        <Text style={styles.textStyleSmall}>Please Rate  !! 🙂 </Text>
        {/*View to hold our Stars*/}
        <View style={styles.childView}>{React_Native_Rating_Bar}</View>
        
        <Text style={styles.textStyle2}>
        {/*To show the rating selected*/}
       Average Rating :  
          {this.state.Default_Rating} / {this.state.Max_Rating}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => handlePress()
          
         }>
          {/*Clicking on button will show the rating as an alert*/}
          <Text>Get Selected Value</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  StarImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,

    color: '#000',
    marginTop: 15,
  },
  textStyle2: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginTop: 15,
  },
});