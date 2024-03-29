import React from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';

import { FontAwesome } from '@expo/vector-icons';

const numStars = 5;

export default class Rating extends React.Component {
   
    constructor(props) {
        super(props);
    
    this.state = {
        
        rating :props.value

    }
    }
    

    render() {
        //console.log(this.state.rating)
        let stars = [];
        for (let i = 1; i <= numStars; i++) {
            stars.push(
                <TouchableWithoutFeedback 
                    key={i} 
                   // onPress={()=> {this.rate(i)}}
                >
                    <Animated.View>
                        <Star filled ={i<= this.state.rating ?true:false} />
                    </Animated.View>
                </TouchableWithoutFeedback>
            );
        }
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }} >{stars}</View>
            </View>
        );
    }
}



class Star extends React.Component {
    render() {
        return <FontAwesome name={this.props.filled === true ? "star" : "star-o"} color="gold" size={15} />;
    }

}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});
