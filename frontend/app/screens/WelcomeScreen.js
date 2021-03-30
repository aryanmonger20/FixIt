import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";
import colors from '../config/colors';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      //blurRadius={3}
      style={styles.background}
      source={require("../assets/blue.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/top.jpg")} />
        <Text style={styles.tagline}>Find What You Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          color="new"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    
    // backgroundColor:"white",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    //backgroundColor:colors.medium,
  },
  logo: {
    width: 300,
    height: 80,
    marginTop:20
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color:"#fcff65"
  }
});

export default WelcomeScreen;