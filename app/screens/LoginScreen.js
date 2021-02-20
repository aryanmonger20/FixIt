import React from 'react';
import { View ,StyleSheet,Image} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import Screen from "../components/Screen"

function LoginScreen(props) {
    return (
      <Screen>
          <Image 
          style={styles.logo}
          source={require("../assets/login.png")}/>
          <AppTextInput
         autoCapitalize="none"
         autoCorrect={false}
         icon="email"
         keyboardType="email-address"
         name="email"
         placeholder="Email"
         textContentType="emailAddress"

          />
           <AppTextInput
           autoCapitalize="none"
           autoCorrect={false}
           icon="lock"
           name="password"
           placeholder="Password"
           secureTextEntry
           textContentType="password"

          />
      </Screen>
    );
}

const styles = StyleSheet.create({
    logo:{
        height:80,
        width:80,
        alignSelf:"center",
        marginBottom:20,
        marginTop:50
    }
})
export default LoginScreen; 