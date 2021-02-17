import React from 'react';
import { Text, View ,TextInput,StyleSheet } from 'react-native';
import {MaterialCommunityIcons } from "@expo/vector-icons"
import colors from '../config/colors';
import defaultStyles from '../config/style'

function AppTextInput({icon,...otherProps}) {
    return (

      <View style={styles.container}> 
         { icon&&<MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}

         <TextInput style={defaultStyles.text}{...otherProps}/>
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        flexDirection:"row",
        borderRadius:25,
        width:"100%",
        padding:15,
        marginVertical:10
    },
  
    icon:{
        marginRight:10
    }
})

export default AppTextInput;